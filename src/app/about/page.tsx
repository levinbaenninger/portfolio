import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Meta,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import React from "react";
import styles from "@/components/about/about.module.scss";
import TableOfContents from "@/components/about/TableOfContents";
import { about, baseURL, person, social } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
        baseURL={baseURL}
        description={about.description}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        path={about.path}
        title={about.title}
      />
      {about.tableOfContent.display && (
        <Column
          gap="32"
          left="0"
          paddingLeft="24"
          position="fixed"
          s={{ hide: true }}
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <TableOfContents about={about} structure={structure} />
        </Column>
      )}
      <Row fillWidth horizontal="center" s={{ direction: "column" }}>
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            flex={3}
            gap="m"
            horizontal="center"
            minWidth="160"
            paddingBottom="xl"
            paddingX="l"
            position="sticky"
          >
            <Avatar size="xl" src={person.avatar} />
            <Row gap="8" vertical="center">
              <Icon name="globe" onBackground="accent-weak" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row gap="8" wrap>
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            fillWidth
            id={about.intro.title}
            marginBottom="32"
            minHeight="160"
            vertical="center"
          >
            {about.calendar.display && (
              <Row
                background="brand-alpha-weak"
                border="brand-alpha-medium"
                className={styles.blockAlign}
                fitWidth
                gap="8"
                marginBottom="m"
                padding="4"
                radius="full"
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                vertical="center"
              >
                <Icon name="calendar" onBackground="brand-weak" paddingLeft="12" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  data-border="rounded"
                  href={about.calendar.link}
                  icon="chevronRight"
                  variant="secondary"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              onBackground="neutral-weak"
              variant="display-default-xs"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                data-border="rounded"
                fitWidth
                gap="8"
                horizontal="center"
                paddingBottom="8"
                paddingTop="20"
                wrap
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            href={item.link}
                            key={item.name}
                            label={item.name}
                            prefixIcon={item.icon}
                            size="s"
                            variant="secondary"
                            weight="default"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            href={item.link}
                            icon={item.icon}
                            key={`${item.name}-icon`}
                            size="l"
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column fillWidth gap="m" marginBottom="xl" textVariant="body-default-l">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} marginBottom="m" variant="display-strong-s">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column fillWidth key={`${experience.company}-${experience.role}-${index}`}>
                    <Row fillWidth horizontal="between" marginBottom="4" vertical="end">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text onBackground="neutral-weak" variant="heading-default-xs">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text marginBottom="m" onBackground="brand-weak" variant="body-default-s">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            key={`${experience.company}-${index}`}
                            variant="body-default-m"
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth gap="12" paddingLeft="40" paddingTop="m" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            border="neutral-medium"
                            height={image.height}
                            key={index}
                            minWidth={image.width}
                            radius="m"
                          >
                            <Media
                              alt={image.alt}
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} marginBottom="m" variant="display-strong-s">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column fillWidth gap="4" key={`${institution.name}-${index}`}>
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text onBackground="neutral-weak" variant="heading-default-xs">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                marginBottom="40"
                variant="display-strong-s"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column fillWidth gap="4" key={`${skill}-${index}`}>
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text onBackground="neutral-weak" variant="body-default-m">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row gap="8" paddingTop="8" wrap>
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} prefixIcon={tag.icon} size="l">
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth gap="12" paddingTop="m" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            border="neutral-medium"
                            height={image.height}
                            key={index}
                            minWidth={image.width}
                            radius="m"
                          >
                            <Media
                              alt={image.alt}
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
