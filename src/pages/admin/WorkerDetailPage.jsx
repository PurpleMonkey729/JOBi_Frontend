import Sidebar from './Sidebar';
import clsx from 'clsx';
import Checkbox from '../../components/Checkbox';

export default function WorkerDetailPage() {
    return (
        <div className='dashboard dbi'>
            <Sidebar active_num={1} />
            <div className="board">
                <div className="mt-[50px] hidden sp:block"></div>
                <h2>事業情報</h2>
                <p className='text-[13px] mt-[10px] font-bold'>アカウントを作成したときの情報が表示されます。</p>
                <div className="form">
                    <div className="row">
                        <div className="left">姓</div>
                        <div className="right">
                            <input type="text" placeholder='姓' className='w-[243px]' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">名</div>
                        <div className="right">
                            <input type="text" placeholder='名' className='w-[243px]' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">ログイン用メールアドレス</div>
                        <div className="right sp:text-center">kimura@minepro.co.jp(編集不可)</div>
                    </div>
                    <p className='text-center mt-[41px] text-[16px]'>事業者の基本情報</p>
                    <div className="row">
                        <div className="left">法人名または個人事業主</div>
                        <div className="right">
                            <input type="text" placeholder='正式な名前を入力して下さい' className='w-full' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">法人名または個人事業主(カタカナ)</div>
                        <div className="right">
                            <input type="text" placeholder='カタカナ' className='w-full' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">代表電話番号</div>
                        <div className="right">
                            <input type="text" placeholder='電話番号' className='w-[299px]' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">代表電話番号</div>
                        <div className="right">
                            <div className="select">
                                <select name="" id="">
                                    <option value="">こちらから選択してください</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">任せたい業務</div>
                        <div className="right">
                            <div className="select">
                                <select name="" id="">
                                    <option value="">こちらから選択してください</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">任せたい業務</div>
                        <div className="right text-[12px]">
                            ＊ 該当する業務がない場合は「その他」を選択してください。<br />＊ 任せたい業務が複数ある場合は、任せる頻度の高い業務を選択してください。
                        </div>
                    </div>
                    <div className="row row-big">
                        <div className="left">現状の課題</div>
                        <div className="right">
                            <Checkbox str='スタッフの休みが多くシフトの穴が多い' />
                            <div className="mt-[5px]"></div>
                            <Checkbox str='スタッフが辞めてしまうため人手不足(予定含む)' />
                            <div className="mt-[5px]"></div>
                            <Checkbox str='採用をしているが集まらない' />
                            <div className="mt-[5px]"></div>
                            <Checkbox str='繁忙期など一時的に人手がほしい' />
                            <div className="mt-[5px]"></div>
                            <Checkbox str='派遣利用中だが、料金が高いと感じる' />
                            <div className="mt-[5px]"></div>
                            <Checkbox str='人手不足に関して課題を感じていない' />
                            <div className="mt-[5px]"></div>
                            <Checkbox str='その他' />
                        </div>
                    </div>
                    <p className='text-center mt-[41px] text-[16px]'>事業者の所在地</p>
                    <div className="row">
                        <div className="left">郵便番号</div>
                        <div className="right">
                            <input type="text" placeholder='郵便番号' className='w-[299px]' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">都道府県</div>
                        <div className="right">
                            <div className="select">
                                <select name="" id="">
                                    <option value="">こちらから選択してください</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">市区町村名</div>
                        <div className="right">
                            <input type="text" placeholder='市区町村名' className='w-full' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">町域・番地・建物名</div>
                        <div className="right">
                            <input type="text" placeholder='町域・番地・建物名' className='w-full' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">適格請求番号をお持ちの方</div>
                        <div className="right flex items-center sp:block">
                            <input type="text" placeholder='番号（10桁）' className='w-[200px]' />
                            <div className='ml-[24px] sp:ml-0 sp:mt-[10px]'></div>
                            <Checkbox str='適格請求番号を持っていない' />
                        </div>
                    </div>
                </div>
                <div className="btn-blue max-w-[300px] h-[52px] mt-[60px] mx-auto text-[12px]" onClick={index => clickChange}>変更する</div>
            </div>
        </div>
    );
}
