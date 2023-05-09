import RegisterHeader from './RegisterHeader';
import { useNavigate } from 'react-router-dom';

export default function MailRegistPage2() {
    const navigate = useNavigate();

    const signMail = () => {
        // Please insert mail.
        navigate('/accountRegist');
    };
    return (
        <div className='regist'>
            <RegisterHeader active_num={0} />
            <div className='regist-cont'>
                <h2>送信されたメールをご確認ください</h2>
                <p className="mt-[20px] text-center"><span className='font-bold'>supporter@minepro.co.jp</span>から "前の画面で入力されたメールアドレス"に認証用URLを送信しました。メールが届かない場合は入力されたメールアドレスが間違っている可能性があります。こちらから再度メールアドレスをご登録ください。</p>
                <div className='btn-blue mt-[100px] mx-auto mb-[100px]' onClick={signMail}>メールを確認</div>
            </div>
        </div>
    );
}
