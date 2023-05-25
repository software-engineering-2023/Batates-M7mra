"use client";

import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Link from "next/link";

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
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  });

  return (
    <html lang="en">
      <head>
        <title>Online Banking System</title>
      </head>
      <body>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-md-4 col-xl-2 col-lg-3 d-flex flex-column flex-shrink-0 p-3 h-100 border-end bg-body-tertiary">
              <Link
                href="/"
                className="d-flex align-items-center text-decoration-none link-body-emphasis"
              >
                <span className="fs-4">Ahmed Mohsen</span>
              </Link>
              <ul className="nav nav-pills flex-column my-auto">
                {sidebarLinks.map((link) => (
                  <li className="nav-item my-3" key={link.href}>
                    <Link
                      className="nav-link link-secondary link-hover-primary"
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
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
