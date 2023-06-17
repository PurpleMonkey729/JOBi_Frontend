import Sidebar from './Sidebar';
import clsx from 'clsx';
import Checkbox from '../../components/Checkbox';
import Rating from '../../components/Rating';
import { useState } from 'react';

export default function ShopDetailPage() {
    const [isShowPhoto, setShowPhoto] = useState(false);
    return (
        <div className='admin'>
            <Sidebar active_num={1} />
            {
                isShowPhoto && <div className="fixed z-[9999] w-[100vw] h-[100vh] bg-[#000000aa]">
                    <div className="relative w-full h-full flex justify-center items-center">
                        <img className='' src="/src/img/photo-worker.png" alt="Shop Photo" />
                        <div className="absolute top-[50px] right-[50px] w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center rotate-[45deg] text-[30px] cursor-pointer text-[white] hover:rotate-[225deg]" onClick={() => setShowPhoto
                            (false)}>+</div>
                    </div>
                </div>
            }
            <div className="board asd">
                <div className="mt-[50px] hidden sp:block"></div>
                <h2 className='font-normal'>店舗詳細画面</h2>
                <p className='text-[13px] mt-[10px] font-bold'>店舗の詳細を表示しています。</p>
                <div className="mt-[47px]"></div>
                <div className="row">
                    <div className="left">
                        <div className="relative w-[135px] h-[135px] sp:mb-[10px] sp:ml-[10px]">
                            <img className='w-full h-full rounded-full' src="/src/img/photo-worker.png" alt="Shop Photo" />
                            <img className='w-[39px] h-[39px] absolute bottom-0 right-0 cursor-pointer hover:scale-125' src="/src/img/zoom.png" alt="Zoom Button Image" onClick={() => { setShowPhoto(true) }} />
                        </div>
                    </div>
                    <div className='right'>
                        <div className="text-[15px] text-[#2C92D2] mb-[4px]">店舗名</div>
                        <div className="input">My Shop</div>
                        <div className="text-[15px] text-[#2C92D2] mt-[13px] mb-[4px]">店舗ID</div>
                        <div className="input">0729</div>
                    </div>
                </div>
                <div className="mt-[33px]"></div>
                <div className="row">
                    <div className="left">電話番号</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="text-center mt-[56px] ml-[-20%] sp:ml-0">店舗の所在地</div>
                <div className="row">
                    <div className="left">郵便番号</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">都道府県</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">市区町村名</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">町域・番地・建物名</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="text-center mt-[56px] ml-[-20%] sp:ml-0">事業者</div>
                <div className="row">
                    <div className="left">法人名または個人事業主</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">代表電話番号</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">業種</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left left-big">町域・番地・建物名</div>
                    <div className="right">
                        <Checkbox disabled={true} className='mt-[5px]' str="スタッフの休みが多くシフトの穴が多い" />
                        <Checkbox disabled={true} className='mt-[5px]' str="スタッフが辞めてしまうため人手不足(予定含む)" />
                        <Checkbox disabled={true} className='mt-[5px]' str="採用をしているが集まらない" />
                        <Checkbox disabled={true} className='mt-[5px]' str="繁忙期など一時的に人手がほしい" />
                        <Checkbox disabled={true} className='mt-[5px]' str="派遣利用中だが、料金が高いと感じる" />
                        <Checkbox disabled={true} className='mt-[5px]' str="人手不足に関して課題を感じていない" />
                        <Checkbox disabled={true} className='mt-[5px]' str="その他" />
                    </div>
                </div>
                <div className="text-center mt-[56px] ml-[-20%] sp:ml-0">事業者の所在地</div>
                <div className="row">
                    <div className="left">郵便番号</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">都道府県</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">市区町村名</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">町域・番地・建物名</div>
                    <div className="right">
                        <div className="input"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="left">適格請求番号をお持ちの方</div>
                    <div className="right flex items-center sp:block">
                        <div type="text" className='input input-short'></div>
                        <Checkbox disabled={true} className="ml-[16px] sp:ml-0 sp:mt-[10px]" str="適格請求番号を持っていない" />
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#707070] mt-[25px]"></div>
                <div className="row">
                    <div className="left left-big">掲載中の求人</div>
                    <div className="right right-txt">
                        <div className="flex mb-[40px] db:block">
                            <div className="">2023/04/25</div>
                            <div className="ml-[30px] db:ml-0">11:00~17:00</div>
                            <div className="ml-[30px] db:ml-0">＜ホールスタッフ募集！＞<br />やよい軒 北谷美浜店　未経験者歓迎！</div>
                        </div>
                        <div className="flex mb-[40px] db:block">
                            <div className="">2023/04/25</div>
                            <div className="ml-[30px] db:ml-0">11:00~17:00</div>
                            <div className="ml-[30px] db:ml-0">＜ホールスタッフ募集！＞<br />やよい軒 北谷美浜店　未経験者歓迎！</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="left left-big">市区町村名</div>
                    <div className="right right-txt">
                        <div className="mb-[35px]">
                            <div className="flex mb-[23px] db:block db:mb-[10px]">
                                <div className="">2023/04/25</div>
                                <div className="ml-[30px] db:ml-0">11:00~17:00</div>
                                <div className="ml-[30px] db:ml-0">＜ホールスタッフ募集！＞<br />やよい軒 北谷美浜店　未経験者歓迎！</div>
                            </div>
                            <div className="flex mb-[23px] db:block">
                                <div className="">出勤時間：2023/04/25 10:55〜17:30</div>
                                <div className="ml-[30px] db:ml-0">給与：5,000円</div>
                                <div className="ml-[30px] db:ml-0">手数料：1,000円</div>
                            </div>
                        </div>
                        <div className="mb-[35px]">
                            <div className="flex mb-[23px] db:block db:mb-[10px]">
                                <div className="">2023/04/25</div>
                                <div className="ml-[30px] db:ml-0">11:00~17:00</div>
                                <div className="ml-[30px] db:ml-0">＜ホールスタッフ募集！＞<br />やよい軒 北谷美浜店　未経験者歓迎！</div>
                            </div>
                            <div className="flex mb-[23px] db:block">
                                <div className="">出勤時間：2023/04/25 10:55〜17:30</div>
                                <div className="ml-[30px] db:ml-0">給与：5,000円</div>
                                <div className="ml-[30px] db:ml-0">手数料：1,000円</div>
                            </div>
                        </div>
                        <div className="mb-[35px]">
                            <div className="flex mb-[23px] db:block db:mb-[10px]">
                                <div className="">2023/04/25</div>
                                <div className="ml-[30px] db:ml-0">11:00~17:00</div>
                                <div className="ml-[30px] db:ml-0">＜ホールスタッフ募集！＞<br />やよい軒 北谷美浜店　未経験者歓迎！</div>
                            </div>
                            <div className="flex mb-[23px] db:block">
                                <div className="">出勤時間：2023/04/25 10:55〜17:30</div>
                                <div className="ml-[30px] db:ml-0">給与：5,000円</div>
                                <div className="ml-[30px] db:ml-0">手数料：1,000円</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#707070] mt-[25px]"></div>
                <div className="row">
                    <div className="left left-big">市区町村名</div>
                    <div className="right">
                        <div className="">2023年4月分　合計手数料：2,000円</div>
                        <div className="">2023年4月分　合計手数料：2,000円</div>
                        <div className="">2023年4月分　合計手数料：2,000円</div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#707070] mt-[25px]"></div>
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
                <div className="btn-blue-light">戻る</div>
                <div className="mb-[56px]"></div>
            </div>
        </div >
    );
}
