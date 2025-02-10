import NewsList from "@/component/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const latest = await getLatestNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latest} />
    </>
  );
}
