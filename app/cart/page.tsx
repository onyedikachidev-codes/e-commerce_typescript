"use client";

import Header from "../_components/Header";
import SearchBar from "../_components/SearchBar";

export default function Page() {
  return (
    <main>
      <Header />

      <section className="mt-20">
        <SearchBar />
      </section>
    </main>
  );
}
