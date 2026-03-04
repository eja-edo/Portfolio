import { Mail, Send } from 'lucide-react';
import { SITE } from '@/data/site.config';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const metadata = {
  title: `Contact - ${SITE.name}`,
  description: `Get in touch with ${SITE.name}`,
};

export default function ContactPage() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: SITE.social.github,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: SITE.social.linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: SITE.social.twitter,
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>

              {/* Email */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Email
                    </h3>
                    <a
                      href={`${SITE.social.email}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Availability
                </h3>
                <p className={`font-medium ${SITE.experience.status === 'available'
                  ? 'text-green-600 dark:text-green-400'
                  : SITE.experience.status === 'contracted'
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400'
                  }`}>
                  {SITE.experience.status === 'available' && 'Currently available for new projects'}
                  {SITE.experience.status === 'contracted' && 'Currently under contract'}
                  {SITE.experience.status === 'busy' && 'Fully booked at the moment'}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect on Social Media
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  if (!social.url) return null;
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                      aria-label={social.name}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form (Mailto fallback) */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h2>

            <form
              action={`${SITE.social.email}`}
              method="get"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="body"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="body"
                  name="body"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                This will open your default email client
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
