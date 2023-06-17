// https://codesandbox.io/s/blazing-pond-47crhl?file=/src/ReactBigCalendar.js

import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';

const localizer = momentLocalizer(moment);

export default function BusinessHomePage() {

    const navigate = useNavigate();

    const goHiringNew = () => {
        navigate('../businesshiringnew');
    }

    const goQRCode = () => {
        navigate('../businessgrcode');
    }

    const goModifyRequest = () => {
        navigate('../businessmodifyrequest');
    }

    const goWorkerRating = () => {
        navigate('../businessworkerrating');
    }

    const goMessage = () => {
        navigate('../businessmessage');
    }

    const goUsageDetail = () => {
        navigate('../businesshiringnew');
    }

    // const showToday = () => {
    //     // Please insert the code.
    // }

    // const showPrevMonth = () => {
    //     // Please insert the code.
    // }

    // const showNextMonth = () => {
    //     // Please insert the code.
    // }

    const eventsData = [
        {
            id: 0,
            type: 'start',
            title: "Call with Dave",
            start: new Date('2023-5-2'),
            end: new Date('2023-5-2')
        },
        {
            id: 1,
            type: 'end',
            title: "Lunch Meeting",
            start: new Date('2023-5-4'),
            end: new Date('2023-5-4')
        },
        {
            id: 2,
            type: 'middle',
            title: "Product Launch",
            start: new Date('2023-5-5'),
            end: new Date('2023-5-5')
        },
    ];

    const [isShowPhoto, setShowPhoto] = useState(false);

    return (
        <div className='business bhome'>
            <Sidebar active_num={0} />
            {
                isShowPhoto && <div className="fixed z-[9999] w-[100vw] h-[100vh] bg-[#000000aa]">
                    <div className="relative w-full h-full flex justify-center items-center">
                        <img className='' src="/src/img/photo-worker.png" alt="Shop Photo" />
                        <div className="absolute top-[50px] right-[50px] w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center rotate-[45deg] text-[30px] cursor-pointer text-[white] hover:rotate-[225deg]" onClick={() => setShowPhoto
                            (false)}>+</div>
                    </div>
                </div>
            }
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
                    <div className="flex">
                        <div className="relative w-[100px] h-[100px] sp:mb-[10px] sp:ml-[10px]">
                            <img className='w-full h-full rounded-full' src="/src/img/photo-worker.png" alt="Shop Photo" />
                            <img className='w-[30px] h-[30px] absolute bottom-0 right-0 cursor-pointer hover:scale-125' src="/src/img/zoom.png" alt="Zoom Button Image" onClick={() => { setShowPhoto(true) }} />
                        </div>
                        <div className="ml-[20px]">
                            <div className="w-[150px] h-[20px] bg-[#7764E4] text-white flex items-center justify-center rounded-[20px] cursor-pointer mt-[10px] hover:bg-white hover:text-[#7764E4]">Button</div>
                            <h2>ホーム</h2>
                            <p className='mt-[0px]'>お好きなメニューを選んでください。</p>
                        </div>
                    </div>
                    <div className="btn-box">
                        <div onClick={goHiringNew} className="btn">新規募集</div>
                        <div onClick={goQRCode} className="btn">出退勤<br />QRコード表示</div>
                        <div onClick={goModifyRequest} className="btn">修正依頼</div>
                        <div onClick={goWorkerRating} className="btn">ワーカー評価</div>
                        <div onClick={goMessage} className="btn">メッセージ</div>
                        <div onClick={goUsageDetail} className="btn">利用明細</div>
                    </div>
                    <p className='mt-[30px]'>求人一覧（カレンダー表示）</p>
                </div>
                <div className="cont mt-[10px] pb-[30px] relative">
                    <div className="absolute left-[50%] top-[45px] cal-ttl translate-x-[-50%] db:left-[25px] db:translate-x-0 db:top-[25px]">2023年5月</div>
                    <div className="absolute right-[42px] top-[13px]">
                        <div className="flex items-center h-[18px]">
                            <div className="w-[12px] h-[12px] mr-[12px] bg-[#959595]"></div>
                            <div className="text-[#959595] font-bold pt-[3px]">掲載終了</div>
                        </div>
                        <div className="flex items-center h-[18px] mt-[5px]">
                            <div className="w-[12px] h-[12px] mr-[12px] bg-[#F53C56]"></div>
                            <div className="text-[#F53C56] font-bold pt-[3px]">定員達成</div>
                        </div>
                        <div className="flex items-center h-[18px] mt-[5px]">
                            <div className="w-[12px] h-[12px] mr-[12px] bg-[#2C92D2]"></div>
                            <div className="text-[#2C92D2] font-bold pt-[3px]">掲載中</div>
                        </div>
                    </div>
                    <Calendar
                        views={["month"]}
                        selectable
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={eventsData}
                        messages={{ next: "翌月", previous: "前月", today: "今日", }}
                        eventPropGetter={
                            event => {
                                let newStyle = {
                                    backgroundColor: "gray",
                                };
                                if (event.type === "start")
                                    newStyle.backgroundColor = "#959595";
                                else if (event.type === "end")
                                    newStyle.backgroundColor = "#F53C56";
                                else if (event.type === "middle")
                                    newStyle.backgroundColor = "#2C92D2";

                                return {
                                    className: "",
                                    style: newStyle
                                };
                            }
                        }
                    />
                </div>
            </div>
        </div>
    );
}
