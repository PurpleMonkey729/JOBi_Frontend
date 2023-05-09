import Sidebar from './Sidebar';
import clsx from 'clsx';
import Pagination from '../../components/Pagination';

export default function StaffRegistPage() {
    const tableData = [
        { id: "0001", userId: "tempo001", name: "那覇新都心店" },
        { id: "0002", userId: "tempo002", name: "国際通り店" },
    ]

    const clickLogin = index => {
        // Please insert code.
    }

    return (
        <div className='dashboard shoplist'>
            <Sidebar active_num={0} />
            <div className="board">
                <h2>すべての店舗情報一覧</h2>
                <p className='text-[13px] mt-[10px] font-bold'>店舗一覧を表示しています。「ログイン」ボタンからはパスワード無しで入れます。</p>
                <h3 className='mt-[50px]'>店舗一覧</h3>
                <div className='flex items-center h-[52px]'>
                    <input type="text" className='w-[586px] h-full border-[1px] text-[13px] pl-[10px]' placeholder='店舗名で検索' />
                    <div className='w-[112px] h-[42px] bg-[#e5e5e5] flex justify-center items-center text-[13px] ml-[10px] hover:cursor-pointer hover:bg-[#bbb] rounded-[5px]'>検索</div>
                </div>
                <p className='text-[13px] mt-[10px] font-bold'>複数の単語で検索できます。入力されたいずれかの単語を含む店舗を一覧表示します。</p>
                <div className="mt-[75px] rounded-[10px] shadow-md">
                    <div className='flex justify-between items-center my-auto px-[50px] h-[75px]'>
                        <Pagination total={4} current={0} />
                        <div className="btn-purple w-[120px] h-[40px] text-[13px]">店舗を追加</div>
                    </div>
                    <table className='w-full text-center'>
                        <tr className='bg-[#F1F3F9] w-full h-[40px]'>
                            <th className='w-[25%] text-[12px] text-[#8898AA]'>店舗ID</th>
                            <th className='w-[15%] text-[12px] text-[#8898AA]'>管理用ID</th>
                            <th className='w-[15%] text-[12px] text-[#8898AA]'>店舗名</th>
                            <th className='w-[45%]'></th>
                        </tr>
                        {
                            tableData.map((item, index) => (<tr className={clsx('w-full h-[56px]', { 'bg-[#F7FAFC]': index % 2 === 1 })}>
                                <td className='text-[13px] font-bold'>{item.id}</td>
                                <td className='text-[13px] font-bold'>{item.userId}</td>
                                <td className='text-[13px] font-bold'>{item.name}</td>
                                <td>
                                    <div className="btn-gradient w-[178px] h-[34px] my-auto ml-auto mr-[30px] text-[12px]" onClick={index => clickLogin}>ログイン</div>
                                </td>
                            </tr>))
                        }
                    </table>
                    <div className='w-full h-[30px]'></div>
                </div>
            </div>
        </div>
    );
}
