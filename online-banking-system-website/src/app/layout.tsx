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
    text: "Loans",
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
                <span className="fs-4">Ahmed Mohsen</span>
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
            </div>

            <div className="col-md-4 col-xl-2 col-lg-3 "></div>

            <div className="col">
              <nav className="navbar navbar-expand-lg bottom">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a className="nav-link">Disabled</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
