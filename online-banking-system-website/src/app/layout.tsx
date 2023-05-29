"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { Miriam_Libre } from "next/font/google";

import "./global.scss";
import React from "react";
import { User, UserType } from "@/types";

const spaceMono = Miriam_Libre({
  weight: "400",
  subsets: ["latin"],
  variable: "--bs-body-font-family",
});

interface SidebarLink {
  href: string;
  icon: string;
  text: string;
  userTypes: UserType[];
}

const sidebarLinks: SidebarLink[] = [
  {
    href: "/",
    icon: "house",
    text: "Home",
    userTypes: [UserType.CLIENT, UserType.BANKER, UserType.ADMIN],
  },

  {
    href: "/bank-accounts",
    icon: "wallet",
    text: "Accounts",
    userTypes: [UserType.CLIENT],
  },

  {
    href: "/loans",
    icon: "cash-coin",
    text: "Loans",
    userTypes: [UserType.CLIENT],
  },

  {
    href: "/credit-cards",
    icon: "credit-card",
    text: "Credit Cards",
    userTypes: [UserType.CLIENT],
  },
  {
    href: "/bills",
    icon: "cash",
    text: "Bills",
    userTypes: [UserType.CLIENT],
  },
  {
    href: "/transfers",
    icon: "arrow-left-right",
    text: "Bank Transfers",
    userTypes: [UserType.CLIENT],
  },
  {
    href: "/contact-us",
    icon: "telephone",
    text: "Contact Us",
    userTypes: [UserType.CLIENT],
  },
  {
    href: "/report",
    icon: "bi bi-flag",
    text: "Report",
    userTypes: [UserType.CLIENT],
  },
  {
    href: "/announcement/banker-admin",
    icon: "bi bi-bell",
    text: "Announcement",
    userTypes: [UserType.BANKER, UserType.ADMIN],
  },
  {
    href: "/report/admin",
    icon: "bi bi-flag",
    text: "Client Technical Issues",
    userTypes: [UserType.ADMIN],
  },
  {
    href: "/report/banker",
    icon: "bi bi-flag",
    text: "Client Reports",
    userTypes: [UserType.BANKER],
  },
  {
    href: "/registration/registration-approval",
    icon: "bi bi-plus",
    text: "Registration Requests",
    userTypes: [UserType.BANKER],
  },
  {
    href: "/credit-cards/open/open-approval",
    icon: "bi bi-plus",
    text: "Credit Card Requests",
    userTypes: [UserType.BANKER],
  },
  {
    href: "/bank-accounts/open/open-approval",
    icon: "bi bi-plus",
    text: "Account Open Requests",
    userTypes: [UserType.BANKER],
  },
  {
    href: "/loans/banker-loan-page",
    icon: "bi bi-plus",
    text: "Loan Requests",
    userTypes: [UserType.BANKER],
  },
];

interface NavbarContext {
  setShowSidebar: (show: boolean) => void;
  setUser: (user: User) => void;
  setLoading: (loading: boolean) => void;
  user: User | null;
}

export const GlobalStateContext = React.createContext<NavbarContext>(null!);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setUser(JSON.parse(user));
      setShowSidebar(true);
      setLoading(false);
    } else {
      if (!pathname.startsWith("/auth")) {
        router.replace("/auth");
      }
    }
  }, []);

  const pathname = usePathname();

  return (
    <html lang="en" className={spaceMono.variable}>
      <head>
        <title>Online Banking System</title>
      </head>
      <body data-bs-theme="dark">
        <GlobalStateContext.Provider
          value={{ setShowSidebar, setUser, setLoading, user }}
        >
          {showSidebar && (
            <nav className="navbar navbar-expand-lg bg-body-tertiary d-block d-md-none fixed-top">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  Nextech
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
                            link.href == "/" && pathname == "/" && "active",
                            link.href != "/" &&
                              pathname.startsWith(link.href) &&
                              "active"
                          )}
                          aria-current="page"
                          href={link.href}
                        >
                          <i className={"bi me-2 bi-" + link.icon}></i>{" "}
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          )}

          {loading ? (
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

              <div className="d-none">{children}</div>
            </div>
          ) : (
            <>
              <div className="container-fluid h-100">
                <div className="d-block d-md-none p-4"></div>
                <div className="row h-100">
                  {showSidebar && (
                    <>
                      <div
                        className="col-md-4 col-xl-2 col-lg-3 d-md-flex flex-column flex-shrink-0 p-3 h-100 border-end fixed-top d-none bg-body-tertiary"
                        id="sidebar"
                        style={{
                          overflow: "scroll",
                        }}
                      >
                        <Link
                          href="/"
                          className="d-flex align-items-center text-decoration-none link-body-emphasis"
                        >
                          <span className="fs-1">Nextech</span>
                        </Link>
                        <ul className="nav nav-pills flex-column my-auto">
                          {sidebarLinks
                            .filter((l) => l.userTypes.includes(user!.type))
                            .map((link, i) => (
                              <li className="nav-item" key={i}>
                                <Link
                                  className={clsx(
                                    "nav-link py-4 link-body-emphasis",
                                    link.href == "/" &&
                                      pathname == "/" &&
                                      "active",
                                    link.href != "/" &&
                                      pathname.startsWith(link.href) &&
                                      "active"
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
                          <div className="d-flex flex-column">
                            <span>{user?.name}</span>
                            <small>({user?.type})</small>
                          </div>
                        </div>
                        <hr />
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => {
                            if (confirm("Are you sure you want to logout?")) {
                              localStorage.removeItem("user");
                              router.replace("/auth/login");
                            }
                          }}
                        >
                          <i className="bi bi-box-arrow-right me-2"></i> Logout
                        </button>
                      </div>

                      <div className="col-md-4 col-xl-2 col-lg-3 d-none d-md-block"></div>
                    </>
                  )}
                  <div className="col py-4">{children}</div>
                </div>
              </div>
            </>
          )}
        </GlobalStateContext.Provider>
      </body>
    </html>
  );
}
