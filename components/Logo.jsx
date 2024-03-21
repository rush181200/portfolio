import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo1.png' width={80} height={80} priority alt='' />
    </Link>
  );
};

export default Logo;
