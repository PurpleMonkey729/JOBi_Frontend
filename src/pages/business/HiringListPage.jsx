import Sidebar from './Sidebar';
import clsx from 'clsx';
import Pagination from '../../components/Pagination';
import { useNavigate } from 'react-router-dom';

export default function BusinessHiringListPage() {
    const navigate = useNavigate();
    
    const tableData = [
        { date: "2023/04/25", time: "11:00~17:00", name: "＜ホールスタッフ募集！＞やよい軒 北谷美浜店　未経験者歓迎！", number: "3/3" },
        { date: "2023/04/27", time: "11:00~17:00", name: "＜ホールスタッフ募集！＞やよい軒 北谷美浜店　未経験者歓迎！", number: "2/5" },
    ]

    const goHiringNew = () => {
        navigate('../hiringnew');
    }

    const goQRCode = () => {
        navigate('../grcode');
    }

    const goModifyRequest = () => {
        navigate('../modifyrequest');
    }
    
    const goWorkerRating = () => {
        navigate('../workerrating');
    }
    
    const goMessage = () => {
        navigate('../message');
    }

    const goUsageDetail = () => {
        navigate('../hiringnew');
    }

    return (
        <div className='business hiring-list'>
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
                    <h2>求人一覧</h2>
                    <p className='mt-[15px]'>お好きなメニューを選んでください。</p>
                    <div className="btn-box">
                        <div onClick={goHiringNew} className="btn">新規募集</div>
                        <div onClick={goQRCode} className="btn">出退勤<br />QRコード表示</div>
                        <div onClick={goModifyRequest} className="btn">修正依頼</div>
                        <div onClick={goWorkerRating} className="btn">ワーカー評価</div>
                        <div onClick={goMessage} className="btn">メッセージ</div>
                        <div onClick={goUsageDetail} className="btn">利用明細</div>
                    </div>
                    <p className='mt-[30px] flex justify-between'>
                        <p>掲出中の求人一覧</p>
                        <p className='text-[11px] underline'>過去の求人一覧はこちら</p>
                    </p>
                </div>
                <div className="cont mt-[10px] pb-[30px]">
                    <div className='flex justify-between items-center my-auto px-[50px] h-[75px]'>
                        <Pagination total={1} current={0} />
                    </div>
                    <table className='w-full'>
                        <tr className='bg-[#F1F3F9] text-left w-full h-[40px]'>
                            <th className='text-[12px] text-[#8898AA] pl-[30px]'>日付</th>
                            <th className='text-[12px] text-[#8898AA] pl-[10px]'>時間</th>
                            <th className='text-[12px] w-[190px] text-[#8898AA] pl-[10px]'>店舗名</th>
                            <th className='text-[12px] text-[#8898AA] pl-[10px]'>募集定員</th>
                            <th></th>
                        </tr>
                        {
                            tableData.map((item, index) => (<tr className={clsx('w-full h-[87px]', { 'bg-[#F7FAFC]': index % 2 === 1 })}>
                                <td className=' font-bold pl-[30px]'>{item.date}</td>
                                <td className=' font-bold pl-[10px]'>{item.time}</td>
                                <td className='text-[11px] font-bold pl-[10px]'>{item.name}</td>
                                <td className=' font-bold pl-[10px]'>{item.number}</td>
                                <td className='h-[87px] flex justify-center items-center'>
                                    <div className='flex'>
                                        <div className="btn-purple  w-[52px] h-[50px] text-[12px] mr-[10px]">招待</div>
                                        <div className="btn-purple  w-[65px] h-[50px] text-[12px] mr-[10px]">ワーカー</div>
                                        <div className="btn-purple  w-[80px] h-[50px] text-[12px] mr-[10px]">出退勤<br />QRコード表示</div>
                                        <div className=" border-[1px] bg-[#172B4D] rounded-[5px] w-[45px] h-[50px] flex justify-center items-center text-[9px] text-white hover:cursor-pointer hover:opacity-50">修正依頼</div>
                                    </div>
                                </td>
                            </tr>))
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}
