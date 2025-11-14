import react from 'react';

export default function Navbar() {
    return(
        //Search item bar
        <div className='gap-4 p-8 items-center mb-15 w-[475px] h-6'>
            <p className='text-description left-2 gap-2.5 right-2 text-[16px]'>
                Search Item
            </p>
            
            <input className='text-rgba(26, 31, 22, 0.5) w-[475px] h-10 rounded bg-white p-2 gap-2.5' 
            type='text' 
            placeholder='Apple Watch, Samsung S21, Macbook Pro, ...' />
        </div>
    );
}