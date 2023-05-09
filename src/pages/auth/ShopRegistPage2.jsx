import RegisterHeader from './RegisterHeader';
import { useNavigate } from 'react-router-dom';

export default function ShopRegistPage2() {
  const navigate = useNavigate();

  const gotologin = () => {
    navigate('/login');
  }
  return (
    <div className='regist'>
      <RegisterHeader active_num={3} />
      <div className='regist-cont'>
        <h2>JOBiを利用する準備が完了しました！</h2>
        <p className="mt-[10px] text-center">求人掲載の流れ</p>
        <p className='mt-[10px] leading-[2]'>スムーズに求人を掲載していただけるよう、ひな形をご用意しております。<br />弊社でご用意したひな形を用いて求人を掲載するまでの流れをご紹介いたします。</p>
        <h2 className='mt-[30px]'>ひな形の編集〜求人公開までの流れ</h2>
        <p className='mt-[20px] leading-[2]'>
          1.ログイン後に表示される画面にある青色の「ログイン」を押します。<br />2.画面左側にある青色の「新規募集」を押します。<br />3.赤枠で囲っている「ひな形のタイトル」を押します。<br />4.赤枠で囲っている「編集する」を押します。<br />5.編集が必要な部分の加筆修正を行なった上で「入力した内容で更新」を押します。<br />7.開始・終了時間や、時給・交通費などを設定し、「求人内容を確認する」を押します。<br />8.内容を確認のうえ、「求人を公開する」を押せば、求人掲載は完了です。<br />マッチング（ワーカーからのお申し込み）以降の流れについては、ガイドブック<br />その他ご不明な点やご意見がありましたら、管理画面左メニューの下部にあるご質問からお問合せ窓口をご活用ください。
        </p>
        <div className='btn-blue mt-[50px] mx-auto mb-[100px]' onClick={gotologin}>ログイン画面へ</div>
      </div>
    </div>
  );
}
