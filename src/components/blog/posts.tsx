import { Grid } from "@once-ui-system/core";
import { getPosts } from "@/utils/utils";
import Post from "./post";

interface PostsProps {
  columns?: "1" | "2" | "3";
  direction?: "row" | "column";
  exclude?: string[];
  range?: [number] | [number, number];
  thumbnail?: boolean;
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
}: PostsProps) {
  let allBlogs = getPosts(["src", "app", "blog", "posts"]);

  // Exclude by slug (exact match)
  if (exclude.length) {
    allBlogs = allBlogs.filter((post) => !exclude.includes(post.slug));
  }

  const sortedBlogs = allBlogs.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedBlogs = range
    ? sortedBlogs.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedBlogs.length
      )
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 ? (
        <Grid
          columns={columns}
          fillWidth
          gap="16"
          marginBottom="40"
          s={{ columns: 1 }}
        >
          {displayedBlogs.map((post) => (
            <Post
              direction={direction}
              key={post.slug}
              post={post}
              thumbnail={thumbnail}
            />
          ))}
        </Grid>
      ) : (
        "No earlier posts found."
      )}
    </>
  );
}
