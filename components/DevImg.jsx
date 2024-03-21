import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} width={400} height={350} priority alt='' />
    </div>
  );
};

export default DevImg;
