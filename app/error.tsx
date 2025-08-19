"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex justify-center items-center flex-col gap-6 mt-40">
      <h1 className="text-3xl font-semibold text-[#005C34]">
        Something went wrong!
      </h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-[#00B259] text-gray-100 px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
