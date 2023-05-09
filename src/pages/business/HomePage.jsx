// https://codesandbox.io/s/blazing-pond-47crhl?file=/src/ReactBigCalendar.js

import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

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

    return (
        <div className='business bhome'>
            <Sidebar active_num={0} />
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
                    <h2>ホーム</h2>
                    <p className='mt-[15px]'>お好きなメニューを選んでください。</p>
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
                    // onSelectEvent={(event) => alert(event.title)}
                    // onSelectSlot={handleSelect}
                    />
                    {/* 
                    <table className="w-[777px] mx-auto">
                        <thead>
                            <tr>
                                <th className="p-2 w-[111px] h-[37px] bg-[#F7FAFC] text-[#A3A6B4] text-center text-[7px] font-bold">SUN</th>
                                <th className="p-2 w-[111px] h-[37px] bg-[#F7FAFC] text-[#A3A6B4] text-center text-[7px] font-bold">MON</th>
                                <th className="p-2 w-[111px] h-[37px] bg-[#F7FAFC] text-[#A3A6B4] text-center text-[7px] font-bold">TUE</th>
                                <th className="p-2 w-[111px] h-[37px] bg-[#F7FAFC] text-[#A3A6B4] text-center text-[7px] font-bold">WED</th>
                                <th className="p-2 w-[111px] h-[37px] bg-[#F7FAFC] text-[#A3A6B4] text-center text-[7px] font-bold">THU</th>
                                <th className="p-2 w-[111px] h-[37px] bg-[#F7FAFC] text-[#A3A6B4] text-center text-[7px] font-bold">FRI</th>
                                <th className="p-2 w-[111px] h-[37px] bg-[#F7FAFC] text-[#A3A6B4] text-center text-[7px] font-bold">SAT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center h-20">
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA33] font-bold text-right pt-[10px] pr-[5px] text-[9px]">31</div>
                                        <div className="bottom pt-[5px]">
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">1</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">2</div>
                                        <div className="bottom pt-[5px]">
                                            <div className="event bg-[#707070] text-white font-bold text-[8px] rounded p-1 mb-1">Call with Dave</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">3</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">4</div>
                                        <div className="bottom pt-[5px]">
                                            <div className="event bg-[#F53C56] text-white font-bold text-[8px] rounded p-1 mb-1">Lunch Meeting</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">5</div>
                                        <div className="bottom pt-[5px]">
                                            <div className="event bg-[#2C92D2] text-white font-bold text-[8px] rounded p-1 mb-1">Product Launch</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">6</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-center h-20">
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">7</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">8 </div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">9</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">10</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">11</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">12</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">13</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-center h-20">
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">14</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">15</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">16</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">17</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">18</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">19</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">20</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-center h-20">
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">21</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">22</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">23</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">24</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">25</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">26</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">27</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-center h-20">
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">28</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">29</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA] font-bold text-right pt-[10px] pr-[5px] text-[9px]">30</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA33] font-bold text-right pt-[10px] pr-[5px] text-[9px]">1</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA33] font-bold text-right pt-[10px] pr-[5px] text-[9px]">2</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA33] font-bold text-right pt-[10px] pr-[5px] text-[9px]">3</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                                <td className="border border-[#F7FAFC] p-1 w-[111px] h-[111px]">
                                    <div className="w-full h-[111px] overflow-hidden">
                                        <div className="top text-[#8898AA33] font-bold text-right pt-[10px] pr-[5px] text-[9px]">4</div>
                                        <div className="bottom pt-[5px]"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
    );
}
