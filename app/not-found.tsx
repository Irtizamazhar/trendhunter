import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="inline-block bg-accent px-4 text-7xl font-extrabold tracking-tight text-black">
        404
      </p>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink">
        This trend hasn&apos;t been spotted yet.
      </h1>
      <p className="mt-3 max-w-md text-[15px] text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
        get you back to the future.
      </p>
      <Link href="/" className="btn-primary mt-7">
        Back to Home
      </Link>
    </div>
  );
}
