"use client";

import { LinkIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function BlogMenu({ link }: { link: string }) {
  const copyLink = async () => {
    await navigator.clipboard.writeText(`https://grovrtesting.com${link}`);
    toast.success("Link copied to clipboard");
  };

  return (
    <div className="my-4 flex items-center justify-start gap-4">
      <a
        href={`https://twitter.com/intent/tweet/?url=https://grovrtesting.com${link}`}
        className="rounded-full text-center text-gray-500 hover:text-primary/80"
        target="_blank"
      >
        <BsTwitter className="text-twitter h-5 w-5" />
      </a>
      <button
        className="rounded-full text-center text-gray-500 hover:text-primary/80"
        onClick={async () => {
          await copyLink();
          window.open(`https://www.facebook.com/`, "_blank");
        }}
      >
        <BsFacebook className="text-facebook h-5 w-5" />
      </button>
      <button
        className="rounded-full text-center text-gray-500 hover:text-primary/80"
        onClick={async () => {
          await copyLink();
          window.open(`https://www.linkedin.com/`, "_blank");
        }}
      >
        <BsLinkedin className="h-5 w-5" />
      </button>
      <button
        className="rounded-full text-center text-gray-500 hover:text-primary/80"
        onClick={async () => {
          await copyLink();
        }}
      >
        <LinkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
