import Arrow from '../assets/Arrow.png';
import Cell from '../assets/Cell.png';
import Filter from '../assets/filter.png';
import ImportButton from '../assets/Import.svg'
import ExportButton from '../assets/ExportButton.svg'
import Share from '../assets/Share.svg'
import ActionButton from '../assets/ActionButton.svg'

export const Buttons = () => {

    async function handleClick(label: string) {
        console.log(`Clicked : ${label}`);
    }

    return (
        <div className="flex justify-between items-center mt-1 border-b pb-2">
            <div className="flex space-x-2 p-1 items-center text-sm ml-3">
                <span>Tool bar</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
                <span className='text-gray-300 text-xl border '></span>
                <div className='flex ml-2 justify-center'>
                    <button onClick={() => {
                        handleClick("Hide fields");
                    }} className='flex ml-3 items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                        <span className='ml-1'>Hide fields</span>
                    </button>
                    <button onClick={() => {
                        console.log("Sort");
                    }} className='flex ml-8 justify-center items-center'>
                        <img src={Arrow} alt="" className='w-4 h-4' />
                        <span className='ml-1'>Sort</span>
                    </button>
                    <button onClick={() => {
                        console.log("Filter");
                    }} className='flex ml-7 justify-center items-center'>
                        <img src={Filter} alt="" className='w-4 h-4' />
                        <span className='ml-2'>Filter</span>
                    </button>
                    <button onClick={() => {
                        console.log("Cell View");
                    }} className='flex ml-8 justify-center items-center'>
                        <img src={Cell} alt="" className='w-4 h-4' />
                        <span className='ml-1'>Cell View</span>
                    </button>
                </div>
            </div>

            <div className="flex justify-center space-x-4 mr-6">
                <button className="flex  bg-gray-100 px-4 py-1 rounded text-xs shadow-sm hover:bg-gray-200 items-center justify-center" onClick={() => handleClick('Import')}>
                    <img src={ImportButton} alt="" className='w-4 h-4  ' />
                    <span className='ml-2'>Import</span>
                </button>
                <button className="flex bg-gray-100 px-3 py-1 mr-4 rounded text-xs items-center shadow-sm hover:bg-gray-200" onClick={() => handleClick('Export')}>
                    <img src={ExportButton} alt="" className='w-4 h-4' />
                    <span className='ml-1'>Export</span>
                </button>
                <button className="flex bg-gray-100 px-3 py-1 rounded text-xs items-center shadow-sm hover:bg-gray-200" onClick={() => handleClick('Export')}>
                    <img src={Share} alt="" className='w-4 h-4' />
                    <span className='ml-1'>Share</span>
                </button>
                <button className="flex bg-[#4B6A4F] text-white px-5 py-1 rounded text-sm hover:bg-green-700" onClick={() => handleClick('New Action ')}>
                    <img src={ActionButton} alt="" />
                    <span className='ml-2 text-base'>New Action</span>
                </button>
            </div>
        </div>
    )
}