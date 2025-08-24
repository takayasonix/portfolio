export interface ContributionDay {
  contributionCount: number;
  date: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export interface RepositoryContributions {
  repository: {
    name: string;
    url: string;
  };
  contributions: ContributionCalendar;
}

export async function getGitHubContributions(username: string): Promise<ContributionCalendar | null> {
  try {
    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return null;
    }

    return data.data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error('Failed to fetch GitHub contributions:', error);
    return null;
  }
}

export async function getRepositoryContributions(username: string, repositoryName: string): Promise<RepositoryContributions | null> {
  try {
    // シンプルなREST APIを使用
    const response = await fetch(`https://api.github.com/repos/${username}/${repositoryName}/stats/commit_activity`, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const weeklyStats = await response.json();
    
    if (!Array.isArray(weeklyStats) || weeklyStats.length === 0) {
      return null;
    }

    // 過去3ヶ月（約90日）のデータのみを処理
    const weeks: ContributionWeek[] = [];
    const today = new Date();
    const ninetyDaysAgo = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000);
    
    // 3ヶ月以内の週のみをフィルタリング
    const recentWeeks = weeklyStats.filter(weekData => {
      const weekStart = new Date(weekData.week * 1000);
      return weekStart >= ninetyDaysAgo;
    });
    
    // 最大13週分に制限
    const limitedWeeks = recentWeeks.slice(-13);
    
    for (const weekData of limitedWeeks) {
      if (!weekData.days || !Array.isArray(weekData.days)) continue;
      
      const contributionDays: ContributionDay[] = [];
      
      for (let i = 0; i < 7; i++) {
        const commitCount = weekData.days[i] || 0;
        const weekStart = new Date(weekData.week * 1000);
        const dayDate = new Date(weekStart.getTime() + i * 24 * 60 * 60 * 1000);
        
        contributionDays.push({
          contributionCount: commitCount,
          date: dayDate.toISOString().split('T')[0]
        });
      }
      
      weeks.push({ contributionDays });
    }
    
    const totalContributions = weeks.flatMap(week => week.contributionDays)
      .reduce((sum, day) => sum + day.contributionCount, 0);

    return {
      repository: {
        name: repositoryName,
        url: `https://github.com/${username}/${repositoryName}`
      },
      contributions: {
        totalContributions,
        weeks
      }
    };
  } catch (error) {
    console.error('Failed to fetch repository contributions:', error);
    return null;
  }
}

// フォールバック用のダミーデータ
export function generateDummyContributions(): ContributionCalendar {
  const weeks: ContributionWeek[] = [];
  const today = new Date();
  
  // 過去1年分のデータを生成
  for (let week = 0; week < 53; week++) {
    const contributionDays: ContributionDay[] = [];
    
    for (let day = 0; day < 7; day++) {
      const date = new Date(today);
      date.setDate(date.getDate() - (53 - week) * 7 - (7 - day));
      
      // ランダムなコントリビューション数（実際の開発パターンを模倣）
      let count = 0;
      const random = Math.random();
      
      if (random > 0.7) count = Math.floor(Math.random() * 3) + 1;      // 30%で1-3
      else if (random > 0.4) count = Math.floor(Math.random() * 4) + 4; // 30%で4-7
      else if (random > 0.1) count = Math.floor(Math.random() * 3) + 8; // 30%で8-10
      // 10%で0（何もない日）
      
      contributionDays.push({
        contributionCount: count,
        date: date.toISOString().split('T')[0]
      });
    }
    
    weeks.push({ contributionDays });
  }
  
  const totalContributions = weeks.flatMap(week => week.contributionDays)
    .reduce((sum, day) => sum + day.contributionCount, 0);
  
  return {
    totalContributions,
    weeks
  };
}

// obsidian-vault用のダミーデータ
export function generateObsidianVaultDummyContributions(): RepositoryContributions {
  console.log('Generating obsidian-vault dummy contributions...');
  const weeks: ContributionWeek[] = [];
  const today = new Date();
  
  // 過去3ヶ月（約90日）のデータを生成
  const totalWeeks = 13; // 13週分
  
  console.log('Total weeks to generate:', totalWeeks);
  
  for (let week = 0; week < totalWeeks; week++) {
    const contributionDays: ContributionDay[] = [];
    
    for (let day = 0; day < 7; day++) {
      // 現在の週から過去に遡って計算
      const date = new Date(today);
      const daysToSubtract = (totalWeeks - week - 1) * 7 + (6 - day);
      date.setDate(date.getDate() - daysToSubtract);
      
      // 平日多め・週末少なめの仮パターン
      let count = 0;
      const random = Math.random();
      const dayOfWeek = date.getDay();
      const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
      
      if (isWeekday) {
        if (random > 0.6) count = Math.floor(Math.random() * 5) + 3;      // 40%で3-7
        else if (random > 0.3) count = Math.floor(Math.random() * 3) + 1; // 30%で1-3
        else count = Math.floor(Math.random() * 2) + 8;                   // 30%で8-9
      } else {
        if (random > 0.8) count = Math.floor(Math.random() * 2) + 1;     // 20%で1-2
      }
      
      contributionDays.push({
        contributionCount: count,
        date: date.toISOString().split('T')[0]
      });
    }
    
    weeks.push({ contributionDays });
  }
  
  const totalContributions = weeks.flatMap(week => week.contributionDays)
    .reduce((sum, day) => sum + day.contributionCount, 0);
  
  const result = {
    repository: {
      name: 'obsidian-vault',
      url: 'https://github.com/takayasonix/obsidian-vault'
    },
    contributions: {
      totalContributions,
      weeks
    }
  };
  
  console.log('Generated result:', result);
  console.log('Weeks count:', result.contributions.weeks.length);
  console.log('First week:', result.contributions.weeks[0]);
  
  return result;
}
