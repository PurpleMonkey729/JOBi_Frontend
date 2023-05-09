import Sidebar from './Sidebar';
import clsx from 'clsx';
import Pagination from '../../components/Pagination';

export default function BusinessShopRatingPage() {
    const rating = 2.5;
    const rating_img_str = "rating-" + rating * 10 + ".png";
    const tableData = [
        { name: "大変よい職場です。", date: "2023/04/23" },
        { name: "自分には難しいと思いました。", date: "2023/04/23" },
        { name: "担当者の方が優しく教えてくれました。", date: "2023/04/23" },
        { name: "最高です！", date: "2023/04/23" },
    ]

    return (
        <div className='business'>
            <Sidebar active_num={7} />
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
                    <h2>店舗評価</h2>
                    <p className='mt-[15px]'>ワーカーが評価したレビューを確認できます。</p>
                </div>
                <div className="cont h-[1024px] mt-[32px] py-[39px] relative">
                    <div className="pb-[13px] border-b-[1px] border-[#707070] mx-[45px]">GOOD数：100件　　BAD数：4件</div>
                    <div className="flex items-end">
                        <img src={'src/img/' + rating_img_str} alt="" className='ml-[45px]' />
                        <div className="font-bold text-[22px] ml-[10px]">{rating}</div>
                    </div>
                    <div className="text-center">超優良店舗です。</div>
                    <div className='flex justify-between items-center mt-[50px] mx-[45px] pb-[10px] border-b-[1px] border-[#707070]'>
                        <div className="">ワーカーからのコメント</div>
                        <Pagination total={1} current={0} />
                    </div>
                    <table className='w-full'>
                        {
                            tableData.map((item, index) => (<tr className={clsx('w-full h-[53px]', { 'bg-[#F7FAFC]': index % 2 === 1 })}>
                                <td className='pl-[45px]'>{item.name}</td>
                                <td className='pr-[45px] text-right'>{item.date}</td>
                            </tr>))
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}
