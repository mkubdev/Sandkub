import {
  CalendarIcon,
  HomeIcon
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

const navigation = [
    { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  ];

const NavDesktop = () => {
  const router = useRouter();

  return (
    <>
      <nav className="mt-5 flex-1" aria-label="Sidebar">
        <div className="px-2 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                router.route == item.href
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
            >
              <item.icon
                className={classNames(
                  router.route == item.href
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
