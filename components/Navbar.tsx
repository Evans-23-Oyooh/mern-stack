import Image from 'next/image';
import Link from 'next/link';
import CustormButton from './CustormButton';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href="/" passHref>
          <div className='flex justify-center items-center'>
            <Image
              src="/vanslogo.png"
              alt='vans-link-logo'
              width={120}
              height={20}
              layout="intrinsic"
              className='object-contain'
            />
          </div>
        </Link>
       <CustormButton title="Log In"
        btnType="button"
       containerStyles='text-primary-blue rounded-full
       bg-white min-w-[130px]' />
      </nav>
    </header>
  );
};

export default Navbar;
