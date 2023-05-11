import './index.css'
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function DashboardSidebar(props) {
    const [isShowMenu, setShowMenu] = useState('false');

    const navigate = useNavigate();

    const goBuisness = () => {
        navigate('../home');
    }

    const logout = () => {
        // Please insert code for logout.
        navigate('../login');
    }

    const toggleMenu = () => {
        setShowMenu(!isShowMenu);
    }

    return (
        <>
            <div className="btn-ham" onClick={toggleMenu}>
                {isShowMenu ?
                '+' :
                '~'
}
            </div>
            <div className={clsx("dashboard-sidebar", {"show-menu":!isShowMenu})}>
                <div className="ttl w-[225px] h-[73px] mx-auto">
                    <h1 className='hidden'>JOBi</h1>
                </div>
                <p className='mt-[20px] w-[225px] mx-auto text-[13px] font-bold'>ダッシュボード</p>
                <nav className='mt-[40px] w-[225px] mx-auto'>
                    <div className={clsx('item', { active: props.active_num === 0 })}>店舗一覧</div>
                    <div onClick={goBuisness} className={clsx('item', { active: props.active_num === 1 })}>事業情報</div>
                    <div className={clsx('item', { active: props.active_num === 2 })}>利用明細</div>
                    <div className={clsx('item', { active: props.active_num === 3 })}>労働者名簿</div>
                    <div className={clsx('item', { active: props.active_num === 4 })}>受信設定</div>
                    <div onClick={logout} className='item'>ログアウト</div>
                </nav>
            </div>
        </>
    );
}
