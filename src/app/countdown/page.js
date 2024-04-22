/*
 * @Author: Chen HuaKang
 * @Date: 2024-04-17 16:49:48
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-04-22 17:12:35
 * @Description:
 */
'use client';
import menuCategories from '@/data/menu';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Countdown() {
  const [countDay, setCountDay] = useState([]);
  const initData = () => {
    let oneDay = 86400000;
    let newTime = new Date().getTime(),
      meetDay = (newTime - new Date('2024-2-4').getTime()) / oneDay,
      yiyiDay = Math.ceil(
        (newTime - new Date(`${new Date().getFullYear()}-1-1`).getTime()) / oneDay
      ),
      wuyiDay = Math.ceil(
        (newTime - new Date(`${new Date().getFullYear()}-5-1`).getTime()) / oneDay
      ),
      shiyiDay = Math.ceil(
        (newTime - new Date(`${new Date().getFullYear()}-10-1`).getTime()) / oneDay
      );
    setCountDay([
      { id: 1, name: '在一起', value: `第 ${Math.ceil(meetDay)} 天` },
      {
        id: 2,
        name: '距离元旦',
        value: `${yiyiDay < 0 ? '还有' : '过去'} ${
          yiyiDay < 0 ? Math.abs(yiyiDay) + 1 : Math.abs(yiyiDay) - 1
        } 天`,
      },
      {
        id: 3,
        name: '距离五一',
        value: `${wuyiDay < 0 ? '还有' : '过去'} ${
          wuyiDay < 0 ? Math.abs(wuyiDay) + 1 : Math.abs(wuyiDay) - 1
        } 天`,
      },
      {
        id: 4,
        name: '距离十一',
        value: `${shiyiDay < 0 ? '还有' : '过去'} ${
          shiyiDay < 0 ? Math.abs(shiyiDay) + 1 : Math.abs(shiyiDay) - 1
        } 天`,
      },
    ]);
  };
  useEffect(() => {
    // initData();
    let oneDay = 86400000;
    let newTime = new Date().getTime(),
      meetDay = (newTime - new Date('2024-2-4').getTime()) / oneDay,
      yiyiDay = Math.ceil(
        (newTime - new Date(`${new Date().getFullYear()}-1-1`).getTime()) / oneDay
      ),
      wuyiDay = Math.ceil(
        (newTime - new Date(`${new Date().getFullYear()}-5-1`).getTime()) / oneDay
      ),
      shiyiDay = Math.ceil(
        (newTime - new Date(`${new Date().getFullYear()}-10-1`).getTime()) / oneDay
      );
    setCountDay([
      { id: 1, name: '在一起', value: `第 ${Math.ceil(meetDay)} 天` },
      {
        id: 2,
        name: '距离元旦',
        value: `${yiyiDay < 0 ? '还有' : '过去'} ${
          yiyiDay < 0 ? Math.abs(yiyiDay) + 1 : Math.abs(yiyiDay) - 1
        } 天`,
      },
      {
        id: 3,
        name: '距离五一',
        value: `${wuyiDay < 0 ? '还有' : '过去'} ${
          wuyiDay < 0 ? Math.abs(wuyiDay) + 1 : Math.abs(wuyiDay) - 1
        } 天`,
      },
      {
        id: 4,
        name: '距离十一',
        value: `${shiyiDay < 0 ? '还有' : '过去'} ${
          shiyiDay < 0 ? Math.abs(shiyiDay) + 1 : Math.abs(shiyiDay) - 1
        } 天`,
      },
    ]);
    return () => {
      setCountDay([]);
    };
  }, []);

  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
          {countDay.map((stat) => (
            <div key={stat.id} className='mx-auto flex max-w-xs flex-col gap-y-4'>
              <dt className='text-base leading-7 text-gray-600'>{stat.name}</dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
