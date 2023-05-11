import clsx from 'clsx';
import { useState } from 'react';

export default function Pagination(props) {
    const page_num_arry = [];
    for (let i = 0; i < props.total; i++) {
        page_num_arry.push(i);
    }

    const [cur_page_num, setCurPageNum] = useState(props.current);

    const clickPageNum = index => {
        setCurPageNum(index);
    }

    const clickPrevPage = () => {
        if (cur_page_num !== 0)
            setCurPageNum(cur_page_num - 1);
    }

    const clickNextPage = () => {
        if (cur_page_num !== props.total - 1)
            setCurPageNum(cur_page_num + 1);
    }

    return (
        <div className="flex pagination">
            <div className="w-[35px] h-[35px] border-[#bbb] border-[1px] rounded-full text-[#bbb] flex justify-center items-center mr-[10px] hover:cursor-pointer relative" onClick={clickPrevPage}><div className="arrow-left w-[12px] h-[7px]"></div></div>
            {page_num_arry.map(item => (
                <div className={clsx("w-[35px] h-[35px] border-[#bbb] border-[1px] rounded-full text-[#7764E4] font-bold text-[13px] flex justify-center items-center mr-[10px] bg-white hover:cursor-pointer", { active: cur_page_num === item })} onClick={item => clickPageNum}>{item + 1}</div>
            ))}
            <div className="w-[35px] h-[35px] border-[#bbb] border-[1px] rounded-full text-[#bbb] flex justify-center items-center mr-[10px] hover:cursor-pointer relative" onClick={clickNextPage}><div className="arrow-right w-[12px] h-[7px]"></div></div>
        </div>
    );
}
