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
    href: "/loans",
    icon: "cash-coin",
    text: "Loans",
  },

  {
    href: "/credit-cards",
    icon: "credit-card",
    text: "Credit Cards",
  },
  {
    href: "/report",
    icon: "bi bi-flag",
    text: "Report",
  },
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
            <div className="col-md-4 col-xl-2 col-lg-3 d-flex flex-column flex-shrink-0 p-3 h-100 border-end fixed-top">
              <Link
                href="/"
                className="d-flex align-items-center text-decoration-none link-body-emphasis"
              >
                <span className="fs-1">Bankaak</span>
              </Link>
              <ul className="nav nav-pills flex-column my-auto">
                {sidebarLinks.map((link) => (
                  <li className="nav-item" key={link.href}>
                    <Link
                      className={clsx(
                        "nav-link py-4 link-body-emphasis",
                        pathname == link.href && "active"
                      )}
                      href={link.href}
                    >
                      <i className={`bi bi-${link.icon} me-3`}></i>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-start align-items-center gap-3 border-top pt-4">
                <img src="/ahmed-mohsen.png" height={45} width={45} className="rounded-circle"/>
                Ahmed Mohsen!
              </div>
            </div>

            <div className="col-md-4 col-xl-2 col-lg-3 "></div>

            <div className="col">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
