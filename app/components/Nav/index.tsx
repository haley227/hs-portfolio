'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './components/ThemeToggle';
import { DesktopNavLinks } from './components/DesktopNavLinks';

type NavigationItem = {
  href: string
  name: string
};

const navigation: NavigationItem[] = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
  { href: '/blog', name: 'Blog' },
  { href: '/portfolio', name: 'My Work' },
  { href: '/contact', name: 'Contact' },
];

function useActivePath(): (path: string) => boolean {
  const pathname = usePathname();

  const checkActivePath = (path: string) => {
    return path === pathname
  };

  return checkActivePath;
}

export const Nav = () => {
    const checkActivePath = useActivePath();

    return (
        <nav className="w-screen fixed top-0 left-0 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <DesktopNavLinks navigationLinks={navigation} checkActivePath={checkActivePath}/>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map(({ href, name }) => (
                        <Link key={href} href={href}
                            className="group transition duration-300 text-gray-900 rounded-md px-3 py-2 text-sm font-medium">
                            {name}
                            <span className={`${!checkActivePath(href) ? 'max-w-0' : ''} block group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600`}></span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};