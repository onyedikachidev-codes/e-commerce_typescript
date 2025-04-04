import Header from "@/app/_components/Header";
import SearchBar from "@/app/_components/SearchBar";

export default function Home() {
  return (
    <main>
      <section>
        <Header />

        <div className="mt-30">
          <SearchBar />
          Helooooo
        </div>
      </section>
    </main>
  );
}
