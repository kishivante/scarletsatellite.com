import { Suspense } from 'react';
import Sectioner from "@/components/Sectioner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Suspense fallback={<div className="text-white text-center py-20">Loading...</div>}>
        <Sectioner />
      </Suspense>
      <Footer />
    </main>
  );
}