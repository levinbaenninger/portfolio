"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

type ProjectCardProps = {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  githubLink: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  githubLink,
}) => {
  return (
    <Column fillWidth gap="m">
      <Carousel
        items={images.map((image) => ({
          slide: image,
          alt: title,
        }))}
        sizes="(max-width: 960px) 100vw, 960px"
      />
      <Flex
        fillWidth
        gap="l"
        paddingBottom="24"
        paddingTop="12"
        paddingX="s"
        s={{ direction: "column" }}
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" variant="heading-strong-xl" wrap="balance">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && (
              <AvatarGroup avatars={avatars} reverse size="m" />
            )}
            {description?.trim() && (
              <Text
                onBackground="neutral-weak"
                variant="body-default-s"
                wrap="balance"
              >
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  href={href}
                  style={{ margin: "0", width: "fit-content" }}
                  suffixIcon="arrowRight"
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  href={link}
                  style={{ margin: "0", width: "fit-content" }}
                  suffixIcon="internet"
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
              {githubLink && (
                <SmartLink
                  href={githubLink}
                  style={{ margin: "0", width: "fit-content" }}
                  suffixIcon="github"
                >
                  <Text variant="body-default-s">View on GitHub</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
