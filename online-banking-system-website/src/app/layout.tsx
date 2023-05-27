"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { Miriam_Libre } from "next/font/google";

import "./global.scss";
import React from "react";

const spaceMono = Miriam_Libre({
  weight: "400",
  subsets: ["latin"],
  variable: "--bs-body-font-family",
});

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
    href: "/bills",
    icon: "cash",
    text: "Bills",
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
  const router = useRouter();

  return (
    <html lang="en" className={spaceMono.variable}>
      <head>
        <title>Online Banking System</title>
      </head>
      <body data-bs-theme="dark">
        {/* <AlertsProvider> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-block d-md-none fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Bankaak
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {sidebarLinks.map((link, i) => (
                  <li className="nav-item" key={i}>
                    <a
                      className={clsx(
                        "nav-link",
                        pathname == link.href && "active"
                      )}
                      aria-current="page"
                      href={link.href}
                    >
                      <i className={"bi me-2 bi-" + link.icon}></i> {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid h-100">
          <div className="d-block d-md-none p-4"></div>
          <div className="row h-100">
            <div
              className="col-md-4 col-xl-2 col-lg-3 d-md-flex flex-column flex-shrink-0 p-3 h-100 border-end fixed-top d-none bg-body-tertiary"
              id="sidebar"
            >
              <Link
                href="/"
                className="d-flex align-items-center text-decoration-none link-body-emphasis"
              >
                <span className="fs-1">Bankaak</span>
              </Link>
              <ul className="nav nav-pills flex-column my-auto">
                {sidebarLinks.map((link, i) => (
                  <li className="nav-item" key={i}>
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
                <img
                  src="/ahmed-mohsen.png"
                  height={45}
                  width={45}
                  className="rounded-circle"
                />
                Ahmed Mohsen!
              </div>
            </div>

            <div className="col-md-4 col-xl-2 col-lg-3 d-none d-md-block"></div>

            <div className="col py-4">{children}</div>
          </div>
        </div>
        {/* </AlertsProvider> */}
      </body>
    </html>
  );
}
