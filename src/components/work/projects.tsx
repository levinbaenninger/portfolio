import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { getPosts } from "@/utils/utils";

type ProjectsProps = {
  range?: [number, number?];
  exclude?: string[];
};

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          avatars={
            post.metadata.team?.map((member) => ({ src: member.avatar })) || []
          }
          content={post.content}
          description={post.metadata.summary}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          key={post.slug}
          link={post.metadata.link || ""}
          priority={index < 2}
          title={post.metadata.title}
        />
      ))}
    </Column>
  );
}
