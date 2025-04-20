"use client";

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { clearCart, getCart } from "../store/carts";

import Header from "../_components/Header";
import SearchBar from "../_components/SearchBar";
import CartItem from "../_components/cart/CartItem";
import EmptyCart from "../_components/cart/EmptyCart";

export default function Page() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <main>
      <Header />

      <section className="mt-20">
        <SearchBar />

        <div className="px-4 py-3">
          <Link href="/products">&larr; Back to menu</Link>

          <h2 className="mt-7 text-xl font-semibold">Cart</h2>

          <ul className="mt-3 divide-y divide-stone-200 border-b">
            {cart.map((item) => (
              <CartItem
                productId={item.productId}
                name={item.title}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
                unitPrice={item.unitPrice}
                key={item.productId}
              />
            ))}
          </ul>
          <div className="mt-6 space-x-2">
            <button>Order items</button>
            <button onClick={() => dispatch(clearCart())}>Clear cart</button>
          </div>
        </div>
      </section>
    </main>
  );
}
