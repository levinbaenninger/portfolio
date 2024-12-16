import Image from 'next/image';

import { CalendarDays } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { JobImages } from '@/components/JobImages';

const jobs = [
  {
    role: 'Junior Software Engineer',
    company: 'Bühler Group',
    logo: '/buhler.svg',
    duration: '2023 - Present',
    description:
      "I'm currently working as a Junior Software Engineer at Bühler Group, where I'm responsible for developing and maintaining software solutions for the company's digital services.",
    link: 'https://buhlergroup.com',
    images: [],
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li
                key={i}
                className="border-b last:border-b-0 pb-8 last:pb-0">
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};