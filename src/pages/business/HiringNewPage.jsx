import Sidebar from './Sidebar';
import Checkbox from '../../components/Checkbox';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function BusinessHiringNewPage() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className='business bhn'>
            <Sidebar active_num={3} />
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
                    <h2>新規募集（求人）の追加</h2>
                    <p className='mt-[10px]'>下記に必要な情報を入力して保存して下さい。</p>
                </div>
                <div className="cont mt-[40px] py-[30px] px-[45px]">
                    <div className="flex items-center pb-[20px] border-b-[1px] border-[#707070]">
                        <div className="mr-[20px]">タイトル</div>
                        <input type="text" className='w-[600px] h-[50px] px-[20px] py-[5px] border-[1px] border-[#7764E4] text-[#7764E4] rounded-[5px] shadow-md' placeholder='ここに求人タイトル' />
                    </div>
                    <div className="flex items-end mt-[20px]">
                        <div className="mr-[100px]">職場の雰囲気がわかる写真</div>
                        <div className="btn-gray w-[112px] h-[31px]">選択</div>
                    </div>
                    <div className="w-full flex justify-between mt-[20px]">
                        <img src='src/img/photo-worker.png' alt="" className='shadow-md' />
                        <img src='src/img/photo-worker.png' alt="" className='shadow-md' />
                        <img src='src/img/photo-worker.png' alt="" className='shadow-md' />
                    </div>
                    <div className="flex mt-[56px]">
                        <div className="relative mr-[22px]">
                            <div className="mb-[5px]">働く日時</div>
                            <img src="src/img/icon-calendar-02.png" alt="" className="cal" />
                            <DatePicker
                                dateFormat="yyyy/MM/dd"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                            <div className="mb-[20px]"></div>
                            <input type="time" />
                        </div>
                        <div className="relative">
                            <div className="mb-[5px]">求人の締め切り日時</div><img src="src/img/icon-calendar-02.png" alt="" className="cal" />
                            <img src="src/img/icon-calendar-02.png" alt="" className="cal" />
                            <DatePicker
                                dateFormat="yyyy/MM/dd"
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                            />
                            <div className="mb-[20px]"></div>
                            <input type="time" />
                        </div>
                    </div>
                    <div className="flex items-center mt-[20px]">
                        <div className="mr-[30px]">休憩</div>
                        <input type="text" placeholder="60" className='mr-[10px] w-[145px]' />
                        <div className="mr-[80px]">分</div>
                        <Checkbox str="休憩なし" />
                    </div>
                    <div className="flex items-center mt-[20px]">
                        <div className="mr-[30px]">時給</div>
                        <input type="text" placeholder="1,000" className='mr-[30px] w-[222px]' />
                        <div className="mr-[20px]">交通費</div>
                        <div className="alert">
                            <input type="text" value="１，０００" className='w-[213px]' />
                            <div className="alert-txt">半角で入力して下さい。</div>
                        </div>
                    </div>
                    <div className="flex items-center mt-[20px]">
                        <div className="w-[100px]">募集人数</div>
                        <input type="text" placeholder="選択" className='w-[182px]' />
                    </div>
                    <div className="flex mt-[20px]">
                        <div className="w-[100px] min-w-[100px] mt-[15px]">待遇</div>
                        <div className="flex flex-wrap">
                            <Checkbox str="バイク通勤OK" />
                            <Checkbox str="車通勤OK" />
                            <Checkbox str="まかないつき" />
                            <Checkbox str="未経験者OK" />
                            <Checkbox str="交通費支給" />
                            <Checkbox str="自転車通勤OK" />
                            <Checkbox str="アットホーム" />
                        </div>
                    </div>
                    <div className="flex mt-[20px]">
                        <div className="w-[100px] min-w-[100px] mt-[15px]">仕事内容</div>
                        <textarea name="" id="" placeholder='仕事内容をできるだけ具体的にご記入ください。' className='h-[135px]'></textarea>
                    </div>
                    <div className="flex mt-[20px]">
                        <div className="w-[100px] min-w-[100px] mt-[15px]">注意事項</div>
                        <textarea name="" id="" placeholder='求職者に向けて注意事項があればご記入ください。' className='h-[86px]'></textarea>
                    </div>
                    <div className="flex check-box2  mt-[20px]">
                        <div className="w-[100px] min-w-[100px] mt-[15px]">持ち物</div>
                        <div className="flex flex-wrap">
                            <Checkbox str="私服OK" />
                            <Checkbox str="シューズ貸し出し" />
                            <Checkbox str="筆記用具" />
                            <Checkbox str="飲み物・軽食" />
                        </div>
                    </div>
                    <div className="flex mt-[20px]">
                        <div className="w-[100px] min-w-[100px] mt-[15px]">条件</div>
                        <textarea name="" id="" placeholder='空白可能' className='h-[128px]'></textarea>
                    </div>
                    <div className="flex items-center mt-[20px]">
                        <div className='w-[100px] min-w-[100px]'>働く住所</div>
                        <input type="text" placeholder="那覇市" className='w-[121px] mr-[10px]' />
                        <div className='mr-[5px]'>市</div>
                        <input type="text" placeholder="松尾" className='w-[121px] mr-[10px]' />
                        <div className='mr-[5px]'>町村</div>
                        <input type="text" placeholder="1-2-3" className='w-[280px]' />
                    </div>
                </div>
                <div className="flex relative w-[800px] mx-auto items-center justify-center">
                    <div className=" absolute left-0 text[#8898AA]">＜戻る</div>
                    <div className="btn-gradient w-[315px] h-[64px] mt-[24px]">最終確認</div>
                </div>
            </div>
        </div>
    );
}
