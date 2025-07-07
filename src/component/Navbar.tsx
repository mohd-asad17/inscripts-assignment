import shape from '../assets/Shape.png'
import bell from '../assets/bell.png'
import Group from '../assets/Group.png'
import john from '../assets/john.png'

export const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b text-sm font-medium">
            <div className="flex items-center space-x-2 text-gray-400">
                <div className="flex items-center text-gray-400">
                    <img src={shape} className="w-4 h-4 mr-2" />
                    <div className='pl-2'>
                        <span>Workspace</span>
                    </div>
                </div>
                <span>{'>'}</span>
                <span>Folder 2</span>
                <span>{'>'}</span>
                <span className="text-black font-medium">Spreadsheet 3</span>
                <span className="ml-2 text-gray-400">•••</span>
            </div>

            {/* Right controls */}
            <div className="flex items-center space-x-6">
                <div className="flex items-center bg-gray-100 pl-4 py-3 rounded-md text-gray-400 text-xs w-40 h-9">
                    <img src={Group} className="w-4 h-4 mr-2" />
                    <input
                        type="text"
                        placeholder="Search within sheet"
                        className="bg-transparent w-full placeholder-gray-500"
                    />
                </div>

                <div className="relative">
                    <img src={bell} className="w-5 h-5 text-gray-600" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-700 text-white text-[10px] flex items-center justify-center rounded-full">
                        2
                    </div>
                </div>
                <div className="flex items-center space-x-5">
                    <img
                        src={john}
                        alt="John Doe"
                        className="w-7 h-7 rounded-full"
                    />
                    <div className="text-gray-700">
                        <div className="leading-4 text-sm">John Doe</div>
                        <div className="text-xs text-gray-400">john.doe...</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
