import Link from "next/link";
import React from "react";

export default function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <Link href="/products">&larr; Back to Shop</Link>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some items :)
      </p>
    </div>
  );
}
