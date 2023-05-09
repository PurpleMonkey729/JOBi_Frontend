import RegisterHeader from './RegisterHeader';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../components/Checkbox';

export default function StaffRegistPage() {
  const navigate = useNavigate();

  const clickRegistAccount = () => {
    navigate('/shopregist1');
  }

  return (
    <div className='regist'>
      <RegisterHeader active_num={2} />
      <div className='regist-cont'>
        <h2>事業者の登録を行ってください</h2>
        <p className="mt-[25px] text-center">事業者の基本情報</p>
        <div className="row">
          <div className="left">法人名または個人事業主</div>
          <div className="right">
            <input type="text" placeholder='正式な名前を入力して下さい姓' className='w-[497px]' />
          </div>
        </div>
        <div className="row">
          <div className="left">法人名または個人事業主<br />(カタカナ)</div>
          <div className="right">
            <input type="text" placeholder='カタカナ' className='w-[497px]' />
          </div>
        </div>
        <div className="row">
          <div className="left">代表電話番号</div>
          <div className="right">
            <input type="text" placeholder='電話番号' className='w-[299px]' />
          </div>
        </div>
        <div className="row">
          <div className="left">パスワード</div>
          <div className="right">
            <input type="text" placeholder='パスワード' className='w-[299px]' />
          </div>
        </div>
        <div className="row">
          <div className="left">業種</div>
          <div className="right">
            <select name="" id="" className='w-[299px] h-[100%] pl-[20px]'>
              <option disabled selected>こちらから選択してください</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="left">任せたい業務</div>
          <div className="right">
            <select name="" id="" className='w-[299px] h-[100%] pl-[20px]'>
              <option disabled selected>こちらから選択してください</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="left"></div>
          <div className="right">
            <p className='text-[12px] leading-[2]'>
              ＊ 該当する業務がない場合は「その他」を選択してください。<br />＊ 任せたい業務が複数ある場合は、任せる頻度の高い業務を選択してください。</p>
          </div>
        </div>
        <div className="flex mt-[25px]">
          <div className="w-[242px] h-[45px] flex justify-end items-center">現状の課題</div>
          <div className="ml-[10px]">
            <div className="mt-[7px]"></div>
            <Checkbox str='スタッフの休みが多くシフトの穴が多い' />
            <div className="mt-[7px]"></div>
            <Checkbox str='スタッフが辞めてしまうため人手不足(予定含む)' />
            <div className="mt-[7px]"></div>
            <Checkbox str='採用をしているが集まらない' />
            <div className="mt-[7px]"></div>
            <Checkbox str='繁忙期など一時的に人手がほしい' />
            <div className="mt-[7px]"></div>
            <Checkbox str='派遣利用中だが、料金が高いと感じる' />
            <div className="mt-[7px]"></div>
            <Checkbox str='人手不足に関して課題を感じていない' />
            <div className="mt-[7px]"></div>
            <Checkbox str='その他' />
            <div className="mt-[7px]"></div>
          </div>
        </div>
        <div className="row">
          <div className="left">郵便番号</div>
          <div className="right">
            <input type="text" placeholder='郵便番号' className='w-[299px]' />
          </div>
        </div>
        <div className="row">
          <div className="left">都道府県</div>
          <div className="right">
            <select name="" id="" className='w-[299px] h-[100%] pl-[20px]'>
              <option disabled selected>こちらから選択してください</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="left">市区町村名</div>
          <div className="right">
            <input type="text" placeholder='市区町村名' className='w-[498px]' />
          </div>
        </div>
        <div className="row">
          <div className="left">町域・番地・建物名</div>
          <div className="right">
            <input type="text" placeholder='町域・番地・建物名' className='w-[498px]' />
          </div>
        </div>
        <div className="row">
          <div className="left">適格請求番号をお持ちの方</div>
          <div className="right flex items-center">
            <input type="text" placeholder='番号（10桁）' className='w-[250px] mr-[10px]' />
            <Checkbox str='適格請求番号を持っていない' />
          </div>
        </div>
        <div className='btn-blue mt-[50px] mx-auto' onClick={clickRegistAccount}>事業者を登録する</div>
      </div>
    </div>
  );
}
