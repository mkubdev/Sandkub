import {
  CalendarIcon,
  HomeIcon,
  MapIcon,
  MenuIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = [
    { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  ];

const NavDesktop = () => {
  return (
    <>
      <nav className="mt-5 flex-1" aria-label="Sidebar">
        <div className="px-2 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "mr-3 h-6 w-6"
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="font">Me</span>
          </div>
          {navigation2.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "mr-3 h-6 w-6"
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavDesktop;
