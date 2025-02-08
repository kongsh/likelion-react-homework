import { tm } from "@/utils/tw-merge";
import Counter from "./counter";

interface ProductListProps {
  productName: string;
  price: number;
  productImg: string;

  // ...counterProps
  count: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

function ProductList({ productName, price, productImg, ...counterProps }: ProductListProps) {
  return (
    <div className="flex p-2 gap-3 items-center w-[685px]">
      <img className="rounded-full bg-cart-gray-100 object-cover shrink-0" src={productImg} alt={productName} width={64} height={64}></img>
      <div className={tm("flex flex-col items-start gap-2 grow-[1]", "text-cart-gray-700")}>
        <span className="text-xl">{productName}</span>
        <span className="text-lg font-extrabold">{price.toLocaleString()} 원</span>
      </div>
      <Counter {...counterProps} />
    </div>
  );
}

export default ProductList;
