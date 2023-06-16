import Sidebar from './Sidebar';
import clsx from 'clsx';
import Checkbox from '../../components/Checkbox';

export default function ShopDetailPage() {

    const clickChange = index => {
        // Please insert code.
    }

    return (
        <div className='admin'>
            <Sidebar active_num={1} />
            <div className="board pas">
                <div className="mt-[50px] hidden sp:block"></div>
                <h2 className='font-normal'>push通知設定（Firebase）</h2>
                <p className='text-[13px] mt-[10px] font-bold'>ここではアプリのpush通知設定が可能です。</p>
                <p className="text-[18px] mt-[40px]">ワーカー（アプリ）のpush通知範囲</p>
                <div className="flex mt-[30px] db:block">
                    <div className="w-[120px] mr-[20px] text-right mb-[10px] db:text-left">自動通知設定</div>
                    <div>
                        <Checkbox str="求人が新しく公開されたらワーカーに通知します。" />
                        <Checkbox className="mt-[10px] db:mt-[20px]" str="メッセンジャーに新しいメッセージが届いたら通知します。" />
                        <Checkbox className='mt-[10px] db:mt-[20px]' str="応募した求人の24時間前になったら通知します。" />
                        <Checkbox className='mt-[10px] db:mt-[20px]' str="応募した求人の12時間前になったら通知します。" />
                        <Checkbox className='mt-[10px] db:mt-[20px]' str="応募した求人の4時間前になったら通知します。" />
                        <Checkbox className='mt-[10px] db:mt-[20px]' str="応募した求人の1時間前になったら通知します。" />
                        <Checkbox className='mt-[10px] db:mt-[20px]' str="お気に入り登録した店舗が求人を公開したら通知します。" />
                    </div>
                </div>
                <p className="text-[16px] mt-[30px]">手動push通知</p>
                <textarea className='w-full h-[181px] py-[22px] px-[30px]' placeholder='Push通知したいテキストをご記入ください。'></textarea>
                <div className="btn-blue-light">push通知</div>
                <div className="w-full h-[1px] bg-[#707070] mt-[46px]"></div>
                <p className="text-[18px] mt-[23px]">事業者（店舗）のメール通知範囲</p>
                <div className="flex mt-[30px] db:block">
                    <div className="w-[120px] mr-[20px] text-right mb-[10px] db:text-left">通知設定</div>
                    <div>
                        <Checkbox str="求人が新しく公開されたらワーカーに通知します。" />
                        <Checkbox className="mt-[10px] db:mt-[20px]" str="ワーカーからメッセージが届いたら通知します。" />
                        <Checkbox className='mt-[10px] db:mt-[20px]' str="求人に応募があったら通知します。" />
                        <Checkbox className='mt-[10px] db:mt-[20px]' str="応募のキャンセルがあったら通知します。" />
                        <Checkbox className='mt-[10px] db:mt-[20px]' str="tmp1" />
                        <Checkbox className='mt-[10px] db:mt-[20px]' str="tmp2" />
                        <Checkbox className='mt-[10px] db:mt-[20px]' str="tmp3" />
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#707070] mt-[25px]"></div>
            </div>
        </div>
    );
}
