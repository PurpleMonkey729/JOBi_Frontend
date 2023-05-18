import Sidebar from './Sidebar';

export default function UseDetailPage() {
    const tableData = [
        { id: "0001", userId: "tempo001", name: "那覇新都心店", price1: "20,000円", price2: "5,000円", price3: "25,000円" },
        { id: "0002", userId: "tempo002", name: "国際通り店", price1: "20,000円", price2: "5,000円", price3: "25,000円" },
    ]

    const clickPrev = () => {
        // BTSM!!!
    }

    const clickNext = () => {
        // BTSM!!!
    }

    return (
        <div className='dashboard shoplist'>
            <Sidebar active_num={2} />
            <div className="board">
                <div className="mt-[50px] hidden sp:block"></div>
                <h2>すべての店舗情報一覧</h2>
                <p className='text-[13px] mt-[10px] font-bold'>店舗で利用した明細が全て表示されます。</p>
                <div className="flex items-center mt-[40px]">
                    <div className="w-[35px] h-[35px] border-[#bbb] border-[1px] rounded-full text-[#bbb] flex justify-center items-center hover:cursor-pointer relative" onClick={clickPrev}><div className="arrow-left w-[12px] h-[7px]"></div></div>
                    <div className="mx-[20px]">2023年4月分</div>
                    <div className="w-[35px] h-[35px] border-[#bbb] border-[1px] rounded-full text-[#bbb] flex justify-center items-center mr-[10px] hover:cursor-pointer relative" onClick={clickNext}><div className="arrow-right w-[12px] h-[7px]"></div></div>
                </div>
                <div className="overflow-auto">
                    <table className='w-[900px]'>
                        <tr className='bg-[#F1F3F9] w-full h-[40px] text-left'>
                            <th className='text-[12px] text-[#8898AA] relative'>
                                店舗ID
                                <div className="arrow-up w-[7px] h-[4px] right-[20px] top-[13px]"></div>
                                <div className="arrow-down w-[7px] h-[4px] right-[20px] bottom-[13px]"></div>
                            </th>
                            <th className='text-[12px] text-[#8898AA] relative'>
                                管理用ID
                                <div className="arrow-up w-[7px] h-[4px] right-[20px] top-[13px]"></div>
                                <div className="arrow-down w-[7px] h-[4px] right-[20px] bottom-[13px]"></div>
                            </th>
                            <th className='text-[12px] text-[#8898AA]'>店舗名</th>
                            <th className='text-[12px] text-[#8898AA]'>支払い給与</th>
                            <th className='text-[12px] text-[#8898AA]'>支払い手数料</th>
                            <th className='text-[12px] text-[#8898AA]'>合計金額</th>
                        </tr>
                        {
                            tableData.map((item, index) => (<tr>
                                <td className='text-[13px] font-bold'>{item.id}</td>
                                <td className='text-[13px] font-bold'>{item.userId}</td>
                                <td className='text-[13px] font-bold'>{item.name}</td>
                                <td className='text-[13px] font-bold'>{item.price1}</td>
                                <td className='text-[13px] font-bold'>{item.price2}</td>
                                <td className='text-[13px] font-bold'>{item.price3}</td>
                            </tr>))
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}
