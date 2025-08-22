"use client";

import { Avatar, Card, Column, Media, Row, Text } from "@once-ui-system/core";
import { person } from "@/resources";
import { formatDate } from "@/utils/formatDate";

interface PostProps {
  // biome-ignore lint/suspicious/noExplicitAny: No type defined for post
  post: any;
  thumbnail: boolean;
  direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
  return (
    <Card
      background="transparent"
      border="transparent"
      direction={direction}
      fillWidth
      gap={direction === "column" ? undefined : "24"}
      href={`/blog/${post.slug}`}
      key={post.slug}
      padding="4"
      radius="l-4"
      s={{ direction: "column" }}
      transition="micro-medium"
    >
      {post.metadata.image && thumbnail && (
        <Media
          alt={`Thumbnail of ${post.metadata.title}`}
          aspectRatio="16 / 9"
          border="neutral-alpha-weak"
          cursor="interactive"
          priority
          radius="l"
          sizes="(max-width: 768px) 100vw, 640px"
          src={post.metadata.image}
        />
      )}
      <Row fillWidth>
        <Column gap="20" maxWidth={28} paddingX="m" paddingY="24" vertical="center">
          <Row gap="24" vertical="center">
            <Row gap="16" vertical="center">
              <Avatar size="s" src={person.avatar} />
              <Text variant="label-default-s">{person.name}</Text>
            </Row>
            <Text onBackground="neutral-weak" variant="body-default-xs">
              {formatDate(post.metadata.publishedAt, false)}
            </Text>
          </Row>
          <Text variant="heading-strong-l" wrap="balance">
            {post.metadata.title}
          </Text>
          {post.metadata.tag && (
            <Text onBackground="neutral-weak" variant="label-strong-s">
              {post.metadata.tag}
            </Text>
          )}
        </Column>
      </Row>
    </Card>
  );
}
