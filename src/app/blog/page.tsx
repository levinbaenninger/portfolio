import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Posts } from "@/components/blog/posts";
import { baseURL, blog, person } from "@/resources";

export function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
        baseURL={baseURL}
        description={blog.description}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        path={blog.path}
        title={blog.title}
      />
      <Heading marginBottom="l" variant="heading-strong-xl">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts columns="2" direction="column" range={[2]} thumbnail />
      </Column>
    </Column>
  );
}
