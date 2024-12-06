"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/8.jpeg",
    category: "Backend",
    name: "Ecommerce CICD",

    link: "https://github.com/rush181200/ecommerce_react_spring_cicd",
    github: "https://github.com/rush181200/ecommerce_react_spring_cicd",
  },
  {
    image: "/work/1.png",
    category: "JavaScript",
    name: "Heuristic Path Finding Algorithms",

    link: "https://rush181200.github.io/path_finding_visualizer/",
    github: "https://github.com/rush181200/path_finding_visualizer",
  },
  {
    image: "/work/2.png",
    category: "Backend",
    name: "Book-Author-API",
    link: "https://book-author-apis.onrender.com/swagger-ui/index.html",
    github: "https://github.com/rush181200/book-author-apis",
  },
  {
    image: "/work/3.png",
    category: "Flutter/AWS",
    name: "HealthCare",
    link: "https://medium.com/@rushabhm75/aws-connect-empowering-healthcare-through-flutter-and-video-calls-part-1-3c8dd5521887",
    github: "https://github.com/rush181200/healthcare",
  },
  {
    image: "/work/4.png",
    category: "Python",
    name: "NewsInsta",
    link: "https://medium.com/@rushabhm75/automating-your-instagram-posts-with-python-unleash-the-power-of-code-and-creativity-3d6fcb257e36",
    github: "https://github.com/rush181200/newsInsta",
  },
  {
    image: "/work/5.png",
    category: "Java Spring Boot/Flutter",
    name: "eQueue",
    link: "https://www.youtube.com/watch?v=51qOQxN7-fs",
    github: "https://www.youtube.com/watch?v=51qOQxN7-fs",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Projects offer an ideal avenue to articulate concepts in a technical
            manner.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-5">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
