import { IconButton, Row, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row
      as="footer"
      fillWidth
      horizontal="center"
      padding="8"
      s={{ direction: "column" }}
    >
      <Row
        className={styles.mobile}
        gap="16"
        horizontal="between"
        maxWidth="m"
        paddingX="16"
        paddingY="8"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
        vertical="center"
      >
        <Text onBackground="neutral-strong" variant="body-default-s">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>
        <Row gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  href={item.link}
                  icon={item.icon}
                  key={item.name}
                  size="s"
                  tooltip={item.name}
                  variant="ghost"
                />
              )
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
