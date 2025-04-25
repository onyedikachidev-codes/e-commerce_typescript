"use client";

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { clearCart, getCart } from "../store/carts";

import Header from "../_components/Header";
import CartItem from "../_components/cart/CartItem";
import EmptyCart from "../_components/cart/EmptyCart";

export default function Page() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const total = cart.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  if (!cart.length) return <EmptyCart />;

  return (
    <main>
      <Header />

      <section className="mt-20 ">
        <div className="px-4 py-3">
          <Link href="/products" className="hover:text-blue-500 cursor-pointer">
            &larr; Back to products
          </Link>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse mt-12">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Product</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Quantity</th>
                  <th className="py-3 px-6 text-left">Total</th>
                  <th className="py-3 px-6 text-left">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <CartItem
                    productId={item.productId}
                    name={item.title}
                    quantity={item.quantity}
                    totalPrice={item.totalPrice}
                    unitPrice={item.unitPrice}
                    key={item.productId}
                    image={item.image}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-between items-start mx-5">
            <button
              className="px-3 py-2 border border-blue-600 hover:bg-blue-200 cursor-pointer rounded-md"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>

            <div className="">
              <button className="py-2 px-3 w-full bg-blue-600 hover:bg-blue-400 cursor-pointer mt-2 rounded-md text-white">
                Checkout(${Math.ceil(total).toFixed(2)})
              </button>
              <p className="text-sm text-gray-500 mt-1.5 font-normal">
                Delivery fees not included yet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
