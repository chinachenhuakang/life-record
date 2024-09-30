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
import moment from 'moment';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ONE_DAY = 86400000;
const nowDate = new Date();

const LOVE_DAY = {
  MEETING_DAY: '2024-2-4',
};
const HOLIDAY_MAP = {
  NEW_YEAR_DAY: '元旦',
  MAY_DAY: '五一',
  NATIONAL_DAY: '十一',
};

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

  const tranCNTimeStatus = (diff) => {
    return diff >= 0 ? '还有' : '过去';
  };

  const handelDistanceDay = (diffDay) => {
    return diffDay === 0 ? 1 : Math.abs(diffDay);
  };

  const handleCombinationText = (modleDay, year = moment(nowDate).format('YYYY')) => {
    let diffDistanceDay = 0;
    const yearString = year ? moment(year).format('YYYY') : moment(nowDate).format('YYYY');
    switch (modleDay) {
      case HOLIDAY_MAP.NEW_YEAR_DAY:
        diffDistanceDay = moment(`${yearString}-1-1`).diff(moment(nowDate), 'day');
        break;
      case HOLIDAY_MAP.MAY_DAY:
        diffDistanceDay = moment(`${yearString}-5-1`).diff(moment(nowDate), 'day');
        break;
      case HOLIDAY_MAP.NATIONAL_DAY:
        diffDistanceDay = moment(`${yearString}-10-1`).diff(moment(nowDate), 'day');
        break;
      default:
        return `错误节假日`;
    }
    return `${tranCNTimeStatus(diffDistanceDay)} ${handelDistanceDay(diffDistanceDay)} 天`;
  };

  useEffect(() => {
    // initData();
    let nextYear = moment(nowDate).add(1, 'year'),
      meetDay = Math.abs(moment(LOVE_DAY.MEETING_DAY).diff(moment(nowDate), 'day')) + 1,
      nextYearString = nextYear.format('YYYY');
    setCountDay([
      { id: 1, name: '在一起', value: `第 ${meetDay} 天` },
      {
        id: 2,
        name: '距离元旦',
        value: `${handleCombinationText(HOLIDAY_MAP.NEW_YEAR_DAY)}`,
      },
      {
        id: 3,
        name: '距离五一',
        value: `${handleCombinationText(HOLIDAY_MAP.MAY_DAY)}`,
      },
      {
        id: 4,
        name: '距离十一',
        value: `${handleCombinationText(HOLIDAY_MAP.NATIONAL_DAY)}`,
      },
      {
        id: 5,
        name: '',
        value: `${nextYearString}`,
      },
      {
        id: 6,
        name: '距离元旦',
        value: `${handleCombinationText(HOLIDAY_MAP.NEW_YEAR_DAY, nextYearString)}`,
      },
      {
        id: 7,
        name: '距离五一',
        value: `${handleCombinationText(HOLIDAY_MAP.MAY_DAY, nextYearString)}`,
      },
      {
        id: 8,
        name: '距离十一',
        value: `${handleCombinationText(HOLIDAY_MAP.NATIONAL_DAY, nextYearString)}`,
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
