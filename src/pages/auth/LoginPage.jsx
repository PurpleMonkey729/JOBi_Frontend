
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../components/Checkbox';

export default function LoginPage() {
    const navigate = useNavigate();

    const login = () => {
        // Please input the code.
        navigate('/shoplist');
    }

    return (
        <div className='login w-full h-auto pt-[80px] pb-[150px] h-full min-h-[100vh] sp:px-[20px]'>
            <div className="ttl w-[470px] h-[135px] mx-auto text-white text-center pt-[90px] sp:w-[350px] sp:h-[100px] sp:pt-[64px] sp:text-[14px]">
                沖縄生まれ沖縄育ちのバイトマッチングサイト
                <h1 className="hidden">JOBi</h1>
            </div>
            <div className="form w-[476px] mt-[50px] mx-auto pt-[26px] px-[38px] pb-[100px] rounded-[10px] bg-[#f7fafc] shadow-md sp:w-[350px] sp:px-[20px]">
                <h2 className='text-[25px] font-normal text-center text-[#172B4D]'>事業者ログイン画面</h2>
                <p className='mt-[6px] text-center text-[#172B4D]'>アカウトをお持ちの方</p>
                <div className="relative w-[400px] h-[50px] mt-[33px] flex flex-wrap items-stretch shadow-[#bbb] shadow-md rounded-[5px] sp:w-full">
                    <span className="flex items-center whitespace-nowrap rounded-l px-3 py-[0.25rem] text-center">
                        <img src="src/img/icon-user-01.png" alt="icon-user" />
                    </span>
                    <input
                        type="text"
                        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r bg-transparent bg-clip-padding px-3 py-[0.25rem] text-[15px] font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-none focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-none"
                        placeholder="ログインID（メールアドレス）" />
                </div>
                <div className="relative w-[400px] h-[50px] mt-[20px] flex flex-wrap items-stretch shadow-[#bbb] shadow-md rounded-[5px] sp:w-full">
                    <span className="flex items-center whitespace-nowrap rounded-l px-3 py-[0.25rem] text-center">
                        <img src="src/img/icon-lock.png" alt="icon-lock" />
                    </span>
                    <input
                        type="text"
                        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r bg-transparent bg-clip-padding px-3 py-[0.25rem] text-[15px] font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-none focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-none"
                        placeholder="パスワード" />
                </div>
                <p className='mt-[20px] text-[13px] text-[#172B4D]'>
                    パスワードを忘れた方は
                    <a href="/" className='text-[#2C92D2]'>こちら</a>
                </p>
                <p className='h-[30px] mt-[30px] flex items-center'>
                    <Checkbox str='' />
                    <label htmlFor="agree" className=''>
                        <a href="../serviceterm" className='text-[13px] text-[#2C92D2]'>利用規約</a>
                        <span className='text-[13px] text-[#172B4D]'>と</span>
                        <a href="../privacypolicy" className=' text-[13px] text-[#2C92D2]'>プライバシーポリシー</a>
                        <span className='text-[13px] text-[#172B4D]'>に同意しますか？</span>
                    </label>
                </p>
                <div className="btn-gradient w-[367px] h-[71px] mt-[43px] mx-auto text-[18px] sp:w-full before:w-[12px] before:h-[12px]" onClick={login}>ログイン</div>
            </div>
            <p className='mt-[25px] text-white text-center'>新規登録は<a href='/register' style={{textDecoration: "underline"}}>こちら</a></p>
        </div>
    );
}
