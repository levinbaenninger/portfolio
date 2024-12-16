import { AboutMe } from '@/components/AboutMe';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Sidebar />
      <main className="md:col-span-2">
        <AboutMe />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}
