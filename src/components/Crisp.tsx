"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID === undefined
    )
      return;
    Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID ?? "");
  }, []);

  return null;
};

export default CrispChat;
