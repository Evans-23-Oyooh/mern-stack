"use client";
import Image from 'next/image';
import CustomButton from './CustormButton'; // Assuming this is the correct import path and component name

const Hero = () => {
    const handleScroll = () => {
        // Handle scroll functionality if needed
    };

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>Buy, Book or Rent a Car - Quickly and easily</h1>
                <p className='hero__subtitle'>Streamline your car rental experience with our mobile App with our effortless booking process.</p>
                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src="/hero.png" alt='hero'
                    fill className='object-contain'/>
                    </div>
                    <div className='hero__image-overlay' />
                </div>
            
        </div>
    );
};

export default Hero;
