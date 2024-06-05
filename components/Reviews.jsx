'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/work/az.png',
    name: 'AZ-900: Azure Fundamentals',
    job: 'Azure',
    review:
      'Azure Cloud Foundation Certification',
    link:'https://learn.microsoft.com/en-us/users/rushabhmehta-7181/credentials/3842a68b24ed7329'
  },
  {
    avatar: '/reviews/ude.png',
    name: 'Spring Security 6 Zero to Master',
    job: 'Udemy',
    review:
      'Along with deep understanding and workflow of JWT and OAUTH2 using Keycloak',
    link:'https://udemy-certificate.s3.amazonaws.com/image/UC-d484d210-65c2-4d0f-b3fc-db45417264f7.jpg'
  },
  {
    avatar: '/reviews/micro.png',
    name: 'Choose the right Azure service for deploying your Java application',
    job: 'Microsoft',
    review:
      'Beginner-level experience with Azure cloud infrastructure',
      link:'https://learn.microsoft.com/en-us/users/RushabhMehta-4037/achievements/FZW7D6AX?ref=https%3A%2F%2Fwww.linkedin.com%2F'
  },
  {
    avatar: '/reviews/cour.png',
    name: 'Crash Course on Python',
    job: 'Coursera',
    review:
      'Understand what Python is and why Python is relevant to automation',
      link:'https://www.coursera.org/account/accomplishments/verify/Y6MM8NR9AJ39?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course'
  },
  // {
  //   avatar: '/reviews/avatar-4.png',
  //   name: 'Emily Smith',
  //   job: 'Therapist',
  //   review:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  //     link:'https://udemy-certificate.s3.amazonaws.com/image/UC-d484d210-65c2-4d0f-b3fc-db45417264f7.jpg'
  // },
  // {
  //   avatar: '/reviews/avatar-5.png',
  //   name: 'Oliver Taylor',
  //   job: 'Engineer',
  //   review:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  //     link:'https://udemy-certificate.s3.amazonaws.com/image/UC-d484d210-65c2-4d0f-b3fc-db45417264f7.jpg'
  // },
  // {
  //   avatar: '/reviews/avatar-6.png',
  //   name: 'Mason Wilson',
  //   job: 'Video Editor',
  //   review:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  //     link:'https://udemy-certificate.s3.amazonaws.com/image/UC-d484d210-65c2-4d0f-b3fc-db45417264f7.jpg'
  // },
];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Certifications</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-[350px]'
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=''
                        priority
                      />
                      {/* name */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                  <a href={person.link}>Click Here</a>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
