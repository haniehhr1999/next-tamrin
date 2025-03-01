import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 md:px-20 px-10">
      <Link href='/tamrin1' className="text-white font-bold flex justify-center items-center rounded-md shadow p-6 bg-linear-to-r from-amber-500 to-amber-800">تمرین اول</Link>
      <Link href='/tamrin2' className="text-white font-bold flex justify-center items-center rounded-md shadow p-6 bg-linear-to-r from-sky-500 to-sky-800">تمرین دوم</Link>
      <Link href='/tamrin3' className="text-white font-bold flex justify-center items-center rounded-md shadow p-6 bg-linear-to-r from-green-500 to-green-800">تمرین سوم</Link>
      <Link href='/tamrin4' className="text-white font-bold flex justify-center items-center rounded-md shadow p-6 bg-linear-to-r from-red-500 to-red-800">تمرین جهارم</Link>
      <Link href='/tamrin5' className="text-white font-bold flex justify-center items-center rounded-md shadow p-6 bg-linear-to-r from-yellow-300 to-yellow-500">تمرین پنجم</Link>
    </div>
  );
}
