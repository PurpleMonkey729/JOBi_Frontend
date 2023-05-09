import RegisterHeader from './RegisterHeader';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../components/Checkbox';

export default function ShopRegistPage1() {
  const navigate = useNavigate();

  const clickRegistShop = () => {
    navigate('/shopregist2');
  }

  return (
    <div className='regist'>
      <RegisterHeader active_num={3} />
      <div className='regist-cont'>
        <h2>店舗の登録を行ってください</h2>
        <p className="mt-[25px] text-center">実際のワーカーの勤務先(店舗または事業所等)の情報を入力してください。</p>
        <p className='mt-[50px] font-bold text-center'>店舗の基本情報</p>
        <div className="row">
          <div className="left"></div>
          <div className="right flex items-center">
            <Checkbox str='事業者の基本情報を反映する' />
          </div>
        </div>
        <div className="row">
          <div className="left">店舗名</div>
          <div className="right">
            <input type="text" placeholder='店舗名' className='w-[497px]' />
          </div>
        </div>
        <div className="flex mt-[10px]">
          <div className="w-[242px]"></div>
          <div className="ml-[10px]">
            <p className='text-gray-600 text-[12px]'>
              ワーカー側のアプリに表示される勤務先名となります。<br />店舗が存在しない場合は、法人名または屋号を入力してください。</p>
          </div>
        </div>
        <div className="row">
          <div className="left">電話番号</div>
          <div className="right">
            <input type="text" placeholder='電話番号' className='w-[299px]' />
          </div>
        </div>
        <p className='mt-[50px] text-center'>店舗の所在地</p>
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
            <input type="text" placeholder='市区町村名' className='w-[497px]' />
          </div>
        </div>
        <div className="row">
          <div className="left">町域・番地・建物名</div>
          <div className="right">
            <input type="text" placeholder='町域・番地・建物名' className='w-[498px]' />
          </div>
        </div>
        <div className='btn-blue mt-[50px] mx-auto mb-[100px]' onClick={clickRegistShop}>店舗を登録する</div>
      </div>
    </div>
  );
}
