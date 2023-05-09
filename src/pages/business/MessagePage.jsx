import Sidebar from './Sidebar';

export default function BusinessMessagePage() {
    const data = [
        { photo: "photo", state: true, name: "田中みなみ", state_msg: "田中みなみさん（ワーカー）があなたの求人に応募しました！求人内容：2023/04/25 11:00~17:00＜ホールスタッフ募集！＞やよい軒 北谷美浜店　未経験者歓迎！ 3/3", time: "3:15 PM" },
        { photo: "photo", state: false, name: "鈴木健介", state_msg: "Individuals and interactions over...", time: "5:15 PM" },
        { photo: "photo", state: false, name: "小出政宗", state_msg: "Responding", time: "11:15 PM" },
        { photo: "photo", state: false, name: "Kendra Lord", state_msg: "five short years while I was on campus", time: "21 Jan" },
        { photo: "photo", state: true, name: "Gatlin Huber", state_msg: "Working the way developers work.", time: "20 Jan" },
    ];

    const clickPerson = index => {
        // Please insert the code.
    }

    return (
        <div className='business'>
            <Sidebar active_num={4} />
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
                    <h2>メッセンジャー</h2>
                    <p className='mt-[15px]'>全ワーカー時系列順</p>
                </div>
                <div className="cont h-[1024px] mt-[20px]">
                    <div className="relative mx-[30] h-[80px] flex items-center">
                        <img src='src/img/icon-search.png' alt="icon-search" className='absolute top-[30px] left-[30px]' />
                        <input type="text" placeholder='Search.....' className='pl-[70px] w-full h-full rounded-[10px]' />
                    </div>
                    {data.map((item, index) =>
                        <div  onClick={()=>clickPerson(index)} className="flex h-[100px] items-center pl-[22px] pr-[45px] mb-[10px] border-t-[1px] border-b-[1px] border-[#EBEBEB] relative hover:shadow-xl hover:cursor-pointer">
                            {item.state && <div className="absolute w-[15px] h-[15px] bg-[#0f0] border-[3px] rounded-full border-white top-[20px] left-[65px]"></div>}
                            <img src={'src/img/' + item.photo + '.png'} alt="photo" />
                            <div className='ml-[27px]'>
                                <div className="text-[16px] text-[#25265E]">{item.name}</div>
                                <div className="text-[14px] text-[#787993] w-[280px] truncate mt-[10px]">{item.state_msg}</div>
                            </div>
                            <div className="text-[12px] text-[#787993] ml-auto mb-[30px]">{item.time}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
