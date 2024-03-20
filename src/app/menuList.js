import menuData from './../data/menu'
import Image from 'next/image';

export default function menuList() {
  let menuList = menuData;
  return (
    <div className=' w-full px-2'>
      {
        menuList.map((menu)=>(
          <div key={menu.id} className='flex bg-slate-100 rounded-xl p-2 md:p-0 dark:bg-slate-800 my-2'>
            <Image
              className=' rounded-xl md:rounded-none'
              src={menu.imageSrc}
              width={96}
              height={36}
            />
            <div className='pt-2 pl-4 md:p-4 text-left md:text-left space-y-4'>
              <blockquote>
                <figcaption className='font-medium'>
                  <div className='text-sky-500 dark:text-sky-400'>
                    <span className=' text-gray-400'>菜名：</span>
                    {menu.menuName}</div>
                  <div className='text-slate-700 dark:text-slate-500'>
                    <span className=' text-gray-400'>所需：</span>{menu.price}个吻</div>
                </figcaption>
                <p className=' text-base font-medium'>
                  <span className=' text-gray-400'>细节：</span>
                  {menu.desc}
                </p>
              </blockquote>
            </div>
          </div>
        ))
      }
    </div>
  );
}
