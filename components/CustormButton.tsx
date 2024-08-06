import Image from 'next/image';
import { CustormButtonProps } from '../types';

const CustormButton = ({ title, containerStyles,
   handleClick,btnType,textStyles,rightIcon }: CustormButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`} // Use backticks for template literals
      onClick={handleClick}
    >
      <span className='flex-1 ${textStyles}'>{title}</span>
       {rightIcon &&(
        <div className='relative w-6 h-6'>
          <Image src={rightIcon}
          alt='right -icon'
          fill
           className='object-contain'
          />
        </div>
       )}
    </button>
  );
};

export default CustormButton;
