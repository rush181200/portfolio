import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Java Back-End',
    description:
      'Mastering the art of Java backend development, I seamlessly integrate Spring Boot to craft robust and scalable websites.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'System Design',
    description:
      'Unlock the potential of your online presence with expertly crafted system designs, ensuring seamless performance and scalability based on extensive experience.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Azure/AWS',
    description:
      'Empowering websites with seamless performance and scalability through Azure/AWS cloud solutions, leveraging expertise in compute, storage and networking',
  },
  
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          My Services
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
