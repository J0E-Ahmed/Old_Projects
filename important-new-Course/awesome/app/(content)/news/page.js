import NewsList from "@/component/news-list";
import { getAllNews } from "@/lib/news";

export default async function New() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
