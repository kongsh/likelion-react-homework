import { tm } from "@/utils/tw-merge";

interface CounterProps {
  handleIncrease: () => void;
  handleDecrease: () => void;
  count: number;
}

function Counter({ count, handleIncrease, handleDecrease }: CounterProps) {
  return (
    <div className={tm("inline-flex py-0.5 px-2 justify-center items-center", "rounded-[18px] border-cart-gray-300 bg-cart-gray-100 border-1")}>
      <button className={tm("text-cart-gray-400 cursor-pointer", "hover:text-cart-gray-900", "focus:text-cart-gray-900")} type="button" onClick={handleDecrease}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <title>minus</title>
          <path d="M10.4346 7.72754H5.56543V8.27246H10.4346V7.72754Z" />
        </svg>
      </button>
      <output className={tm("flex flex-col justify-center items-center px-0.5", "text-cart-gray-700 text-[14px] font-semibold")}>{count}</output>
      <button className={tm("text-cart-gray-400 cursor-pointer", "hover:text-cart-gray-900", "focus:text-cart-gray-900")} type="button" onClick={handleIncrease}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <title>plus</title>
          <path d="M7.72754 11.6826H8.29004V8.27246H11.6826V7.70996H8.29004V4.31738H7.72754V7.70996H4.31738V8.27246H7.72754V11.6826Z" />
        </svg>
      </button>
    </div>
  );
}

export default Counter;
