"use client";

import { useEffect, useState } from "react";

import { getAnonId } from "@/lib/anon";

export const useAnonId = () => {
  const [anonId, setAnonId] = useState("");

  useEffect(() => {
    setAnonId(getAnonId());
  }, []);

  return anonId;
};
