import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="bg-slate-800 text-sky-50 min-h-screen">
      <img
        className="mx-auto p-8 h-96"
        src="/tai-blog-silly-pic.png"
        alt="Tai Himself"
      ></img>
      <h1 className="text-6xl text-center font-title font-bold mb-10">
        Making programming make sense
      </h1>
      <Posts />
    </main>
  );
}
