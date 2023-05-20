export default function BusinessInfoPage() {
    return (
        <div className="absolute top-0 w-full h-[100vh] flex flex-col justify-center items-center">
            <img src="/src/img/alert.png" alt="alert" />
            <div className="flex items-center">
                <div className="text-[200px] font-bold">4</div>
                <div className="w-[100px] h-[150px] flex justify-center items-center text-[#f44336] text-[75px] font-bold rounded-[100%] border-[20px] border-[#555]">?</div>
                <div className="text-[200px] font-bold">4</div>
            </div>
            <div className="text-[16px]">該当するページが見つかりません!</div>
        </div>
    );
}
