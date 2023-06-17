import Sidebar from './Sidebar';
import Checkbox from '../../components/Checkbox';
import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css";
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { DatePicker as TimePicker } from 'rsuite';
import clsx from 'clsx';
registerLocale("ja", ja);

export default function BusinessHiringNewPage() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [conform, setConform] = useState(false);
    const array3 = [1, 2, 3];
    const clickConform = () => {
        setConform(true);
    }
    const cancelConform = () => {
        setConform(false);
    }

    return (
        <div className={clsx('business bhn', { 'bhn-conform': conform })}>
            <Sidebar active_num={3} />
            <div className="board">
                <div className="header">
                    <div className="alarm-box absolute right-[70px] top-[80px]">
                        <div className="relative flex">
                            <div className="absolute w-[20px] h-[20px] top-[-10px] left-[-10px] rounded-full bg-[#FA8673] text-white font-bold text-[12px] flex justify-center items-center">1</div>
                            <img src='/src/img/icon-bell.png' alt="icon-bell" className='mr-[10px] w-[20px] h-[22px]' />
                            <div className="text-white font-bold mr-[40px] mt-[4px]">店舗ID：0001</div>
                            <div className="text-white font-bold mt-[4px]">店舗名：那覇新都心店</div>
                        </div>
                    </div>
                    <h2>新規募集（求人）の追加</h2>
                    <p className='mt-[10px]'>下記に必要な情報を入力して保存して下さい。</p>
                </div>
                <div className="cont mt-[40px] py-[30px] px-[45px]">
                    {conform &&
                        <div className="relative mx-auto">
                            <div className="absolute left-0 text-[#8898AA] sp:relative hover:text-[#333] hover:cursor-pointer" onClick={cancelConform}>＜ 戻って修正する</div>
                            <div className='text-center text-[#f00] font-bold sp:text-[12px]'>こちらの内容で公開してよろしいですか？<br />よろしければ下記のボタンを押して下さい。</div>
                            <div className="btn-gradient max-w-[315px] h-[64px] my-[24px] mx-auto before:w-[12px] before:h-[12px] sp:w-full">求人を公開</div>
                        </div>
                    }
                    <div className="flex items-center pb-[20px] border-b-[1px] border-[#707070] sp:block">
                        <div className="mr-[20px]">タイトル</div>
                        <input type="text" className='w-[600px] h-[50px] px-[20px] py-[5px] border-[1px] border-[#7764E4] text-[#7764E4] rounded-[5px] shadow-md sp:w-full' placeholder={!conform && 'ここに求人タイトル'} disabled={conform} />
                    </div>
                    <div className="flex items-end mt-[20px] sp:block">
                        <div className="mr-[100px] sp:mr-0">職場の雰囲気がわかる写真</div>
                        <div className="btn-select-img btn-gray w-[112px] h-[31px] sp:mt-[10px]">選択</div>
                    </div>
                    <div className="w-full flex mt-[20px] db:block">
                        {
                            array3.map(i =>
                                <div className="box-img w-[30%] db:w-full">
                                    <img src='/src/img/photo-worker.png' alt="" className='db:w-full db:mb-[20px]' />
                                    <div className="btn-del-img">+</div>
                                </div>
                            )
                        }
                    </div>
                    <div className="flex mt-[56px] sp:block">
                        <div className="relative mr-[22px] sp:mr-0">
                            <div className="mb-[5px]">働く日時</div>
                            <img src="/src/img/icon-calendar-02.png" alt="" className="cal" />
                            <img src="/src/img/icon-clock.png" alt="" className="clock" />
                            <div className="arrow-down w-[14px] h-[8px] z-10 right-[15px] top-[48px]"></div>
                            <div className="arrow-down w-[14px] h-[8px] z-10 right-[15px] top-[118px]"></div>
                            <DatePicker
                                dateFormat="yyyy/MM/dd"
                                selected={startDate}
                                onChange={(date) => changeStartDate(date)}
                                disabled={conform}
                                locale='ja'
                                dateFormatCalendar="yyyy年 LLLL"
                            />
                            <div className="mb-[20px]"></div>
                            <DateRangePicker
                                format="HH:mm"
                                ranges={[]}
                                defaultValue={[new Date('2022-02-01 00:00:00'), new Date('2022-05-01 23:59:59')]}
                                defaultCalendarValue={[new Date('2022-02-01 00:00:00'), new Date('2022-05-01 23:59:59')]}
                                disabled={conform}
                                locale={{
                                    hours: "時",
                                    minutes: "分",
                                    ok: "確認",
                                }}
                            />
                        </div>
                        <div className="relative sp:mt-[25px]">
                            <div className="mb-[5px]">求人の締め切り日時</div><img src="/src/img/icon-calendar-02.png" alt="" className="cal" />
                            <img src="/src/img/icon-calendar-02.png" alt="" className="cal" />
                            <img src="/src/img/icon-clock.png" alt="" className="clock" />
                            <div className="arrow-down w-[14px] h-[8px] z-10 right-[15px] top-[48px]"></div>
                            <div className="arrow-down w-[14px] h-[8px] z-10 right-[15px] top-[118px]"></div>
                            <DatePicker
                                dateFormat="yyyy/MM/dd"
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                disabled={conform}
                                locale='ja'
                                dateFormatCalendar="yyyy年 LLLL"
                            />
                            <div className="mb-[20px]"></div>
                            <TimePicker
                                format="HH:mm"
                                ranges={[]}
                                defaultValue={new Date('2022-02-01 00:00:00')}
                                defaultCalendarValue={new Date('2022-02-01 00:00:00')}
                                disabled={conform}
                                locale={{
                                    hours: "時",
                                    minutes: "分",
                                    ok: "確認",
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center mt-[20px] flex-wrap">
                        <div className="mr-[30px]">休憩</div>
                        <input type="text" placeholder={!conform && "60"} className='mr-[10px] w-[145px]' disabled={conform} />
                        <div className="mr-[80px] sp:mr-[25px]">分</div>
                        <Checkbox disabled={conform} str="休憩なし" />
                    </div>
                    <div className="flex mt-[20px] sp:block">
                        <div className="flex items-center sp:block">
                            <div className="mr-[30px]">時給</div>
                            <input type="text" placeholder={!conform && "1,000"} className='mr-[30px] w-[222px] sp:w-full sp:mr-0' disabled={conform} />
                        </div>
                        <div className="flex items-center sp:block sp:mt-[25px]">
                            <div className="mr-[20px]">交通費</div>
                            <div className="alert">
                                <input type="text" value="１，０００" className='w-[213px] sp:w-full' disabled={conform} />
                                <div className="alert-txt">半角で入力して下さい。</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mt-[40px] sp:block">
                        <div className="w-[100px]">募集人数</div>
                        <div className="select">
                            <select name="" id="" className='w-[182px] sp:w-full sp:mr-0' disabled={conform}>
                                <option value="">選択</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex mt-[20px] sp:block">
                        <div className="w-[100px] min-w-[100px] mt-[15px]">待遇</div>
                        <div className="flex flex-wrap">
                            <Checkbox disabled={conform} str="バイク通勤OK" />
                            <Checkbox disabled={conform} str="車通勤OK" />
                            <Checkbox disabled={conform} str="まかないつき" />
                            <Checkbox disabled={conform} str="未経験者OK" />
                            <Checkbox disabled={conform} str="交通費支給" />
                            <Checkbox disabled={conform} str="自転車通勤OK" />
                            <Checkbox disabled={conform} str="アットホーム" />
                        </div>
                    </div>
                    <div className="flex mt-[20px] sp:block">
                        <div className="w-[100px] min-w-[100px] mt-[15px]">仕事内容</div>
                        <textarea name="" id="" placeholder={!conform && "仕事内容をできるだけ具体的にご記入ください。"} className='h-[135px]' disabled={conform}></textarea>
                    </div>
                    <div className="flex mt-[20px] sp:block">
                        <div className="w-[100px] min-w-[100px] mt-[15px]">注意事項</div>
                        <textarea name="" id="" placeholder={!conform && "求職者に向けて注意事項があればご記入ください。"} className='h-[86px]' disabled={conform}></textarea>
                    </div>
                    <div className="flex check-box2  mt-[20px] sp:block">
                        <div className="w-[100px] min-w-[100px] mt-[15px]">持ち物</div>
                        <div className="flex flex-wrap">
                            <Checkbox disabled={conform} str="私服OK" />
                            <Checkbox disabled={conform} str="シューズ貸し出し" />
                            <Checkbox disabled={conform} str="筆記用具" />
                            <Checkbox disabled={conform} str="飲み物・軽食" />
                        </div>
                    </div>
                    <div className="flex mt-[20px] sp:block">
                        <div className="w-[100px] min-w-[100px] mt-[15px]">条件</div>
                        <textarea name="" id="" placeholder={!conform && '空白可能'} className='h-[128px]' disabled={conform}></textarea>
                    </div>
                    <div className="flex flex-wrap sp:block">
                        <div className="flex items-center mt-[20px]">
                            <div className='w-[100px]'>働く住所</div>
                            <input type="text" placeholder={!conform && "那覇市"} className='w-[121px] mr-[10px] sp:w-full sp:mr-0' disabled={conform} />
                        </div>
                        <div className="flex items-center mt-[20px]">
                            <div className='mr-[5px] sp:mt-[25px] sp:w-[100px] sp:mr-0'>市</div>
                            <input type="text" placeholder={!conform && "松尾"} className='w-[121px] mr-[10px] sp:w-full sp:mr-0' disabled={conform} />
                        </div>
                        <div className="flex items-center mt-[20px]">
                            <div className='mr-[5px] sp:mt-[25px] sp:w-[100px] sp:mr-0'>町村</div>
                            <input type="text" placeholder={!conform && "1-2-3"} className='w-[280px] sp:w-full sp:mr-0' disabled={conform} />
                        </div>
                    </div>
                </div>
                <div className="box-btn flex relative max-w-[800px] mx-auto items-center justify-center sp:block">
                    <div className=" absolute left-0 text[#8898AA] sp:relative sp:text-center sp:mt-[10px]">＜戻る</div>
                    <div className="btn-gradient w-[315px] h-[64px] mt-[24px] before:w-[12px] before:h-[12px] sp:mt-[10px] sp:mx-auto" onClick={clickConform}>最終確認</div>
                </div>
            </div>
        </div>
    );
}
