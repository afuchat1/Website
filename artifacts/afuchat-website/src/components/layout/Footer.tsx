import { Link } from 'wouter';
import { Twitter, Linkedin, Github } from 'lucide-react';
import logo from '@assets/afuchat_logo_transparent.png';

export default function Footer() {
  return (
    <footer className="border-t border-white/30 pt-16 pb-8">
      <div className="max-container container-pad">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img src={logo} alt="AfuChat Logo" className="h-8 w-auto" />
              <span className="font-bold text-[#0A2540] text-xl">AfuChat</span>
            </Link>
            <p className="text-[#2D5A7A] text-sm max-w-sm leading-relaxed">
              One identity. Every service. Zero friction.<br />
              The complete ecosystem for your digital life.
            </p>
            <div className="flex items-center gap-4 mt-1">
              {[
                { href: 'https://twitter.com', Icon: Twitter },
                { href: 'https://linkedin.com', Icon: Linkedin },
                { href: 'https://github.com',   Icon: Github  },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer"
                   className="text-[#2D5A7A] hover:text-[#1F95FF] transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              heading: 'Products',
              links: [
                { label: 'AfuMail',    href: '/products/afumail'  },
                { label: 'AfuChat',    href: '/products/afuchat'  },
                { label: 'AfuAI',      href: '/products/afuai'    },
                { label: 'AfuCloud',   href: '/products/afucloud' },
                { label: 'View all →', href: '/products'          },
              ],
            },
            {
              heading: 'Platform',
              links: [
                { label: 'Ecosystem',   href: '/ecosystem'   },
                { label: 'Developers',  href: '/developers'  },
                { label: 'API Docs',    href: '/developers'  },
                { label: 'Status',      href: '#'            },
              ],
            },
            {
              heading: 'Company',
              links: [
                { label: 'About',        href: '/about'          },
                { label: 'Careers',      href: '/about/careers'  },
                { label: 'Press',        href: '/about/press'    },
                { label: 'Brand Assets', href: '/about/brand'    },
              ],
            },
          ].map(col => (
            <div key={col.heading}>
              <h4 className="font-semibold text-[#0A2540] mb-4">{col.heading}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href}
                      className="text-sm text-[#2D5A7A] hover:text-[#1F95FF] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/30 flex flex-col md:flex-row
                        items-center justify-between gap-4">
          <p className="text-sm text-[#2D5A7A]">
            © {new Date().getFullYear()} AfuChat Technologies Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy Policy', href: '/legal/privacy' },
              { label: 'Terms',          href: '/legal/terms'   },
              { label: 'Cookies',        href: '/legal/cookies' },
            ].map(l => (
              <Link key={l.label} href={l.href}
                className="text-sm text-[#2D5A7A] hover:text-[#1F95FF] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
