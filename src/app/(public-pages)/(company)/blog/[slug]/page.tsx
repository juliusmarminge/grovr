/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import type { MDXComponents } from "mdx/types";
import { getMDXComponent } from 'next-contentlayer/hooks'
import BlogMenu from "~/components/BlogMenu";

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return { title: post?.title }
}

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: (props) => <Image className="rounded-lg" {...props} />,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    notFound();
  }

  const MDXContent = getMDXComponent(post.body.code)

  return (
    <>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-6 pt-24 lg:px-8 lg:pt-32">
        <div
          className="absolute inset-x-0 -top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="w-full md:w-2/3">
          <h1 className="text-left text-3xl font-bold leading-normal lg:text-5xl">
            {post.title}
          </h1>
          <div className="my-4 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div className="relative flex gap-4">
              <Image
                src={post.author.avatar}
                alt="author avatar"
                className="h-10 w-10 rounded-full bg-gray-100"
                width={40}
                height={40}
              />
              <div className="flex flex-col justify-between leading-6">
                <p className="text-sm font-medium text-gray-700">
                  <a href={post.author.url}>{post.author.name}</a>
                </p>
                <p className="text-xs text-gray-500">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <time
                className="text-left text-sm text-zinc-500"
                dateTime={post.date}
              >
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
              <circle className="h-1 w-1 rounded-full bg-gray-300" />
              <p className="text-sm text-gray-500">
                {Number(post.readingTime.minutes).toFixed(0)} min read
              </p>
            </div>
          </div>
          <BlogMenu link={post.url} />
          <article className="prose-md prose prose-gray mt-4 max-w-none">
            <MDXContent components={mdxComponents} />
          </article>
          <div className="divider my-8 h-px border-t border-gray-300" />
          <div className="flex w-full flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-primary/10 p-4 shadow-md lg:flex-row">
            <Image
              src="/illustrations/app-launch.svg"
              alt="illustration"
              className="h-[300px] w-[300px]"
              width={300}
              height={300}
            />
            <div className="flex h-full flex-col justify-between gap-4 lg:gap-6">
              <div className="flex flex-col justify-start gap-2">
                <p className="text-xl font-semibold text-gray-900">
                  Loved this article?
                </p>
                <p className="text-base text-gray-600">
                  Join our waitlist to be one of the first to know when we
                  launch! At GroVr, we are creating a platform for community-led
                  product testing easier and more efficient that empowers both
                  consumers and clients.
                </p>
              </div>
              <Link
                href={"/waitlist"}
                className="flex items-center justify-center gap-2 self-start rounded-lg border border-gray-500 bg-transparent px-2 py-1 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-700 hover:text-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Join our waitlist
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl lg:top-[calc(100%-40rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PostLayout;
