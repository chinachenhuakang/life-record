/*
 * @Author: Chen HuaKang
 * @Date: 2024-03-15 10:08:57
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-03-25 14:11:15
 * @Description:
 */
// import Image from "next/image";
import Header from './components/Header';
import Footer from './components/Footer';
import TeamSections from './components/TeamSections';
import FeatureSections from './components/FeatureSections';
import ContactSections from './components/ContactSections';
import MenuList from './menuList';

export default function Home({ children }) {
  console.log('children',children)
  return (
    <main className='min-h-screen'>
      <div className=' w-full'>
        <Header />
      </div>
      <div className=' w-full'>
        <TeamSections />
      </div>
      <div className=' w-full'>
        <FeatureSections />
      </div>
      {/* <div className=' w-full'>
        <ContactSections />
      </div> */}
      <div className=' block w-full'>
        <Footer />
      </div>
      {/* <MenuList /> */}
    </main>
  );
}
