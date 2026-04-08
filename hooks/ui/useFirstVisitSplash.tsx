"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface FirstVisitSplashContextValue {
  showSplash: boolean;
  setShowSplash: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
  isFirstVisit: boolean;
}

const FirstVisitSplashContext =
  createContext<FirstVisitSplashContextValue | null>(null);

export const FirstVisitSplashProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showSplash, setShowSplash] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("home-visited");

    if (!visited) {
      setIsFirstVisit(true);
      setShowSplash(true);
      sessionStorage.setItem("home-visited", "true");
    }

    setChecked(true);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (showSplash) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [showSplash]);

  return (
    <FirstVisitSplashContext.Provider
      value={{
        showSplash,
        setShowSplash,
        checked,
        isFirstVisit,
      }}
    >
      {children}
    </FirstVisitSplashContext.Provider>
  );
};

export const useFirstVisitSplash = () => {
  const context = useContext(FirstVisitSplashContext);

  if (!context) {
    throw new Error(
      "useFirstVisitSplash must be used within FirstVisitSplashProvider"
    );
  }

  return context;
};
