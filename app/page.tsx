import Image from "next/image";
import HomePage from "./pages/home";

export default function Init() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <HomePage />
    </main>
  );
}
