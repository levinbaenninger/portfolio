import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AboutMe = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Junior Software Engineer with a passion for building dynamic and responsive web
          applications that delight users and bring ideas to life. <br />
          <br />
          Let&apos;s create the <strong>&quot;last innovation you&apos;ll ever need&quot;</strong> —
          solutions that fuel growth and set you apart from the competition.
        </p>
      </CardContent>
    </Card>
  );
};
