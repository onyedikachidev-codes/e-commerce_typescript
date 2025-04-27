"use client";

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { clearCart, getCart } from "../store/carts";

import Header from "../_components/Header";
import CartItem from "../_components/cart/CartItem";
import EmptyCart from "../_components/cart/EmptyCart";
import CartItemMobile from "../_components/cart/CartItemMobile";
import Footer from "../_components/Footer";

export default function Page() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const total = cart.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  if (!cart.length) return <EmptyCart />;

  return (
    <main className="min-h-screen relative flex flex-col bg-gradient-to-br from-[#f5f7fa] to-[#e4ecf4]">
      <Header />

      <section className="pt-20 flex-1 flex flex-col ">
        <div className="px-4 py-3">
          <Link href="/products" className="hover:text-blue-500 cursor-pointer">
            &larr; Back to products
          </Link>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse mt-12 hidden md:table">
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

            <div className="flex flex-col gap-4 md:hidden mt-8">
              {cart.map((item) => (
                <CartItemMobile
                  productId={item.productId}
                  name={item.title}
                  quantity={item.quantity}
                  totalPrice={item.totalPrice}
                  unitPrice={item.unitPrice}
                  key={item.productId}
                  image={item.image}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 pb-6 flex items-center justify-between mx-5">
            <button
              className="px-3 py-2 border border-blue-600 hover:bg-blue-200 cursor-pointer rounded-md"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>

            <div className="">
              <button className="py-2.5 px-9 w-full bg-blue-600 hover:bg-blue-400 cursor-pointer  rounded-md text-white">
                Checkout ($ {Math.ceil(total).toFixed(2)})
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
