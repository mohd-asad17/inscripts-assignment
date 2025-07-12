import Arrow from '../assets/Arrow.png';
import Cell from '../assets/Cell.png';
import Filter from '../assets/filter.png';
import ImportButton from '../assets/Import.svg'
import ExportButton from '../assets/ExportButton.svg'
import Share from '../assets/Share.svg'
import ActionButton from '../assets/ActionButton.svg'

export const Buttons = () => {
    return (
        <div className="flex justify-between items-center mt-2 border-b pb-3">
            <div className="flex space-x-2 p-1 items-center text-sm ml-3">
                <span>Tool bar</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
                <span className='text-gray-300 text-xl border '></span>
                <div className='flex ml-2 justify-center'>
                    <button className='flex ml-3 items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                        <span className='ml-1'>Hide fields</span>
                    </button>
                    <button className='flex ml-8 justify-center items-center'>
                        <img src={Arrow} alt="" className='w-4 h-4'/>
                        <span className='ml-1'>Sort</span>
                    </button>
                     <button className='flex ml-7 justify-center items-center'>
                        <img src={Filter} alt="" className='w-4 h-4'/>
                        <span className='ml-2'>Filter</span>
                    </button>
                     <button className='flex ml-8 justify-center items-center'>
                        <img src={Cell} alt="" className='w-4 h-4'/>
                        <span className='ml-1'>Cell View</span>
                    </button>
                </div>
            </div>

            <div className="flex justify-center space-x-2 mr-10">
                <button className="flex  bg-gray-100 px-3 py-1 rounded text-sm shadow-sm hover:bg-gray-200 " onClick={() => console.log('Import clicked')}>
                    <img src={ImportButton} alt="" />
                     <span className='ml-1'>Import</span>
                    </button>
                <button className="flex bg-gray-100 px-3 py-1 rounded text-sm shadow-sm hover:bg-gray-200" onClick={() => console.log('Export clicked')}>
                    <img src={ExportButton} alt="" />
                    <span className='ml-1'>Export</span>
                    </button>
                     <button className="flex bg-gray-100 px-3 py-1 rounded text-sm shadow-sm hover:bg-gray-200" onClick={() => console.log('Export clicked')}>
                    <img src={Share} alt="" />
                    <span className='ml-1'>Share</span>
                    </button>
                <button className="flex bg-[#4B6A4F] text-white px-3 py-1 rounded text-sm hover:bg-green-700" onClick={() => console.log('New Action clicked')}>
                    <img src={ActionButton} alt="" />
                    <span className='ml-2 text-base'>New Action</span>
                </button>
            </div>
        </div>
    )
}