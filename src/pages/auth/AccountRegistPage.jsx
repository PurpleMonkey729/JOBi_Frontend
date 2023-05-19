import RegisterHeader from './RegisterHeader';
import { useNavigate } from 'react-router-dom';

export default function AccountRegistPage() {
  const navigate = useNavigate();

  const clickRegistAccount = () => {
    navigate('/staffregist');
  }

  return (
    <div className='regist'>
      <RegisterHeader active_num={1} />
      <div className='regist-cont'>
        <h2>アカウントの登録を行ってください</h2>
        <p className="mt-[25px] font-bold text-center">アカウント情報</p>
        <div className="row">
          <div className="left">姓</div>
          <div className="right">
            <input type="text" placeholder='姓' className='text-center w-[243px]' />
          </div>
        </div>
        <div className="row">
          <div className="left">名</div>
          <div className="right">
            <input type="text" placeholder='名' className='text-center w-[243px]' />
          </div>
        </div>
        <div className="row">
          <div className="left">ログイン用メールアドレス</div>
          <div className="right">
            <p className='h-[100%] pl-[20px] flex items-center sp:justify-center'>kimura@minepro.co.jp(編集不可)</p>
          </div>
        </div>
        <div className="row">
          <div className="left">パスワード</div>
          <div className="right">
            <input type="text" placeholder='パスワード' className='w-[299px]' />
            <div className='h-[100%] inline-flex items-center text-[red] pl-[10px] sp:block sp:text-center'>8文字以上（半角英数字）</div>
          </div>
        </div>
        <div className="row">
          <div className="left"></div>
          <div className="right">
            <div className="text-[red] sp:text-center">以下の条件を満たすパスワードを入力してください。</div>
            <div className="mt-[10px] flex db:block sp:justify-center db:ml-[30px]">
              <div className="">
                <div className="pw-case pw-case-active">最低8文字以上</div>
                <div className="pw-case">英大文字を含む</div>
              </div>
              <div>
                <div className="pw-case">水資を含む</div>
                <div className="pw-case">特殊文字(!?#@)を含む</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="left">パスワード（確認用）</div>
          <div className="right">
            <input type="text" placeholder='パスワード' className='w-[299px]' />
          </div>
        </div>
        <div className='btn-blue  my-[50px] mx-auto' onClick={clickRegistAccount}>アカウントを登録する</div>
      </div>
    </div>
  );
}
