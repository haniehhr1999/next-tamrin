import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children }) => {
  const path = usePathname();
  console.log("path =>", path);

  const router = useRouter();
  console.log("router =>", router.pathname);

  const ROUTES = [
    {
      title: "products",
      path: "/tamrin1/view1",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "blogs",
      path: "/blogs",
    },
    {
      title: "contact",
      path: "/contacts",
    }
  ];
  return (
    <>
      <header
        className={
          router.pathname === "/tamrin1/view1/[id]"
            ? "bg-red-800 py-3 px-6 flex justify-between items-center"
            : "bg-blue-900 py-3 px-6 flex justify-between items-center"
        }
      >
        <nav>
          <ul className="flex ">
            {ROUTES.map((route) => (
              <li>
                <Link
                  className={
                    route.path === path
                      ? "px-3 text-amber-400 font-bold"
                      : "text-white px-3"
                  }
                  href={route.path}
                >
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <h1 className="text-orange-300 font-bold text-3xl">HANA SHOP</h1>
      </header>

      {children}
    </>
  );
};

export default Layout;
