import Sidebar from './Sidebar';

export default function BusinessModifyEndPage() {
    return (
        <div className='business'>
            <Sidebar active_num={-1} />
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
                    <h2>修正依頼</h2>
                    <p className='mt-[15px]'>運営事務局に修正依頼を送信します。修正反映には１〜2日ほどかかります。</p>
                </div>
                <div className="cont mt-[20px] py-[94px] relative text-center px-[20px]">
                    <div>
                        運営事務局に送信しました。<br/>内容を確認しますので、返答までしばらくお待ち下さい。
                    </div>
                    <div className="btn-purple w-[150px] h-[40px] mt-[63px] mx-auto">ホームに戻る</div>
                </div>
            </div>
        </div>
    );
}
