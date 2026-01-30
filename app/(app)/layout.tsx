import Header from "@/components/header";
import Footer from "@/components/footer";
import { oswald } from "@/components/ui/fonts";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${oswald.className} antialiased`}>
      <Header />
      { children }
      <Footer />
    </div>
  );
}