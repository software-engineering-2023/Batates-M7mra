"use client";

import * as bootstrap from "bootstrap";
import React, { useContext, useEffect, useRef, useState } from "react";

export const AlertContext = React.createContext<{
  showToast: (message: string, variant?: string, text?: string) => void;
}>(null!);

export function useAlerts() {
  return useContext(AlertContext);
}

export function AlertsProvider({ children }: { children: React.ReactNode }) {
  const toastRef = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<
    {
      message: string;
      variant: string;
      text: string;
    }[]
  >([]);

  useEffect(() => {
    if (toastRef.current) {
      toastRef.current.querySelectorAll(".toast").forEach((toast, i) => {
        if (!bootstrap.Toast.getInstance(toast)) {
          new bootstrap.Toast(toast).show();
          toast.addEventListener("hidden.bs.toast", () => {
            setMessages((messages) =>
              messages.filter((_, index) => index !== i)
            );
          });
        }
      });
    }
  }, [messages]);

  const showToast = (
    message: string,
    variant: string = "light",
    text: string = "dark"
  ) => {
    setMessages([...messages, { message, variant, text }]);
  };

  return (
    <AlertContext.Provider value={{ showToast }}>
      {children}

      <div
        id="toast-container"
        className="position-fixed bottom-0 end-0 p-3"
        ref={toastRef}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`toast text-bg-${message.variant} border-0  align-items-center`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex justify-content-between">
              <div className="toast-body">{message.message}</div>

              <button
                type="button"
                className={`btn btn-link text-${message.text}`}
                data-bs-dismiss="toast"
                aria-label="Close"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </AlertContext.Provider>
  );
}
