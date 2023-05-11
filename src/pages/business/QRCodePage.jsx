import Sidebar from './Sidebar';

export default function BusinessQRCodePage() {
    return (
        <div className='business'>
            <Sidebar active_num={5} />
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
                    <h2>出退勤QRコード</h2>
                    <p className='mt-[10px]'>業務開始・業務終了時に、このコードをアプリから読み込んでもらいましょう。<br/>読み込み忘れなどはワーカーから「修正依頼」が届きます。</p>
                </div>
                <div className="cont mt-[30px] py-[40px] px-[50px] text-center">
                    <img src='src/img/QR-code.png' alt="QR-code" className='mx-auto' />
                    <p className='text-[#2C92D2] mt-[20px]'>出勤時にQRコードを読み込むと自動的に雇用契約が締結されます。<br/>読み込み時にワーカーのアプリに時刻が記録されます。</p>
                    <div className="btn-purple w-[183px] h-[48px] mt-[40px] mx-auto">この画面を印刷する</div>
                </div>
            </div>
        </div>
    );
}
