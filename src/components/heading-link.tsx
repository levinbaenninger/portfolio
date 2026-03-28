"use client";

import { Flex, Heading, IconButton, useToast } from "@once-ui-system/core";
import type React from "react";
import type { JSX } from "react";

import styles from "@/components/heading-link.module.scss";

interface HeadingLinkProps {
  children: React.ReactNode;
  id: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  style?: React.CSSProperties;
}

export const HeadingLink: React.FC<HeadingLinkProps> = ({
  id,
  level,
  children,
  style,
}) => {
  const { addToast } = useToast();

  const copyURL = (urlId: string): void => {
    const url = `${window.location.origin}${window.location.pathname}#${urlId}`;
    navigator.clipboard.writeText(url).then(
      () => {
        addToast({
          variant: "success",
          message: "Link copied to clipboard.",
        });
      },
      () => {
        addToast({
          variant: "danger",
          message: "Failed to copy link.",
        });
      }
    );
  };

  const variantMap = {
    1: "display-strong-xs",
    2: "heading-strong-xl",
    3: "heading-strong-l",
    4: "heading-strong-m",
    5: "heading-strong-s",
    6: "heading-strong-xs",
  } as const;

  const variant = variantMap[level];
  const asTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Flex
      className={styles.control}
      gap="4"
      onClick={() => copyURL(id)}
      style={style}
      vertical="center"
    >
      <Heading as={asTag} className={styles.text} id={id} variant={variant}>
        {children}
      </Heading>
      <IconButton
        className={styles.visibility}
        icon="openLink"
        size="s"
        tooltip="Copy"
        tooltipPosition="right"
        variant="ghost"
      />
    </Flex>
  );
};
