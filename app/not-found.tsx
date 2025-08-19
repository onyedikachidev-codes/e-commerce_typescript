import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-48">
      <h1 className="text-3xl font-semibold text-[#005C34]">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-[#00B259] text-gray-100 px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
