import Sidebar from './Sidebar';
import Checkbox from '../../components/Checkbox';

export default function ReceiveSettingPage() {
    const clickChange = () => {
        // BeauTy SMile
    }
    return (
        <div className='dashboard shoplist'>
            <Sidebar active_num={4} />
            <div className="board">
                <div className="mt-[50px] hidden sp:block"></div>
                <h2>受信設定</h2>
                <p className='text-[13px] mt-[10px] font-bold'>運営からのお知らせをメールで受信します。</p>
                <div className="mt-[30px]"></div>
                <Checkbox str='お知らせメールを受信する' />
                <div className="mt-[30px]"></div>
                <Checkbox str='お知らせメールを受信しない' />
                <div className="btn-blue max-w-[300px] h-[52px] mt-[60px] text-[12px]" onClick={index => clickChange}>変更する</div>
            </div>
        </div>
    );
}
