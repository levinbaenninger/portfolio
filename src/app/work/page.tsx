import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Projects } from "@/components/work/projects";
import { about, baseURL, person, work } from "@/resources";

export function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
        baseURL={baseURL}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        path={work.path}
        title={work.title}
      />
      <Heading marginBottom="l" variant="heading-strong-xl">
        {work.title}
      </Heading>
      <Projects />
    </Column>
  );
}
