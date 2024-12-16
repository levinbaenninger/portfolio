import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Construction } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work in Progress',
};

const ProjectInProgressPage = () => {
  return (
    <div className="w-full flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardContent className="pt-6">
          <div className="mb-4 flex justify-center">
            <Construction className="h-12 w-12 animate-pulse text-yellow-500" />
          </div>
          <h1 className="mb-2 text-2xl font-bold">Work in Progress</h1>
          <p className="text-muted-foreground">
            This project is currently under development. Check back soon for updates!
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Link href="/">
            <Button variant="outline">Return to Projects</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectInProgressPage;
