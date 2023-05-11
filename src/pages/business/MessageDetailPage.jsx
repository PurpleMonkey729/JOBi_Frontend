import Sidebar from './Sidebar';

export default function BusinessMessageDetailPage() {
    return (
        <div className='business'>
            <Sidebar active_num={4} />
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
                    <h2>メッセンジャー</h2>
                </div>
                <div className="cont mt-[37px] py-[20px] px-[60px] db:px-[20px]">
                    <div className="flex justify-between items-center border-b-[1px] border-[#EBEBEB88] pb-[20px]">
                        <div className="flex">
                            <img src='src/img/photo.png' alt="photo" />
                            <div className='ml-[20px] my-auto'>
                                <div className="text-[#25265E] text-[16px]">田中みなみ</div>
                                <div className="text-[#787993] text-[14px]">Active Now</div>
                            </div>
                        </div>
                        <div className="flex ">
                            <img src='src/img/icon-search.png' alt="search" className='mr-[30px] db:mr-[15px]' />
                            <img src='src/img/icon-settings-02.png' alt="settings" />
                        </div>
                    </div>
                    <p className='mt-[27px] ml-[160px] text-[#787993] sp:ml-0'>2023/04/21</p>
                    <div className="flex justify-between mt-[17px] pb-[30px] border-b-[1px] border-[#707070] sp:block">
                        <img src='src/img/ttl-dashbord-sidebar.png' alt="logo" className='mr-[10px] w-[140px] h-[45px] my-auto text-[#787993] text-[16px]' />
                        <p className='text-[#787993] sp:mt-[10px] mr-[10px]'>田中みなみさん（ワーカー）があなたの求人に応募しました！<br />求人内容：2023/04/25    11:00~17:00＜ホールスタッフ募集！＞<br />やよい軒 北谷美浜店　未経験者歓迎！ 3/3</p>
                        <div className="mt-auto text-[#787993] text-[14px] sp:mt-[10px]">3:15 PM</div>
                    </div>
                    <div className='flex justify-end items-end mt-[55px] sp:block'>
                        <div className="mr-[20px] text-[14px] text-[#787993] sp:ml-[25px]">3:18 PM</div>
                        <div className="px-[50px] py-[20px] bg-[#BABBC215] rounded-[25px] rounded-br-none text-[#787993] mr-[20px] sp:mr-0 sp:p-[20px]">こんにちは、当日はよろしく！</div>
                        <img src='src/img/photo.png' alt="photo" className='w-[56px] h-[56px] sp:ml-auto sp:mt-[-14px]' />
                    </div>
                    <div className='flex items-end mt-[55px] sp:block'>
                        <img src='src/img/photo.png' alt="photo" className='w-[56px] h-[56px]' />
                        <div className="px-[50px] py-[20px] bg-[#4694F915] rounded-[25px] rounded-bl-none text-[#787993] mr-[20px] sp:mt-[-14px] sp:mr-0 sp:p-[20px]">こちらこそ、よろしくお願いします。</div>
                        <div className="text-[14px] text-[#787993] sp:text-right sp:mr-[25px]">3:21 PM</div>
                    </div>
                    <div className='flex justify-end items-end mt-[55px] sp:block'>
                        <div className="mr-[20px] text-[14px] text-[#787993] sp:ml-[25px]">3:18 PM</div>
                        <div className="px-[50px] py-[20px] bg-[#BABBC215] rounded-[25px] rounded-br-none text-[#787993] mr-[20px] sp:mr-0 sp:p-[20px]">
                            駐車場の場所が分かりづらいのでこれを参考に
                            <div className='mt-[20px] px-[25px] py-[10px] bg-[#BABBC215] flex items-center rounded-[5px]'>
                                <div className="w-[40px] h-[40px] bg-[#FF7052] text-[14px] text-white flex justify-center items-center mr-[20px] rounded-[10px]">画像</div>
                                <div className="text-[14px] text-[#787993]">写真.jpg</div>
                                <img src='src/img/icon-download.png' alt="download" className='ml-auto' />
                            </div>
                        </div>
                        <img src='src/img/photo.png' alt="photo" className='w-[56px] h-[56px] sp:mt-[-14px]' />
                    </div>
                    <p className='mt-[40px] ml-[160px] text-[#787993] sp:ml-0'>2023/04/21</p>
                    <div className="flex justify-between mt-[17px] pb-[30px] border-b-[1px] border-[#707070] sp:block">
                        <img src='src/img/ttl-dashbord-sidebar.png' alt="logo" className='mr-[10px] w-[140px] h-[45px] my-auto text-[#787993] text-[16px]' />
                        <p className='text-[#787993] mr-[10px] sp:mt-[10px]'>田中みなみさん（ワーカー）があなたの求人に応募しました！<br />求人内容：2023/04/25    11:00~17:00＜ホールスタッフ募集！＞<br />やよい軒 北谷美浜店　未経験者歓迎！ 3/3</p>
                        <div className="mt-auto text-[#787993] text-[14px] sp:mt-[10px]">3:15 PM</div>
                    </div>
                    <div className="flex w-full mt-[80px] pt-[22px] border-t-[1px] border-[#EBEBEB88] db:block">
                        <div className='flex w-full items-center'>
                            <input type="text" className='w-full h-[50px]' placeholder='ここにテキストを入力' />
                            <img src='src/img/icon-add-file.png' alt="" className='w-[22px] h-[22px] mr-[23px]' />
                        </div>
                        <div className="w-[120px] h-[50px] flex justify-center items-center bg-[#4694F9] rounded-[5px] db:w-full">
                            <div className="mr-[20px] text-white">送信</div>
                            <img src='src/img/icon-send.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
