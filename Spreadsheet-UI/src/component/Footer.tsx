export const Footer = () => {
    return <div className="flex  border-t  mr-5">
        <div className="text-[16px] flex items-center space-x-4 ml-16">
            <div className="text-[#3E5741] bg-[#E8F0E9] border-t-2 border-t-[#4B6A4F] mt-1 px-4 py-2 font-semibold">
                All Orders
            </div>
            <div className="flex space-x-4 text-[#757575] font-medium items-center">
                <div>
                    Pending
                </div>
                <div>
                    Reviewed
                </div>
                <div>
                    Arrived
                </div>
                <div className="text-3xl  ">
                    +
                </div>
            </div>
        </div>
    </div>
}