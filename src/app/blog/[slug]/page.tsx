import {
  Avatar,
  Column,
  Heading,
  HeadingNav,
  Icon,
  Media,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX, ScrollToHash } from "@/components";
import { about, baseURL, blog, person } from "@/resources";
import { formatDate } from "@/utils/format-date";
import { getPosts } from "@/utils/utils";

export function generateStaticParams(): { slug: string }[] {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "blog", "posts"]);
  const post = posts.find((p) => p.slug === slugPath);

  if (!post) {
    return {};
  }

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL,
    image:
      post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${blog.path}/${post.slug}`,
  });
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "blog", "posts"]).find(
    (p) => p.slug === slugPath
  );

  if (!post) {
    notFound();
  }

  const _avatars =
    post.metadata.team?.map((p) => ({
      src: p.avatar,
    })) || [];

  return (
    <Row fillWidth marginBottom="40">
      <Row m={{ hide: true }} maxWidth={12} />
      <Row fillWidth horizontal="center">
        <Column
          as="section"
          gap="l"
          horizontal="center"
          maxWidth="m"
          paddingTop="24"
        >
          <Schema
            as="blogPosting"
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
            baseURL={baseURL}
            dateModified={post.metadata.publishedAt}
            datePublished={post.metadata.publishedAt}
            description={post.metadata.summary}
            image={
              post.metadata.image ||
              `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
            }
            path={`${blog.path}/${post.slug}`}
            title={post.metadata.title}
          />
          <Column align="center" gap="16" horizontal="center" maxWidth="s">
            <SmartLink href="/blog">
              <Text variant="label-strong-m">Blog</Text>
            </SmartLink>
            <Text
              marginBottom="12"
              onBackground="neutral-weak"
              variant="body-default-xs"
            >
              {post.metadata.publishedAt &&
                formatDate(post.metadata.publishedAt)}
            </Text>
            <Heading variant="display-strong-m">{post.metadata.title}</Heading>
          </Column>
          <Row horizontal="center" marginBottom="32">
            <Row gap="16" vertical="center">
              <Avatar size="s" src={person.avatar} />
              <Text onBackground="brand-weak" variant="label-default-m">
                {person.name}
              </Text>
            </Row>
          </Row>
          {post.metadata.image && (
            <Media
              alt={post.metadata.title}
              aspectRatio="16/9"
              border="neutral-alpha-weak"
              marginBottom="8"
              marginTop="12"
              priority
              radius="l"
              sizes="(min-width: 768px) 100vw, 768px"
              src={post.metadata.image}
            />
          )}
          <Column as="article" maxWidth="s">
            <CustomMDX source={post.content} />
          </Column>
          <ScrollToHash />
        </Column>
      </Row>
      <Column
        fitHeight
        gap="16"
        m={{ hide: true }}
        maxWidth={12}
        paddingLeft="40"
        position="sticky"
        top="80"
      >
        <Row
          gap="12"
          onBackground="neutral-medium"
          paddingLeft="2"
          textVariant="label-default-s"
          vertical="center"
        >
          <Icon name="document" size="xs" />
          On this page
        </Row>
        <HeadingNav fitHeight />
      </Column>
    </Row>
  );
}
