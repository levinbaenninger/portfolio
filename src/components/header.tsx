"use client";

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { about, blog, display, person, routes, work } from "@/resources";
import styles from "./header.module.scss";
import { ThemeToggle } from "./theme-toggle";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();

    // biome-ignore lint/style/noMagicNumbers: Time interval
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade
        fillWidth
        height="80"
        position="fixed"
        s={{ hide: true }}
        zIndex={9}
      />
      <Fade
        bottom="0"
        fillWidth
        height="80"
        hide
        position="fixed"
        s={{ hide: false }}
        to="top"
        zIndex={9}
      />
      <Row
        as="header"
        className={styles.position}
        data-border="rounded"
        fillWidth
        fitHeight
        horizontal="center"
        padding="8"
        position="sticky"
        s={{
          position: "fixed",
        }}
        zIndex={9}
      >
        <Row
          fillWidth
          paddingLeft="12"
          textVariant="body-default-s"
          vertical="center"
        >
          {display.location && <Row s={{ hide: true }}>{person.location}</Row>}
        </Row>
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            horizontal="center"
            padding="4"
            radius="m-4"
            shadow="l"
            zIndex={1}
          >
            <Row
              gap="4"
              suppressHydrationWarning
              textVariant="body-default-s"
              vertical="center"
            >
              {routes["/"] && (
                <ToggleButton
                  href="/"
                  prefixIcon="home"
                  selected={pathname === "/"}
                />
              )}
              <Line background="neutral-alpha-medium" maxHeight="24" vert />
              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/about"
                      label={about.label}
                      prefixIcon="person"
                      selected={pathname === "/about"}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/about"
                      prefixIcon="person"
                      selected={pathname === "/about"}
                    />
                  </Row>
                </>
              )}
              {routes["/work"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/work"
                      label={work.label}
                      prefixIcon="grid"
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/work"
                      prefixIcon="grid"
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>
                </>
              )}
              {routes["/blog"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/blog"
                      label={blog.label}
                      prefixIcon="book"
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/blog"
                      prefixIcon="book"
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" maxHeight="24" vert />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            gap="20"
            horizontal="end"
            paddingRight="12"
            textVariant="body-default-s"
            vertical="center"
          >
            <Flex s={{ hide: true }}>
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};
