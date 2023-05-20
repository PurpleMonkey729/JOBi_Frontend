export default function Loader(props) {
    return (
        <div className="fixed z-[9999] w-full h-[100vh] flex flex-col items-center justify-center bg-[#ffffffbb]">
            <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="mt-[10px] text-[20px]">Loading</div>
        </div>
    );
}
