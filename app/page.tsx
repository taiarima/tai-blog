import Posts from "./components/Posts";
import Image from "next/image";
import TabSidePanel from "./components/TabSidePanel";

export default function Home() {
  return (
    <main className="bg-slate-800 text-sky-50 min-h-screen">
      {/* <TabSidePanel /> */}
      <Image
        className="mx-auto p-8"
        height={384}
        width={384}
        src="/tai-blog-silly-pic.png"
        alt="Tai Himself"
      ></Image>
      <h1 className="text-6xl text-center font-title font-bold mb-10">
        Making programming make sense
      </h1>
      <Posts />
    </main>
  );
}
