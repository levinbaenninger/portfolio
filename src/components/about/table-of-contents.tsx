"use client";

import { Column, Flex, Text } from "@once-ui-system/core";
import type React from "react";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
}

const SECTION_OFFSET = 80;

const TableOfContents: React.FC<TableOfContentsProps> = ({
  structure,
  about,
}) => {
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!about.tableOfContent.display) {
    return null;
  }

  return (
    <Column
      gap="32"
      left="0"
      m={{ hide: true }}
      paddingLeft="24"
      position="fixed"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
    >
      {structure
        .filter((section) => section.display)
        .map((section, sectionIndex) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: No ID for sections
          <Column gap="12" key={sectionIndex}>
            <Flex
              className={styles.hover}
              cursor="interactive"
              gap="8"
              onClick={() => scrollTo(section.title, SECTION_OFFSET)}
              vertical="center"
            >
              <Flex background="neutral-strong" height="1" minWidth="16" />
              <Text>{section.title}</Text>
            </Flex>
            {about.tableOfContent.subItems &&
              section.items.map((item, itemIndex) => (
                <Flex
                  className={styles.hover}
                  gap="12"
                  // biome-ignore lint/suspicious/noArrayIndexKey: No ID for items
                  key={itemIndex}
                  l={{ hide: true }}
                  onClick={() => scrollTo(item, SECTION_OFFSET)}
                  paddingLeft="24"
                  style={{ cursor: "pointer" }}
                  vertical="center"
                >
                  <Flex background="neutral-strong" height="1" minWidth="8" />
                  <Text>{item}</Text>
                </Flex>
              ))}
          </Column>
        ))}
    </Column>
  );
};

export default TableOfContents;
