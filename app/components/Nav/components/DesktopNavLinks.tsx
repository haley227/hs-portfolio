import Link from "next/link";
import { NavigationItem } from "../../Nav";

export const DesktopNavLinks = ({ navigationLinks, checkActivePath}: { navigationLinks: NavigationItem[], checkActivePath: (path: string) => boolean}) => {
return (
    <div className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="sm:ml-6">
                        <div className="flex space-x-4">
                            {navigationLinks.map(({ href, name }) => (
                                <Link key={href} href={href}
                                    className="group transition duration-300 text-gray-900 dark:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    {name}
                                    <span className={`${!checkActivePath(href) ? 'max-w-0' : ''} block group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600`}></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
)
};