import clsx from "clsx";
import React from "react";

interface NavigationItem {
  name: string;
  href: string;
  icon: any;
  count?: string;
  current: boolean;
}

interface TeamItem {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
}

export interface SidebarProps {
  navigation: NavigationItem[];
  teams?: TeamItem[]; // Make 'teams' optional
  profileImageUrl: string;
  profileName: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  navigation,
  teams, // 'teams' is now an optional prop
  profileImageUrl,
  profileName,
}: SidebarProps) => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-600 dark:bg-gray-900 min-w-64">
      <div className="flex h-16 shrink-0 items-center px-6">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={clsx(
                      item.current
                        ? "dark:bg-gray-800 bg-blue-700 text-white"
                        : "dark:text-gray-400 text-blue-200 hover:text-white dark:hover:bg-gray-800 hover:bg-blue-700",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold px-6"
                    )}
                  >
                    <item.icon
                      className={clsx(
                        item.current
                          ? "text-white"
                          : "text-blue-200 dark:text-gray-200 group-hover:text-white",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                    {item.count ? (
                      <span
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full dark:bg-gray-900 bg-blue-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-blue-500 dark:ring-gray-700"
                        aria-hidden="true"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          {teams &&
            teams.length > 0 && ( // Check if 'teams' is defined and not empty
              <li>
                <div className="text-xs font-semibold leading-6 dark: text-gray-400 dark:text-gray-400 text-blue-200 px-6">
                  Your teams
                </div>
                <ul role="list" className="-mx-2 mt-2">
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={clsx(
                          team.current
                            ? "dark:bg-gray-800 bg-blue-700 text-white dark:text-gray-400"
                            : "dark:text-gray-400 dark:hover:bg-gray-800 text-blue-200 hover:text-white hover:bg-blue-700 dark:text-gray-400",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold px-6"
                        )}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border dark:border-gray-700 dark:bg-gray-800 border-blue-400 bg-blue-500 text-[0.625rem] font-medium text-white">
                          {team.initial}
                        </span>
                        <span className="truncate">{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          <li className="-mx-6 mt-auto px-6">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-blue-700"
            >
              <img
                className="h-8 w-8 rounded-full bg-blue-700"
                src={profileImageUrl}
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">{profileName}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
