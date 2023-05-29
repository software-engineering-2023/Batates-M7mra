"use client";

import { useContext, useEffect } from "react";
import { GlobalStateContext } from "../layout";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { setLoading, setShowSidebar } = useContext(GlobalStateContext);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      router.replace("/");
    } else {
      setShowSidebar(false);
      setLoading(false);
    }
  }, []);

  return <>{children}</>;
}
