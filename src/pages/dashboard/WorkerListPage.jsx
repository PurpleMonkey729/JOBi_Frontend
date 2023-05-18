import Sidebar from './Sidebar';

export default function WorkerListPage() {
    const people = [
        { photo: 'src/img/photo.png', name: '田中みなみ' },
        { photo: 'src/img/photo.png', name: '鈴木健介' },
        { photo: 'src/img/photo.png', name: '小出政宗' },
        { photo: 'src/img/photo.png', name: '田中みなみ' },
        { photo: 'src/img/photo.png', name: '田中みなみ' },
        { photo: 'src/img/photo.png', name: '田中みなみ' },
        { photo: 'src/img/photo.png', name: '田中みなみ' },
        { photo: 'src/img/photo.png', name: '田中みなみ' },
    ];

    return (
        <div className='dashboard shoplist'>
            <Sidebar active_num={3} />
            <div className="board">
                <div className="mt-[50px] hidden sp:block"></div>
                <h2>労働者名簿</h2>
                <p className='text-[13px] mt-[10px] font-bold'>これまでのワーカーを表示しています。</p>
                <div className="flex flex-wrap pt-[50px] px-[50px] db:block">
                    {people.map(item=>
                        <div className='flex items-center mb-[43px] w-[30%] min-w-[160px] db:w-full'>
                            <img src={item.photo} alt="photo" />
                            <div className="ml-[15px]">{item.name}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
