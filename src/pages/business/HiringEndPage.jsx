import Sidebar from './Sidebar';

export default function BusinessModifyEndPage() {
    return (
        <div className='business'>
            <Sidebar active_num={3} />
            <div className="board">
                <div className="header">
                    <div className="alarm-box absolute right-[70px] top-[80px]">
                        <div className="relative flex">
                            <div className="absolute w-[20px] h-[20px] top-[-10px] left-[-10px] rounded-full bg-[#FA8673] text-white font-bold text-[12px] flex justify-center items-center">1</div>
                            <img src='src/img/icon-bell.png' alt="icon-bell" className='mr-[10px] w-[20px] h-[22px]' />
                            <div className="text-white font-bold mr-[40px] mt-[4px]">店舗ID：0001</div>
                            <div className="text-white font-bold mt-[4px]">店舗名：那覇新都心店</div>
                        </div>
                    </div>
                    <h2>新規募集（求人）の追加</h2>
                    <p className='mt-[15px]'>下記に必要な情報を入力して保存して下さい。</p>
                </div>
                <div className="cont h-[393px] mt-[20px] pt-[100px] relative text-center">
                    <div>2023/04/29 23:15</div>
                    <div className='mt-[10px]'>求人を公開しました！</div>
                    <div className="btn-purple w-[150px] h-[40px] mt-[63px] mx-auto">ホームに戻る</div>
                </div>
            </div>
        </div>
    );
}
