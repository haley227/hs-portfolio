'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './Nav/components/ThemeToggle';
import { DesktopNavLinks } from './Nav/components/DesktopNavLinks';
import { useState } from 'react';

export type NavigationItem = {
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
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    return (
        <nav className="w-screen fixed top-0 left-0 bg-slate-50 dark:bg-gray-900 z-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <DesktopNavLinks navigationLinks={navigation} checkActivePath={checkActivePath}/>
                  <div className="sm:hidden px-2">
                    <button onClick={handleClick}
                      className="flex flex-col justify-center items-center">
                      <span className={`bg-sky-500 block transition-all duration-300 ease-out
                                      h-0.5 w-6 rounded-sm ${isOpen ?
                                      'rotate-45 translate-y-1' : '-translate-y-0.5'
                                      }`} >
                      </span>
                      <span className={`bg-sky-500 block transition-all duration-300 ease-out
                                      h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                                      'opacity-0' : 'opacity-100'
                                      }`} >
                      </span>
                      <span className={`bg-sky-500 block transition-all duration-300 ease-out
                                      h-0.5 w-6 rounded-sm ${isOpen ?
                                      '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                                      }`} >
                      </span>
                    </button>
                  </div>
                  <ThemeToggle />
                </div>
            </div>
            {isOpen && <div className="sm:hidden bg-slate-50 dark:bg-gray-900 z-[9999] dark:text-white w-screen h-screen" id="mobile-menu">
                <div className="space-y-1 flex flex-col justify-center text-center h-[calc(100vh-4rem)] gap-6">
                    {navigation.map(({ href, name }) => (
                        <Link key={href} href={href}
                          className="hover:scale-150 group transition px-2 pt-2 duration-300 text-gray-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-500 rounded-mdpy-2 text-5xl font-medium">
                          {name}
                        </Link>
                    ))}
                </div>
            </div>}
        </nav>
    );
};