import Sidebar from './Sidebar';

export default function BusinessNoticePage() {
    return (
        <div className='business'>
            <Sidebar active_num={1} />
            <div className="board">
                <div className="header">
                    <div className="absolute right-[70px] top-[80px]">
                        <div className="relative flex">
                            <div className="absolute w-[20px] h-[20px] top-[-10px] left-[-10px] rounded-full bg-[#FA8673] text-white font-bold text-[12px] flex justify-center items-center">1</div>
                            <img src='src/img/icon-bell.png' alt="icon-bell" className='mr-[10px] w-[20px] h-[22px]' />
                            <div className="text-white font-bold mr-[40px] mt-[4px]">店舗ID：0001</div>
                            <div className="text-white font-bold mt-[4px]">店舗名：那覇新都心店</div>
                        </div>
                    </div>
                    <h2>お知らせ</h2>
                    <p className='mt-[15px]'>こちらは運営からのお知らせ一覧です。</p>
                </div>
                <div className="cont mt-[20px] h-[1024px] py-[40px] px-[50px]">
                    <div className="notice mb-[50px]">
                        <h3 className='border-b-[2px] border-[#707070] pb-[10px] text-[15px] font-bold'>2023.04.25　　【ニュース】旧バージョンのサポート終了に関するお知らせ</h3>
                        <p className=' mt-[23px] leading-[1.6]'>
                            ▼対象バージョン
                            <br /><br />
                            iOS：アプリ バージョン 5.27.0未満<br />
                            Android：アプリ バージョン 2.26.0未満<br />
                            Android シンプルスマホ・かんたんスマホ：アプリ バージョン 2.35.300 未満
                            <br /><br />
                            ▼ご利用いただけなくなる時期
                            <br /><br />
                            2023年3月上旬以降
                            <br /><br />
                            対象バージョンをご利用中のみなさまにはご迷惑をおかけしますが、最新版アプリへのアップデートやダウンロードを以下よりお願いします。
                            <br /><br />
                            iPhone（App Store）<br />
                            Android（Google Play）
                            Android シンプルスマホ・かんたんスマホ（Google Play）
                            <br /><br />
                            Yahoo!ニュースは、今後も一層のサービス向上に努めてまいります。
                            <br /><br />
                            引き続きご愛顧くださいますようお願い申し上げます。</p>
                    </div>
                    <div className="notice">
                        <h3 className='border-b-[2px] border-[#707070] pb-[10px] text-[15px] font-bold'>2023.04.25　　【お知らせ】修正依頼を受け付けました。</h3>
                        <p className=' mt-[23px] leading-[1.6]'>
                            修正依頼を受け付けました。<br/>
                            反映まで１〜２日ほどお待ちください。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
