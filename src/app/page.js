/*
 * @Author: Chen HuaKang
 * @Date: 2024-03-15 10:08:57
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-03-18 17:27:57
 * @Description: 
 */
// import Image from "next/image";
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className=' w-full'>
        <Header />
      </div>
      <div className=' block w-full'>
        <Footer />
      </div>
    </main>
  );
}
