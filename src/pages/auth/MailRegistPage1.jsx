import RegisterHeader from './RegisterHeader';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../components/Checkbox';

export default function MailRegistPage1() {
  const navigate = useNavigate();

  const registEmail = () => {
    // Please input the code.
    navigate('/mailregist2');
  }

  return (
    <div className='regist'>
      <RegisterHeader active_num={0} />
      <div className="regist-cont mailregist1">
        <h2>メールアドレスの登録</h2>
        <p className='mt-[13px] mb-[30px] text-center'>申し込みの前に以下を確認してください。<br />事業者としての実態に関して</p>
        <p className='mt-[10px] relative pl-[25px] before:top-[0] before:bottom-[0] before:my-[auto] before:left-[0px] before:absolute before:content-[""] before:w-[15px] before:h-[15px] before:rounded-[15px] before:bg-[#2c92d2]'>法人: 登記が行われている必要があります。</p>
        <p className='mt-[10px] relative pl-[25px] before:top-[0] before:bottom-[0] before:my-[auto] before:left-[0px] before:absolute before:content-[""] before:w-[15px] before:h-[15px] before:rounded-[15px] before:bg-[#2c92d2]'>個人事業主: 開業届を税務署等に提出している必要があります。</p>
        <p className="mt-[20px]">確認のため、弊社からご連絡を差し上げることがございます。</p>
        <textarea className='mt-[30px] px-[24px] py-[12px] w-full h-[258px] text-[12px]' name="" id="" value={"掲載をお断りしている業務に関して\n職業安定法第32条の11に則り、建設業務（建物の建築、内装工事、ハウスクリーニングなど）、港湾運送業務（船舶や港湾倉庫などで貨物を取り扱う仕事）の求人の掲載はお断りしております。\nマッチングの仕組みに関して\nJOBiは掲載された求人にワーカーが「面接なし」でマッチングします。\nマッチングは、特定の条件を満たす場合のみキャンセル可能です。\nまた、求人概要に必要な条件を記載することで、業務に適したワーカーが集まりやすくなります。\nサービス利用料\nサービス利用料は日当と交通費の30％になります。\n雇用契約に関して\nワーカー・事業者の間にて、直接雇用契約を結んでいただきます。\n労働者派遣事業（JOBiが雇用するワーカーを事業者に派遣するもの）ではありません。\n利用規約・利用契約条項\n「Timee事業者利用規約」「Timee利用契約条項」をご確認ください。\nプライバシーポリシー\nご送信いただくメールアドレスその他の個人情報については、必要に応じた弊社担当者からのご連絡や弊社サービス又は弊社セミナーに関するご案内をお送りする等の目的で、厳正な管理の下、プライバシーポリシーに従って利用させていただきます。\n必要となる営業許認可等について\n事業を行うにあたり適切な営業許認可等を取得していない場合はご利用いただけません。業種ごとに必要な営業許認可等の一例は下記リンクよりご確認いただけます。\n営業許認可等一覧（※一例）掲載をお断りしている業務に関して\n職業安定法第32条の11に則り、建設業務（建物の建築、内装工事、ハウスクリーニングなど）、港湾運送業務（船舶や港湾倉庫などで貨物を取り扱う仕事）の求人の掲載はお断りしております。\nマッチングの仕組みに関して\nJOBiは掲載された求人にワーカーが「面接なし」でマッチングします。\nマッチングは、特定の条件を満たす場合のみキャンセル可能です。\nまた、求人概要に必要な条件を記載することで、業務に適したワーカーが集まりやすくなります。\nサービス利用料\nサービス利用料は日当と交通費の30％になります。\n雇用契約に関して\nワーカー・事業者の間にて、直接雇用契約を結んでいただきます。\n労働者派遣事業（JOBiが雇用するワーカーを事業者に派遣するもの）ではありません。\n利用規約・利用契約条項\n「Timee事業者利用規約」「Timee利用契約条項」をご確認ください。\nプライバシーポリシー\nご送信いただくメールアドレスその他の個人情報については、必要に応じた弊社担当者からのご連絡や弊社サービス又は弊社セミナーに関するご案内をお送りする等の目的で、厳正な管理の下、プライバシーポリシーに従って利用させていただきます。\n必要となる営業許認可等について\n事業を行うにあたり適切な営業許認可等を取得していない場合はご利用いただけません。業種ごとに必要な営業許認可等の一例は下記リンクよりご確認いただけます。\n営業許認可等一覧（※一例）"} />
        <div className="mt-[10px]"></div>
        <Checkbox str="上記の各事項に同意する" />
        <p className='mt-[25px] text-center'>事業形態</p>
        <div className='h-[30px] mt-[20px] flex justify-center items-center'>
          <input type="radio" id="cor" name="fav_language" value="HTML" className='w-[30px] h-[30px] mr-[10px]' />
          <label htmlFor='cor' className='mr-[20px]'>法人</label>
          <input type="radio" id="per" name="fav_language" value="CSS" className='w-[30px] h-[30px] mr-[10px]' />
          <label htmlFor="per">個人事業主</label>
        </div>
        <p className="mt-[50px] font-bold text-center">
          登録するメールアドレス
          <div className='inline-flex text-[12px] text-[red]'>
            *必須
          </div>
        </p>
        <input type="text" name="" id="" className='w-full h-[45px] mt-[15px] text-[16px] px-[10px] py-[3px] text-center' placeholder='メールアドレス' />
        <div className="btn-gradient w-[367px] h-[71px] mt-[57px] mx-auto text-[18px] sp:w-[350px] before:w-[12px] before:h-[12px]" onClick={registEmail}>アカウントの開設をはじめる</div>
      </div>
    </div>
  );
}
