import { useState } from "react";
import CartFooter from "./components/cart-footer";
import CartHeader from "./components/cart-header";
import ProductList from "./components/product-list";

const PRODUCTS = [
  {
    id: "item-1",
    productName: "1A 우유 900mL",
    price: 1880,
    productImg: "assets/week5/milk.png",
    maxCount: 3,
  },
  {
    id: "item-2",
    productName: "맛있는 콩나물 500g",
    price: 1280,
    productImg: "assets/week5/bean.png",
    maxCount: 5,
  },
  {
    id: "item-3",
    productName: "고소한 두부 1kg",
    price: 2280,
    productImg: "assets/week5/tofu.png",
    maxCount: 4,
  },
];

const INITIAL_PRODUCTS_COUNT = [1, 1, 1];

function Cart() {
  const [counts, setCounts] = useState(INITIAL_PRODUCTS_COUNT);

  const totalPriceNumber = PRODUCTS.reduce((acc, { price }, index) => {
    const count = counts[index];

    return acc + price * count;
  }, 0);
  const totalPrice = totalPriceNumber.toLocaleString();

  const handleIncrease = (i: number) => {
    const nextCounts = [...counts].map((item, index) => {
      if (index === i && PRODUCTS[i].maxCount !== counts[i]) {
        return item + 1;
      }
      return item;
    });

    setCounts(nextCounts);
  };

  const handleDecrease = (i: number) => {
    const nextCounts = [...counts].map((item, index) => {
      if (index === i && counts[i] > 1) {
        return item - 1;
      }
      return item;
    });

    setCounts(nextCounts);
  };

  return (
    <div className="p-5">
      <CartHeader />
      <ul className="flex flex-col gap-5 my-5">
        {PRODUCTS.map(({ productName, productImg, price, id }, index) => (
          <li key={id}>
            <ProductList productName={productName} price={price} productImg={productImg} count={counts[index]} handleIncrease={() => handleIncrease(index)} handleDecrease={() => handleDecrease(index)} />
          </li>
        ))}
      </ul>
      <CartFooter totalPrice={totalPrice} />
    </div>
  );
}

export default Cart;
