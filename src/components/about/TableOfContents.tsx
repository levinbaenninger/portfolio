"use client";

import { Column, Flex, Text } from "@once-ui-system/core";
import type React from "react";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
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

  if (!about.tableOfContent.display) return null;

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
          <Column gap="12" key={sectionIndex}>
            <Flex
              className={styles.hover}
              cursor="interactive"
              gap="8"
              onClick={() => scrollTo(section.title, 80)}
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
                  key={itemIndex}
                  l={{ hide: true }}
                  onClick={() => scrollTo(item, 80)}
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
