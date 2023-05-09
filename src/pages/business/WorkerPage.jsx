import Sidebar from './Sidebar';

export default function BusinessWorkerPage() {
    const data = [
        {
            date: "2023/04/25",
            time: "11:00~17:00",
            name: "＜ホールスタッフ募集！＞やよい軒 北谷美浜店　未経験者歓迎！",
            number: "3/3",
            people: [
                { photo: "photo", name: "田中みなみ" },
                { photo: "photo", name: "鈴木健介" },
                { photo: "photo", name: "小出政宗" }
            ],
        },
        {
            date: "2023/04/27",
            time: "11:00~17:00",
            name: "＜ホールスタッフ募集！＞やよい軒 北谷美浜店　未経験者歓迎！",
            number: "2/5",
            people: [
                { photo: "photo", name: "田中みなみ" },
                { photo: "photo", name: "鈴木健介" }
            ],
        }
    ]
    return (
        <div className='business'>
            <Sidebar active_num={2} />
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
                    <h2>ワーカー</h2>
                </div>
                <div className="cont mt-[50px] py-[30px] px-[45px]">
                    <p className='text-[11px] font-bold'>現在掲載中の求人別ワーカー</p>
                    {
                        data.map(item =>
                            <div className="mt-[32px]">
                                <p className="flex items-center border-b-[1px] border-[#707070] pb-[10px]">
                                    <div className="mr-[15px]">{item.date}</div>
                                    <div className="mr-[15px]">{item.time}</div>
                                    <div className="mr-[15px]">{item.name}</div>
                                    <div className="mr-[30px]">{item.number}</div>
                                </p>
                                <div className="pt-[23px]">
                                    {item.people.map(el => <div className="person flex items-center h-[56px] mb-[26px]">
                                        <img src={'src/img/' + el.photo + '.png'} alt="photo" className='w-[56px] h-[56px] mr-[15px]' />
                                        <div className="min-w-[115px]">{el.name}</div>
                                        <div className="btn-purple w-[150px] h-[40px] mr-[35px]">メッセンジャー</div>
                                        <div className="btn-purple w-[150px] h-[40px] mr-[35px]">ワーカー評価</div>
                                        <div className="btn-purple w-[150px] h-[40px]">利用明細</div>
                                    </div>
                                    )}
                                </div>
                            </div>
                        )
                    }
                    <div className="mt-[75px]">
                        <p className="flex items-center border-b-[1px] border-[#707070] pb-[20px]">
                            <div className=" font-bold mr-[15px]">過去のワーカー</div>
                        </p>
                        <div className="h-[300px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
