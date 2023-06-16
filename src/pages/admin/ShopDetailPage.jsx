import Sidebar from './Sidebar';
import clsx from 'clsx';
import Checkbox from '../../components/Checkbox';

export default function ShopDetailPage() {
    const zoomPhoto = () => {
        // Beatuy Smile!!!
    }
    return (
        <div className='admin'>
            <Sidebar active_num={1} />
            <div className="board asd">
                <div className="mt-[50px] hidden sp:block"></div>
                <h2 className='font-normal'>店舗詳細画面</h2>
                <p className='text-[13px] mt-[10px] font-bold'>店舗の詳細を表示しています。</p>
                <div className="mt-[47px]"></div>
                <div className="row">
                    <div className="left">
                        <div className="relative w-[135px] h-[135px]">
                            <img className='w-full h-full rounded-full' src="/src/img/photo-worker.png" alt="Shop Photo" />
                            <img className='w-[39px] h-[39px] absolute bottom-0 right-0 cursor-pointer hover:scale-125' src="/src/img/zoom.png" alt="Zoom Button Image" onClick={zoomPhoto} />
                        </div>
                    </div>
                    <div className='right'>
                        <div className="text-[15px] text-[#2C92D2] mb-[4px]">店舗名</div>
                        <input type="text" />
                        <div className="text-[15px] text-[#2C92D2] mt-[13px] mb-[4px]">店舗ID</div>
                        <input type="text" />
                    </div>
                </div>
                <div className="mt-[33px]"></div>
                <div className="row">
                    <div className="left">電話番号</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="text-center mt-[56px] ml-[-20%]">店舗の所在地</div>
                <div className="row">
                    <div className="left">郵便番号</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="left">都道府県</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="left">市区町村名</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="left">町域・番地・建物名</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="text-center mt-[56px] ml-[-20%]">事業者</div>
                <div className="row">
                    <div className="left">法人名または個人事業主</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="left">代表電話番号</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="left">業種</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="left left-big">町域・番地・建物名</div>
                    <div className="right">
                        <Checkbox className='mt-[5px]' str="スタッフの休みが多くシフトの穴が多い" />
                        <Checkbox className='mt-[5px]' str="スタッフが辞めてしまうため人手不足(予定含む)" />
                        <Checkbox className='mt-[5px]' str="採用をしているが集まらない" />
                        <Checkbox className='mt-[5px]' str="繁忙期など一時的に人手がほしい" />
                        <Checkbox className='mt-[5px]' str="派遣利用中だが、料金が高いと感じる" />
                        <Checkbox className='mt-[5px]' str="人手不足に関して課題を感じていない" />
                        <Checkbox className='mt-[5px]' str="その他" />
                    </div>
                </div>
                <div className="text-center mt-[56px] ml-[-20%]">事業者の所在地</div>
                <div className="row">
                    <div className="left">郵便番号</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="left">都道府県</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="left">市区町村名</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="left">町域・番地・建物名</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="left">適格請求番号をお持ちの方</div>
                    <div className="right flex items-center">
                        <input type="text" className='input-short'/>
                        <Checkbox className="ml-[16px]" str="適格請求番号を持っていない" />
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#707070] mt-[25px]"></div>
                <div className="row">
                    <div className="left left-big">掲載中の求人</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="left left-big">市区町村名</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#707070] mt-[25px]"></div>
                <div className="row">
                    <div className="left left-big">市区町村名</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#707070] mt-[25px]"></div>
                <div className="row">
                    <div className="left left-big">市区町村名</div>
                    <div className="right">
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
}
