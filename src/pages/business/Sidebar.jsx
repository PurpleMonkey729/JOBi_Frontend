import './index.css'
import clsx from 'clsx';
// import { useNavigate } from 'react-router-dom';

export default function BusinessSidebar(props) {
    // const navigate = useNavigate();
    const link_info_array = [
        { name: 'ホーム', url: 'businesshome', icon: 'icon-home' },
        { name: 'お知らせ', url: 'businessnotice', icon: 'icon-mail' },
        { name: 'ワーカー', url: 'businessworker', icon: 'icon-package' },
        { name: '求人一覧', url: 'businesshiringlist', icon: 'icon-file' },
        { name: 'メッセージ', url: 'businessmessage', icon: 'icon-message' },
        { name: '出退勤QRコード', url: 'businessqrcode', icon: 'icon-calendar' },
        { name: 'ワーカー評価', url: 'businessworkerrating', icon: 'icon-user-02' },
        { name: '店舗評価', url: 'businessshoprating', icon: 'icon-settings' },
        { name: '利用明細', url: 'businessusagedetail', icon: 'icon-file' },
    ]

    const clickItem = index => {
        // navigate('../' + link_info_array.at(index).url);
    }

    return (
        <div className="business-sidebar w-[342px] pt-[62px] pb-[62px]">
            <div className="ttl w-[225px] h-[73px] ml-[45px]">
                <h1 className='hidden'>JOBi</h1>
            </div>
            {/* <p className='mt-[20px] w-[225px] ml-[45px] font-bold'>事業情報 ＞ {link_info_array.at(props.active_num).name}</p> */}
            <nav className='mt-[40px] w-[225px] ml-[45px]'>
                {link_info_array.map((item, index) =>
                    <div className={clsx('item', { active: props.active_num === index })} onClick={()=>clickItem(index)}>
                        <img src={'src/img/'+ item.icon + '.png'} alt={item.icon} />
                        {item.name}
                    </div>
                )}
            </nav>
        </div>
    );
}
