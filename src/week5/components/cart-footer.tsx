import { tm } from "@/utils/tw-merge";

interface CartFooterProps {
  totalPrice: string;
}

function CartFooter({ totalPrice }: CartFooterProps) {
  return (
    <>
      <hr />
      <footer className={tm("flex flex-col gap-5 items-end", "mt-5", "text-cart-gray-700 text-center text-xl font-bold")}>
        <span>구매 총액 : {totalPrice}원</span>
      </footer>
    </>
  );
}

export default CartFooter;
