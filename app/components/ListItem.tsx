import Link from "next/link";
// import formatDate from "@/lib/formatDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  //   const formattedDate = formatDate(date);
  return (
    <li className="mt-4 text-2xl text-sky-50">
      <Link href={`/posts/${id}`} className="underline hover:text-sky-50/70">
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">Date</p>
    </li>
  );
}
