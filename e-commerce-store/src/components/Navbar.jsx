import react from 'react';

export default function Navbar() {
    return(
        //Search item bar
        <div className='gap-[8px] p-[8px] w-[523px] h-[99px]'>
            <p className='text-rgba(96, 105, 92, 1) left-[8px] gap-[10px] right-[8px] text-[16px]'>
                Search Item
            </p>
            
            <input className='text-rgba(26, 31, 22, 0.5) rounded bg-white padding-[8px] gap-[10px] w-[475px] h-[40px]' 
            type='text' 
            placeholder='Apple Watch, Samsung S21, MacbookPro,...' />
        </div>
    );
}