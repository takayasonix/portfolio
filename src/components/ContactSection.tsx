import { Github, Twitter, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/your-username',
      icon: Github,
      color: 'hover:text-gray-900'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/your-username',
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/your-username',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/your-username',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'Wantedly',
      url: 'https://www.wantedly.com/id/your-username',
      icon: ExternalLink,
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">

        
        <div className="max-w-4xl mx-auto text-center">
          <div>
                              <div className="flex flex-wrap justify-center gap-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/50 bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                      >
                  <social.icon className="w-8 h-8" />
                  <span className="text-sm font-medium text-gray-700">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
