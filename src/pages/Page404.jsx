export default function BusinessInfoPage() {
    return (
        <div className="p404 relative flex flex-col justify-center px-[20px] bg-[#d0e9ff] h-full min-h-[100vh]">
            <img src="/src/img/logo.png" className="mx-auto mb-[25px]" />
            <div className="w-[50%] h-[2px] bg-[#333] mx-auto db:w-full"></div>
            <div className="mt-[-11px] w-[20px] h-[20px] bg-[#333] rounded-[20px] mx-auto border-[5px] border-[#d0e9ff]"></div>
            <h2 className="text-center mb-[50px]">おっとっと！ ページが見つかりません！</h2>
            <h1 className="text-center text-[220px] font-bold tracking-[-40px] ml-[-40px]">
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </h1>
            <p className="text-center mt-[75px] text-[20px] font-bold">申し訳ありませんが、リクエストされたページが見つかりませんでした。</p>
        </div>
    );
}
