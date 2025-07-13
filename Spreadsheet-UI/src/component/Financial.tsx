import Fin from '../assets/Financial.svg';
import arrowSync from '../assets/ArrowSync.svg'
import ActionButton from '../assets/ActionButton.svg'
import split from '../assets/split.png'


export const Financial = () => {
    async function handleClick(label: string) {
        console.log(`Clicked : ${label}`);
    }
    return <div className='flex justify-between mr-5'>
        <div className='flex ml-14 pr-[450px] items-center  bg-gray-200'>
            <div className='flex border items-center justify-center bg-gray-100 rounded-md p-1 ml-2'>
                <img src={Fin} alt="" />
                <span className='ml-1 text-xs font-extralight'>Q3 Financial Overview</span>
            </div>
            <div className='flex items-center ml-2'>
                <img src={arrowSync} alt="" />
            </div>
        </div>
        <div className='flex items-center text-xs'>
            <button onClick={() => {
                handleClick("ABC");
            }} className='flex items-center justify-center bg-[#D2E0D4] px-10 py-2.5'>
                <img src={split} alt="" className='text-gray-300 w-4 h-4' />
                <span className='mx-2'>ABC</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </button>
            <button onClick={() => {
                handleClick("Answer a question");
            }} className='flex items-center justify-center border-l border-r border-white bg-[#DCCFFC] px-7 py-2.5'>
                <img src={ActionButton} alt="" className='text-gray-300' />
                <span className='mx-2'>Answer a question</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

            </button>
            <button onClick={() => {
                handleClick("Extract");
            }} className='flex items-center justify-center bg-[#FAC2AF] px-5 py-2.5'>
                <img src={ActionButton} alt="" className='text-gray-300' />
                <span className='mx-1'>Extract</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </button>
            <button onClick={() => {
                handleClick("Add column");
            }} className='flex items-center justify-center bg-gray-200 border-l border-white text-3xl font-thin px-11 '>
                +
            </button>
        </div>
    </div>
}