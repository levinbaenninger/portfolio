import {
  Avatar,
  Badge,
  Button,
  Column,
  Heading,
  Line,
  Meta,
  RevealFx,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { Projects } from "@/components/work/Projects";
import { about, baseURL, home, person, routes } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column gap="xl" horizontal="center" maxWidth="m" paddingY="12">
      <Schema
        as="webPage"
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
        baseURL={baseURL}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        path={home.path}
        title={home.title}
      />
      <Column fillWidth gap="m" horizontal="center">
        <Column align="center" horizontal="center" maxWidth="s">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingBottom="32"
              paddingLeft="12"
              paddingTop="16"
            >
              <Badge
                arrow={false}
                background="brand-alpha-weak"
                href={home.featured.href}
                onBackground="neutral-strong"
                paddingX="12"
                paddingY="4"
                textVariant="label-default-s"
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx fillWidth horizontal="center" paddingBottom="16" translateY="4">
            <Heading variant="display-strong-l" wrap="balance">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx delay={0.2} fillWidth horizontal="center" paddingBottom="32" translateY="8">
            <Text onBackground="neutral-weak" variant="heading-default-xl" wrap="balance">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.4} horizontal="center" paddingLeft="12" paddingTop="12">
            {/** biome-ignore lint/correctness/useUniqueElementIds: ID has to be about */}
            <Button
              arrowIcon
              data-border="rounded"
              href={about.path}
              id="about"
              size="m"
              variant="secondary"
              weight="default"
            >
              <Row gap="8" paddingRight="4" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    size="m"
                    src={person.avatar}
                    style={{ marginLeft: "-0.75rem" }}
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx delay={0.6} translateY="16">
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts columns="2" range={[1, 2]} />
            </Row>
          </Row>
          <Row fillWidth horizontal="end" paddingLeft="64">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
    </Column>
  );
}
