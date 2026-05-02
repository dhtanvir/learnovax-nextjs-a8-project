"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold">404</h1>

        <h2 className="text-2xl font-semibold">Page Not Found</h2>

        <p className="text-default-500">
          The page you’re looking for doesn’t exist.
        </p>

        <div className="flex justify-center gap-3">
          <Link href="/">
            <button className="btn btn-primary">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
