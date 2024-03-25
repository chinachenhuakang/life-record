/*
 * @Author: Chen HuaKang
 * @Date: 2024-03-25 16:08:11
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-03-25 17:24:03
 * @Description:
 */

'use client';
import menuCategories from '@/data/menu';
import Image from 'next/image';
import { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Menu() {
  let [categories] = useState({ ...menuCategories.categories });
  return (
    <div className='w-full h-full max-w-md px-2 py-8 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-blue-700 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(categories).map((menus, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {menus.map((menu) => (
                  <li key={menu.id} className='flex relative rounded-md p-3 hover:bg-gray-100'>
                    <div className='flex'>
                      <Image
                        className=' rounded-xl md:rounded-none'
                        src={menu.imageSrc}
                        width={96}
                        height={36}
                        alt={menu.menuName}
                      />
                      <div className='pt-2 pl-4 md:p-4 text-left md:text-left space-y-4'>
                        <blockquote>
                          <figcaption className='font-medium'>
                            <div className='text-sky-500 dark:text-sky-400'>
                              <span className=' text-gray-400'>菜名：</span>
                              {menu.menuName}
                            </div>
                            <div className='text-slate-700 dark:text-slate-500'>
                              <span className=' text-gray-400'>所需：</span>
                              {menu.price}个吻
                            </div>
                          </figcaption>
                          <p className=' text-base font-medium'>
                            <span className=' text-gray-400'>细节：</span>
                            {menu.desc}
                          </p>
                        </blockquote>
                      </div>
                    </div>
                    <a
                      href='#'
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>

                  // <li
                  //   key={menu.id}
                  //   className="flex relative rounded-md p-3 hover:bg-gray-100"
                  // >
                  //   <h3 className="text-sm font-medium leading-5">
                  //     {menu.desc}
                  //   </h3>

                  //   <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  //     <li>{menu.date}</li>
                  //     <li>&middot;</li>
                  //     <li>{menu.commentCount} comments</li>
                  //     <li>&middot;</li>
                  //     <li>{menu.shareCount} shares</li>
                  //   </ul>

                  //   <a
                  //     href="#"
                  //     className={classNames(
                  //       'absolute inset-0 rounded-md',
                  //       'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                  //     )}
                  //   />
                  // </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
