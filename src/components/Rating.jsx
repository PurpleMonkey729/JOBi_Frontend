import clsx from 'clsx';

export default function Rating(props) {
    const array = [1, 2, 3, 4, 5];
    return (
        <div className="rating flex w-[100px] justify-between">
            {array.map((item, index) =>
                <div className="flex items-center flex-col" key={index}>
                    {
                        props.num >= item && <img src="/src/img/star.png" alt="star-full" /> ||
                        props.num < item && <img src="/src/img/star-empty.png" alt="star-empty" />
                    }
                    <div className={clsx('text-[#4B00E0] mt-[5px] font-bold', {'text-transparent':props.num < item})}>{item}</div>
                </div>
            )}
        </div>
    );
}