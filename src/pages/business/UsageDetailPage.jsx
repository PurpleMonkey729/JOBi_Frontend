import Sidebar from './Sidebar';
import clsx from 'clsx';

export default function BusinessUsageDetailPage() {
    const data = [
        { date: "2023/04/25", time: "11:00~17:00", name: "＜ホールスタッフ募集！＞やよい軒 北谷美浜店　未経験者歓迎！", detail: "出勤時間：2023/04/25 10:55〜17:30　　給与：5,000円　　手数料：1,000円" },
        { date: "2023/04/25", time: "11:00~17:00", name: "＜ホールスタッフ募集！＞やよい軒 北谷美浜店　未経験者歓迎！", detail: "出勤時間：2023/04/25 10:55〜17:30　　給与：5,000円　　手数料：1,000円" },
        { date: "2023/04/25", time: "11:00~17:00", name: "＜ホールスタッフ募集！＞やよい軒 北谷美浜店　未経験者歓迎！", detail: "出勤時間：2023/04/25 10:55〜17:30　　給与：5,000円　　手数料：1,000円" },
    ]
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
                    <h2>ワーカー評価</h2>
                    <p className='mt-[15px]'>必要な情報を入力して下さい。</p>
                </div>
                <div className="cont mt-[20px] py-[35px] pb-[150px] relative">
                    <div className="h-[56px] flex items-center pb-[17px] border-b-[1px] border-[#707070] mx-[45px]">
                        <img src='src/img/photo.png' alt="photo" className='mr-[10px]' />
                        <div className="text-[15px] font-bold">田中みなみ</div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="w-[802px]">
                            {
                                data.map((item, index) =>
                                    <div className={clsx("py-[20px] px-[45px]", { 'bg-[#F7FAFC]': index % 2 === 1 })}>
                                        <div className="flex items-center">
                                            <div className="mr-[20px]">{item.date}</div>
                                            <div className="mr-[30px]">{item.time}</div>
                                            <div className="">{item.name}</div>
                                        </div>
                                        <div className="mt-[10px]">{item.detail}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="btn-purple w-[150px] h-[40px] mr-[35px] absolute bottom-[40px] left-[40px]">ホームに戻る</div>
                </div>
            </div>
        </div>
    );
}
