'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

type NavigationItem = {
  href: string
  name: string
};

const navigation: NavigationItem[] = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
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

function toggleDarkMode() {
    console.log('toggle dark mode');
  document.querySelector('html')?.classList.toggle('dark');
}

export const Nav = () => {
    const checkActivePath = useActivePath();

    return (
        <nav className="w-screen fixed top-0 left-0 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4"> 
                            {navigation.map(({ href, name }) => (
                                <Link key={href} href={href} 
                                    className="group transition duration-300 text-gray-900 dark:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    {name}
                                    <span className={`${!checkActivePath(href) ? 'max-w-0' : ''} block group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600`}></span>
                                </Link>
                            ))}
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleDarkMode} viewBox="0 0 24 24" fill="currentColor" className="dark:block hidden w-6 h-6 text-amber-400 cursor-pointer">
                                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleDarkMode} viewBox="0 0 24 24" fill="currentColor" className="dark:hidden w-6 h-6 cursor-pointer">
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
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