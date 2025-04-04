import Header from "@/app/_components/Header";
import SearchBar from "@/app/_components/SearchBar";

export default function Home() {
  return (
    <main>
      <section>
        <Header />

        <div className="mt-30 flex justify-end px-5">
          <SearchBar />
        </div>
      </section>
    </main>
  );
}
