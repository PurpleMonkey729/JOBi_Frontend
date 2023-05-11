import Sidebar from './Sidebar';
import Checkbox from '../../components/Checkbox';

export default function BusinessWorkerRatingPage() {
    return (
        <div className='business'>
            <Sidebar active_num={6} />
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
                    <h2>ワーカー評価</h2>
                    <p className='mt-[15px]'>必要な情報を入力して下さい。</p>
                </div>
                <div className="cont mt-[20px] py-[35px] px-[45px]">
                    <div className="h-[56px] flex items-center pb-[17px] border-b-[1px] border-[#707070]">
                        <img src='src/img/photo.png' alt="photo" className='mr-[10px]' />
                        <div className="text-[15px] font-bold">田中みなみ</div>
                    </div>
                    <div className="mt-[20px] pb-[20px] border-b-[1px] border-[#707070]">
                        <div className="text-[15px] font-bold">GOOD / BADを選択</div>
                        <div className="mt-[10px] flex items-center">
                            <img src='src/img/icon-thumb-up.png' alt="icon-thumb-up" className='mr-[10px] db:w-[30px]' />
                            <div className="text-[15px] font-bold mr-[30px] db:text-[12px]">よかった</div>
                            <img src='src/img/icon-thumb-down.png' alt="icon-thumb-down" className='mr-[10px] db:w-[30px]' />
                            <div className="text-[15px] font-bold mr-[10px] db:text-[12px]">よくなかった</div>
                        </div>
                    </div>
                    <div className="border-b-[1px] border-[#707070] pt-[30px] pb-[20px]">
                        <p className='text-[15px] font-bold mb-[25px]'>良かったスキルを選択</p>
                        <Checkbox str='体力' />
                        <div className="mt-[10px]"></div>
                        <Checkbox str='元気' />
                        <div className="mt-[10px]"></div>
                        <Checkbox str='笑顔' />
                        <div className="mt-[10px]"></div>
                        <Checkbox str='はきはき' />
                        <div className="mt-[10px]"></div>
                        <Checkbox str='コミュニケーション力' />
                        <div className="mt-[10px]"></div>
                        <Checkbox str='オーダー' />
                        <div className="mt-[10px]"></div>
                        <Checkbox str='ホール・配膳' />
                        <div className="mt-[10px]"></div>
                        <Checkbox str='洗い場・清掃' />
                    </div>
                    <div className="border-b-[1px] border-[#707070] pt-[30px] pb-[20px]">
                        <p className='text-[15px] font-bold mb-[25px]'>所属するグループ</p>
                        <Checkbox str='お気に入り' />
                        <div className="mt-[10px]"></div>
                        <Checkbox str='接客エキスパート' />
                        <div className="mt-[10px]"></div>
                        <Checkbox str='接客プロ' />
                    </div>
                    <div className="pt-[30px] pb-[20px]">
                        <p className='text-[15px] font-bold mb-[25px]'>コメントを入力</p>
                        <textarea name="" id="" placeholder='できるだけ具体的にご記入ください。' className='px-[30px] py-[22px] w-full h-[135px] shadow-md rounded-[5px] bg-[#F7FAFC]'></textarea>
                    </div>
                    <div className="btn-purple w-[150px] h-[40px] mr-[35px]">評価する</div>
                </div>
            </div>
        </div>
    );
}
