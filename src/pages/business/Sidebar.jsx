import './index.css'
import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BusinessSidebar(props) {
    const [isShowMenu, setShowMenu] = useState('false');

    const toggleMenu = () => {
        setShowMenu(!isShowMenu);
    }
    const navigate = useNavigate();
    const link_info_array = [
        { name: 'ホーム', url: 'home', icon: 'icon-home' },
        { name: 'お知らせ', url: 'notice', icon: 'icon-mail' },
        { name: 'ワーカー', url: 'worker', icon: 'icon-package' },
        { name: '求人一覧', url: 'hiringlist', icon: 'icon-file' },
        { name: 'メッセージ', url: 'message', icon: 'icon-message' },
        { name: '出退勤QRコード', url: 'qrcode', icon: 'icon-calendar' },
        { name: 'ワーカー評価', url: 'workerrating', icon: 'icon-user-02' },
        { name: '店舗評価', url: 'shoprating', icon: 'icon-settings' },
        { name: '利用明細', url: 'usagedetail', icon: 'icon-file' },
    ]

    const clickItem = index => {
        navigate('../' + link_info_array.at(index).url);
    }

    return (
        <>
            <div className="btn-ham" onClick={toggleMenu}>
                {isShowMenu ?
                    '+' :
                    'X'
                }
            </div>
            <div className={clsx("business-sidebar", {"show-menu":!isShowMenu})}>
                <div className="ttl w-[225px] h-[73px] ml-[45px] sp:mx-auto">
                    <h1 className='hidden'>JOBi</h1>
                </div>
                {/* <p className='mt-[20px] w-[225px] ml-[45px] font-bold'>事業情報 ＞ {link_info_array.at(props.active_num).name}</p> */}
                <nav className='mt-[40px] w-[225px] ml-[45px] sp:mx-auto'>
                    {link_info_array.map((item, index) =>
                        <div className={clsx('item', { active: props.active_num === index })} onClick={() => clickItem(index)}>
                            <img src={'src/img/' + item.icon + '.png'} alt={item.icon} />
                            {item.name}
                        </div>
                    )}
                </nav>
            </div>
        </>
    );
}
