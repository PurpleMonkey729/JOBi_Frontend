import './index.css'
import clsx from 'clsx';

export default function RegisterHeader(props) {
    return (
        <div className="regist-header w-full max-w-[752px] pt-[50px] mx-auto sp:px-[20px]">
            <div className="ttl w-[355px] h-[115px] mx-auto">
                <h1 className='hidden'>JOBi</h1>
            </div>
            <div className="text-center mt-[40px] text-[32px] text-bold bg-[#2c92d2] text-white sp:text-[25px]">事業者向けアカウント開設</div>
            <nav className='flex justify-between w-full mt-[30px]'>
                <div className={clsx('item', { active: props.active_num === 0 })}>メールの登録</div>
                <div className={clsx('item', { active: props.active_num === 1 })}>アカウントの登録</div>
                <div className={clsx('item', { active: props.active_num === 2 })}>事業者の登録</div>
                <div className={clsx('item', { active: props.active_num === 3 })}>店舗の登録</div>
            </nav>
        </div>
    );
}
