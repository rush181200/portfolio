'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/1.png',
    category: 'JavaScript',
    name: 'Heuristic Path Finding Algorithms',
    description:
      'Improved methods, using techniques like BFS, DFS, Dijkstra, A*, and Greedy BFS algorithms. Also added maze creation abilities',
    link: 'https://rush181200.github.io/path_finding_visualizer/',
    github: 'https://github.com/rush181200/path_finding_visualizer',
  },
  {
    image: '/work/2.png',
    category: 'Java',
    name: 'Book-Author-API',
    description:
      'This is a RESTful API built with Spring Boot and PostgreSQL for managing books and authors.',
    link: 'https://book-author-apis.onrender.com/swagger-ui/index.html',
    github: 'https://github.com/rush181200/book-author-apis',
  },
  {
    image: '/work/3.png',
    category: 'AWS',
    name: 'HealthCare',
    description:
      'Created a healthcare platform for users to schedule appointments, make video calls with doctors, and store their heart rate data',
    link: 'https://medium.com/@rushabhm75/aws-connect-empowering-healthcare-through-flutter-and-video-calls-part-1-3c8dd5521887',
    github: 'https://github.com/rush181200/healthcare',
  },
  {
    image: '/work/4.png',
    category: 'Python',
    name: 'NewsInsta',
    description:
      'Created a platform which fetches the news from NewsApi and Post it on Instagram.',
    link: 'https://medium.com/@rushabhm75/automating-your-instagram-posts-with-python-unleash-the-power-of-code-and-creativity-3d6fcb257e36',
    github: 'https://github.com/rush181200/newsInsta',
  },
  {
    image: '/work/5.png',
    category: 'Java',
    name: 'eQueue',
    description:
      'Developed a token-based system to manage appointments and mass token calls to avoid Queues',
    link: 'https://www.youtube.com/watch?v=51qOQxN7-fs',
    github: '/',
  },
  {
    image: '/work/6.png',
    category: 'Java',
    name: 'SnakeGame',
    description:
      'A basic snake game',
    link: '/',
    github: 'https://github.com/rush181200/SnakeGame',
  },
  {
    image: '/work/7.png',
    category: 'Flutter',
    name: 'CosmoDealer',
    description:
      'An Ecommerce Platform made with flutter and firebase',
    link: 'https://play.google.com/store/apps/details?id=com.cosmodealer&hl=en_ZA&gl=US',
    github: '/',
  },
  
];

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
