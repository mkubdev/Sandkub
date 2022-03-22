import {
  ExternalLinkIcon,
  HomeIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "Blog", href: "/blog", icon: NewspaperIcon, current: false },
  // { name: "Call me", href: "/callme", icon: CalendarIcon, current: false },
];

const me = [
  { name: "Github", href: "https://github.com/mkubdev", icon: ExternalLinkIcon, current: false },
  { name: "Linkedin", href: "#", icon: ExternalLinkIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SidebarSeparator({ title }) {
  return (
    <div className="flex items-center flex-shrink-0 px-4">
      <span className="font-semibold">{title}</span>
    </div>
  );
}

function LinkItem({ item }) {
  return (
    <a
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
  );
}

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img
            className="h-8 w-auto"
            src="https://img.icons8.com/stickers/100/000000/palm-tree.png"
            alt="Sandkub"
          />
          <span 
            className="mx-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
          >Sandkub</span>
          
        </div>
        <nav className="mt-5 flex-1" aria-label="Sidebar">
          <div className="px-2 space-y-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
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
              </Link>
            ))}
            <SidebarSeparator title="Me" />

            {me.map((item) => (
              <LinkItem key={item.name} item={item} />
            ))}
          </div>
        </nav>
      </div>
      <div className="flex-shrink-0 flex border-t border-gray-200 px-3 py-2">
        <a href="#" className="flex-shrink-0 w-full group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-7 w-7 rounded-full"
                src="https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                Maxime Kubik
              </p>
              <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
