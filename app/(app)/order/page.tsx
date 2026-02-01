import { Suspense } from "react";
import OrderForm from "./OrderForm";
import { oswald } from '@/components/ui/fonts';

export default function OrderPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src="/Rest easy with us in your writing, enjoy your service.jpg"
        alt="Rest easy with us in your writing, enjoy your service"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-[160px] pb-24 flex flex-col items-center">
        {/* Hero */}
        <h1 className={`${oswald.className} text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-6`}>
          Request Professional Academic, Research & Publication Support
        </h1>

        <p className={`${oswald.className} text-white/90 text-center max-w-3xl mb-16`}>
          Tell us what you need help with — our expert team will respond quickly
          with tailored guidance.
        </p>

        {/* ONLY the form is suspended */}
        <Suspense
          fallback={
            <div className="w-full bg-white/10 backdrop-blur-xl rounded-2xl p-10 text-white text-center">
              <div className="w-12 h-12 mx-auto border-4 border-white/30 border-t-white rounded-full animate-spin mb-4" />
              <p className={`${oswald.className} opacity-80`}>Preparing your form…</p>
            </div>
          }
        >
          <OrderForm />
        </Suspense>
      </div>
    </section>
  );
}