import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((newList) => {
        return (
          <li key={newList.id}>
            <Link href={`/news/${newList.slug}`}>
              <img src={`/images/news/${newList.image}`} alt={newList.title} />
              <span>{newList.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
