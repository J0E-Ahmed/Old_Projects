import { useLoaderData } from "react-router";
import Post from "./Post";
import classes from "./PostsList.module.css";
export default function PostList() {
  const post = useLoaderData();

  return (
    <>
      {post.length > 0 && (
        <ul className={classes.posts}>
          {post.map((prev) => (
            <Post
              key={prev.id}
              name={prev.name}
              text={prev.text}
              id={prev.id}
            />
          ))}
        </ul>
      )}
      {post.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h1>There are no posts yet</h1>
          <p>Starting add some!</p>
        </div>
      )}
    </>
  );
}
