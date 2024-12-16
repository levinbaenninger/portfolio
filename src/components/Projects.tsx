import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Construction, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const projects = [
  {
    title: 'Plasmoid',
    description: 'A full-stack project management tool built with Next.js, Hono and Appwrite.',
    tech: 'React',
    projectLink: '',
    soureCodeLink: 'https://github.com/levinbaenninger/plasmoid',
    status: 'in-progress',
  },
];

const techColors = {
  React: 'bg-blue-500',
};

export const Projects = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {projects.map((p, i) => (
          <Card key={i}>
            <CardContent className="pt-6 h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2">
                  <Link
                    href={p.status === 'in-progress' ? '/in-progress' : p.projectLink}
                    className="font-semibold text-primary hover:underline">
                    {p.title}
                  </Link>
                  {p.status === 'in-progress' && (
                    <Badge
                      variant="secondary"
                      className="gap-1">
                      <Construction className="size-3" />
                      WIP
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1 mb-4">{p.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={cn(
                        'size-4 rounded-full',
                        techColors[p.tech as keyof typeof techColors]
                      )}
                    />
                    <span className="text-xs font-medium text-muted-foreground">{p.tech}</span>
                  </div>
                  {p.soureCodeLink && (
                    <Link
                      href={p.soureCodeLink}
                      className="flex items-center gap-2 text-sm text-primary hover:underline">
                      GitHub
                      <ExternalLink className="inline-block size-3" />
                    </Link>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
