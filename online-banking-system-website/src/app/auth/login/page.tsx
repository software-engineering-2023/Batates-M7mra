"use client";

import { GlobalStateContext } from "@/app/layout";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export enum UserType {
  CLIENT = "Client",
  BANKER = "Banker",
  ADMIN = "Admin",
}

export interface User {
  name: string;
  email: string;
  username: string;
  type: UserType;
  password: string;
}

const users: User[] = [
  {
    name: "Mathew Hany",
    email: "mathew.hanybb@gmail.com",
    username: "mathew.hany",
    type: UserType.CLIENT,
    password: "mathew",
  },

  {
    name: "Boles Waheed",
    email: "boles.boles@student.guc.edu.eg",
    username: "boles.boles",
    type: UserType.BANKER,
    password: "boles",
  },

  {
    name: "Nada Labib",
    email: "nada.labib@guc.edu.eg",
    username: "nada.labib",
    type: UserType.ADMIN,
    password: "nada",
  },

  {
    name: "Admin",
    email: "admin@gmail.com",
    username: "admin",
    type: UserType.ADMIN,
    password: "admin",
  },
];

export default function LoginPage() {
  const router = useRouter();
  const { setShowSidebar, setLoading: setGlobalLoading } =
    useContext(GlobalStateContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      router.replace("/");
    } else {
      setShowSidebar(false);
      setGlobalLoading(false);
    }
  }, []);

  const login = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
      const matchingUsers = users.filter(
        (user) => user.username === username && user.password === password
      );

      if (matchingUsers.length > 0) {
        setShowSuccess(true);
        setShowError(false);
        setTimeout(() => {
          localStorage.setItem("user", JSON.stringify(matchingUsers[0]));
          location.reload();
        }, 1000);
      } else {
        setShowSuccess(false);
        setShowError(true);
      }
    }, 1000);
  };

  return (
    <div className="container">
      {!localStorage.getItem("user") && (
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 d-flex justify-content-center align-items-center flex-column">
            <div
              className="p-2 rounded-circle bg-secondary d-flex justify-content-center align-items-center bg-body-tertiary"
              style={{ width: 100, height: 100 }}
            >
              <i className="bi bi-bank fs-1"></i>
            </div>
            <div className="card mt-5 w-100 bg-">
              <div className="card-header fw-2 text-center fs-2">Login</div>
              <div className="card-body">
                {showSuccess && (
                  <div className="alert alert-success" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Login successful! Redirecting...
                  </div>
                )}
                {showError && (
                  <div className="alert alert-danger" role="alert">
                    <i className="bi bi-exclamation-circle-fill me-2"></i>
                    Username or password is incorrect!
                  </div>
                )}
                <form>
                  <div className="mb-4">
                    <label htmlFor="username" className="form-label">
                      <i className="bi bi-person me-2"></i>
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      <i className="bi bi-lock me-2"></i>
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg d-flex justify-content-center align-items-center"
                      style={{ height: 70 }}
                      onClick={login}
                      disabled={buttonLoading}
                    >
                      {buttonLoading ? (
                        <i className="spinner-border spinner-border-sm me-3 text-white"></i>
                      ) : (
                        <i className="bi bi-box-arrow-in-right me-3"></i>
                      )}
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
