import formatDate from "@/lib/formatDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  const formattedDate = formatDate(date.toString());
  return (
    <div className="w-full bg-slate-800">
      <main className="text-sky-50 prose-invert px-6 prose prose-xl prose-slate mx-auto">
        <h1 className="pt-8">{title}</h1>
        <p className="-mt-8">{formattedDate}</p>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
        <p className="py-8">
          <Link href="/">Read more articles</Link>
        </p>
      </main>
    </div>
  );
}
