import Sidebar from './Sidebar';
import clsx from 'clsx';
import Checkbox from '../../components/Checkbox';
import Rating from '../../components/Rating';
import { useState } from 'react';

export default function WorkerDetailPage() {
    const [isShowPhoto, setShowPhoto] = useState(0);
    const showModal = key => {
        setShowPhoto(key);
    }
    return (
        <div className='admin'>
            <Sidebar active_num={1} />
            {
                isShowPhoto != 0 && <div className="fixed z-[9999] w-[100vw] h-[100vh] bg-[#000000aa]">
                    <div className="relative w-full h-full flex justify-center items-center">
                        { isShowPhoto == 1 && <img className='' src="/src/img/photo-worker.png" alt="Shop Photo" /> || isShowPhoto == 2 && <img className='w-[80%]' src="/src/img/passport.png" alt="Shop Photo" />
                        }
                        <div className="absolute top-[50px] right-[50px] w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center rotate-[45deg] text-[30px] cursor-pointer text-[white] hover:rotate-[225deg]"  onClick={()=>setShowPhoto(false)}>+</div>
                    </div>
                </div>
            }
            <div className="board asd awd">
                <div className="mt-[50px] hidden sp:block"></div>
                <h2 className='font-normal'>労働者詳細画面</h2>
                <p className='text-[13px] mt-[10px] font-bold'>ワーカーの詳細を表示しています。本人確認書とプロフィールを照らし合わせて下さい。</p>
                <div className="mt-[47px]"></div>
                <div className="row">
                    <div className="left">
                        <div className="relative w-[135px] h-[135px]">
                            <img className='w-full h-full rounded-full' src="/src/img/photo-worker.png" alt="Shop Photo" />
                            <img className='w-[39px] h-[39px] absolute bottom-0 right-0 cursor-pointer hover:scale-125' src="/src/img/zoom.png" alt="Zoom Button Image" onClick={() => { setShowPhoto(true) }} />
                        </div>
                    </div>
                    <div className='right'>
                        <div className="text-[15px] text-[#2C92D2] mb-[4px]">店舗名</div>
                        <div className="input"></div>
                        <div className="text-[15px] text-[#2C92D2] mt-[13px] mb-[4px]">店舗ID</div>
                        <div className="input"></div>
                    </div>
                </div>
                <div className="mt-[33px]"></div>
                <div className="row">
                    <div className="left">ふりがな</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">生年月日</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">性別</div>
                    <div className="right flex">
                        <Checkbox className="mr-[30px]" disabled={true} checked={true} str="男性" />
                        <Checkbox disabled={true} str="女性" />
                    </div>
                </div>
                <div className="row">
                    <div className="left">メールアドレス</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">電話番号</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">現住所</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left left-big">住所異なる理由</div>
                    <div className="right">
                        <div className="input input-big"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left left-big">本人確認書類</div>
                    <div className="right">
                        <img className='w-full max-w-[386px]' src="/src/img/passport.png" alt="passport" />
                        <div className="btn-pink-light" onClick={()=>showModal(2)}>拡大</div>
                    </div>
                </div>
                <div className="row">
                    <div className="left left-big">市区町村名</div>
                    <div className="right right-txt">
                        <div className="w-[100%] max-w-[386px] bg-[#F6F9FC] px-[23px] py-[30px] mb-[13px]">
                            <div className="mb-[35px]">とてもよい職場だと思いました。</div>
                            <div className="flex">
                                <div className="mr-[30px]">2023-06-20</div>
                                <div className="">10:00~17:00</div>
                            </div>
                            <div className="flex mt-[20px]">
                                <div className="mr-[10px]">評価</div>
                                <Rating num={4} />
                            </div>
                        </div>
                        <div className="w-[100%] max-w-[386px] bg-[#F6F9FC] px-[23px] py-[30px] mb-[13px]">
                            <div className="mb-[35px]">とてもよい職場だと思いました。</div>
                            <div className="flex">
                                <div className="mr-[30px]">2023-06-20</div>
                                <div className="">10:00~17:00</div>
                            </div>
                            <div className="flex mt-[20px]">
                                <div className="mr-[10px]">評価</div>
                                <Rating num={4} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="left left-big">住所異なる理由</div>
                    <div className="right">
                        <div className="flex w-[200px] justify-between items-center mb-[10px]">
                            <div className="">コミュニケーション</div>
                            <div className="w-[16px] h-[16px] rounded-full bg-[#333] text-white flex justify-center items-center text-[12px]">1</div>
                        </div>
                        <div className="flex w-[200px] justify-between items-center mb-[10px]">
                            <div className="">笑顔</div>
                            <div className="w-[16px] h-[16px] rounded-full bg-[#333] text-white flex justify-center items-center text-[12px]">2</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="left left-big">市区町村名</div>
                    <div className="right">
                        <div className="">2023年4月分　合計手数料：2,000円</div>
                        <div className="">2023年4月分　合計手数料：2,000円</div>
                        <div className="">2023年4月分　合計手数料：2,000円</div>
                    </div>
                </div>
                <div className="btn-purple-heavy">メッセージを送る</div>
                <div className="btn-blue-light">戻る</div>
                <div className="mb-[56px]"></div>
            </div>
        </div>
    );
}
