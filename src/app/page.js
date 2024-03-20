/*
 * @Author: Chen HuaKang
 * @Date: 2024-03-15 10:08:57
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-03-20 10:07:35
 * @Description: 
 */
// import Image from "next/image";
import Header from './components/Header'
import Footer from './components/Footer'
import MenuList from './menuList'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <div className=' w-full'>
        <Header />
      </div>
      <div className=' block w-full'>
        <Footer />
      </div> */}
      <MenuList />
    </main>
  );
}
