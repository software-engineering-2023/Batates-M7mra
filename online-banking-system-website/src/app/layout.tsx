"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import "./global.scss";

const sidebarLinks = [
  {
    href: "/",
    icon: "house",
    text: "Home",
  },

  {
    href: "/accounts",
    icon: "wallet",
    text: "Accounts",
  },

  {
    href: "/transactions",
    icon: "arrow-right-square",
    text: "Transactions",
  },
  {
    href: "/loans/loan-application",
    icon: "wallet",
    text: "Loans"
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  });

  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Online Banking System</title>
      </head>
      <body data-bs-theme="dark">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-md-4 col-xl-2 col-lg-3 d-flex flex-column flex-shrink-0 p-3 h-100 border-end">
              <Link
                href="/"
                className="d-flex align-items-center text-decoration-none link-body-emphasis"
              >
                <span className="fs-4">Ahmed Mohsen</span>
              </Link>
              <ul className="nav nav-pills flex-column my-auto">
                {sidebarLinks.map((link) => (
                  <li className="nav-item" key={link.href}>
                    <Link
                      className={clsx(
                        "nav-link py-4",
                        pathname.startsWith(link.href) && "active"
                      )}
                      href={link.href}
                    >
                      <i className={`bi bi-${link.icon} me-3`}></i>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
