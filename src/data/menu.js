/*
 * @Author: Chen HuaKang
 * @Date: 2024-03-20 10:46:22
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-04-09 15:00:44
 * @Description:
 */
import doujiaochaorou from './../../public/image/doujiaochaorou.jpg';
import maodou from './../../public/image/maodou.jpg';
const menuData = [
  {
    id: `${new Date().getTime()}-1`,
    isSelect: false,
    menuName: '毛豆炒肉',
    price: 18,
    imageSrc: maodou,
    desc: '材料：毛豆、前腿肉、红辣椒、樟树港辣椒； 配料：油、盐、味精、耗油、料酒',
  },
  {
    id: `${new Date().getTime()}-2`,
    isSelect: false,
    menuName: '豆角炒肉',
    price: 18,
    imageSrc: doujiaochaorou,
    desc: '材料：豆角、前腿肉、红辣椒、樟树港辣椒； 配料：油、盐、味精、耗油、料酒',
  },
  {
    id: `${new Date().getTime()}-3`,
    isSelect: false,
    menuName: '青椒鸡蛋',
    price: 18,
    imageSrc: doujiaochaorou,
    desc: '材料：鸡蛋、樟树港辣椒； 配料：油、盐、味精、耗油',
  },
  {
    id: `${new Date().getTime()}-4`,
    isSelect: false,
    menuName: '土豆烧排骨',
    price: 18,
    imageSrc: doujiaochaorou,
    desc: '材料：土豆、排骨、樟树港辣椒； 配料：油、盐、味精、耗油',
  },
  {
    id: `${new Date().getTime()}-6`,
    isSelect: false,
    menuName: '荷兰豆炒肉',
    price: 18,
    imageSrc: doujiaochaorou,
    desc: '材料：土豆、樟树港辣椒； 配料：油、盐、味精、耗油',
  },
  {
    id: `${new Date().getTime()}-7`,
    isSelect: false,
    menuName: '莴笋炒肉',
    price: 18,
    imageSrc: doujiaochaorou,
    desc: '材料：土豆、樟树港辣椒； 配料：油、盐、味精、耗油',
  },
  {
    id: `${new Date().getTime()}-8`,
    isSelect: false,
    menuName: '辣椒炒肉',
    price: 18,
    imageSrc: doujiaochaorou,
    desc: '材料：土豆、樟树港辣椒； 配料：油、盐、味精、耗油',
  },
  {
    id: `${new Date().getTime()}-9`,
    isSelect: false,
    menuName: '清炒土豆丝',
    price: 18,
    imageSrc: doujiaochaorou,
    desc: '材料：土豆、樟树港辣椒； 配料：油、盐、味精、耗油',
  },
  {
    id: `${new Date().getTime()}-10`,
    isSelect: false,
    menuName: '清炒豆芽',
    price: 18,
    imageSrc: doujiaochaorou,
    desc: '材料：土豆、樟树港辣椒； 配料：油、盐、味精、耗油',
  },
  {
    id: `${new Date().getTime()}-11`,
    isSelect: false,
    menuName: '清炒油麦菜',
    price: 18,
    imageSrc: doujiaochaorou,
    desc: '材料：土豆、樟树港辣椒； 配料：油、盐、味精、耗油',
  },
  {
    id: `${new Date().getTime()}-12`,
    isSelect: false,
    menuName: '清炒空心菜',
    price: 18,
    imageSrc: doujiaochaorou,
    desc: '材料：土豆、樟树港辣椒； 配料：油、盐、味精、耗油',
  },
];

const categories = {
  肉类: [
    {
      id: `${new Date().getTime()}-1`,
      isSelect: false,
      menuName: '毛豆炒肉',
      price: 18,
      imageSrc: maodou,
      desc: '材料：毛豆、前腿肉、红辣椒、樟树港辣椒； 配料：油、盐、味精、耗油、料酒',
    },
    {
      id: `${new Date().getTime()}-2`,
      isSelect: false,
      menuName: '豆角炒肉',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：豆角、前腿肉、红辣椒、樟树港辣椒； 配料：油、盐、味精、耗油、料酒',
    },
    {
      id: `${new Date().getTime()}-4`,
      isSelect: false,
      menuName: '土豆烧排骨',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：土豆、排骨、樟树港辣椒； 配料：油、盐、味精、耗油',
    },
    {
      id: `${new Date().getTime()}-6`,
      isSelect: false,
      menuName: '荷兰豆炒肉',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：土豆、樟树港辣椒； 配料：油、盐、味精、耗油',
    },
    {
      id: `${new Date().getTime()}-7`,
      isSelect: false,
      menuName: '莴笋炒肉',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：土豆、樟树港辣椒； 配料：油、盐、味精、耗油',
    },
    {
      id: `${new Date().getTime()}-8`,
      isSelect: false,
      menuName: '辣椒炒肉',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：土豆、樟树港辣椒； 配料：油、盐、味精、耗油',
    },
    {
      id: `${new Date().getTime()}-9`,
      isSelect: false,
      menuName: '青椒鸡蛋',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：鸡蛋、樟树港辣椒； 配料：油、盐、味精、耗油',
    },
    {
      id: `${new Date().getTime()}-10`,
      isSelect: false,
      menuName: '四季豆炒肉',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：四季豆、前腿肉、樟树港辣椒； 配料：油、盐、味精、耗油',
    },
    {
      id: `${new Date().getTime()}-11`,
      isSelect: false,
      menuName: '芹菜炒肉',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：芹菜、前腿肉、樟树港辣椒； 配料：油、盐、味精、耗油',
    },
    {
      id: `${new Date().getTime()}-11`,
      isSelect: false,
      menuName: '油豆腐炒肉',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：油豆腐、前腿肉、樟树港辣椒； 配料：油、盐、味精、耗油',
    },
  ],
  汤类: [
    {
      id: `${new Date().getTime()}-9`,
      isSelect: false,
      menuName: '丝瓜肉汤',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：丝瓜、里脊肉丝； 配料：油、盐、味精',
    },
    {
      id: `${new Date().getTime()}-9`,
      isSelect: false,
      menuName: '丝瓜蛋汤',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：丝瓜、鸡蛋； 配料：油、盐、味精',
    },
    {
      id: `${new Date().getTime()}-9`,
      isSelect: false,
      menuName: '玉米排骨汤',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：玉米、排骨； 配料：油、盐、味精',
    },
    {
      id: `${new Date().getTime()}-9`,
      isSelect: false,
      menuName: '胡萝卜排骨汤',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：胡萝卜、排骨； 配料：油、盐、味精',
    },
    {
      id: `${new Date().getTime()}-9`,
      isSelect: false,
      menuName: '西红柿鸡蛋汤',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：西红柿、鸡蛋； 配料：油、盐、味精',
    },
  ],
  青菜: [
    {
      id: `${new Date().getTime()}-9`,
      isSelect: false,
      menuName: '青椒土豆丝',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：土豆、樟树港辣椒； 配料：油、盐、味精',
    },
    {
      id: `${new Date().getTime()}-9`,
      isSelect: false,
      menuName: '茄子豆角',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：茄子、豆角； 配料：油、盐、味精',
    },
    {
      id: `${new Date().getTime()}-10`,
      isSelect: false,
      menuName: '清炒豆芽',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：豆芽、葱； 配料：油、盐、味精',
    },
    {
      id: `${new Date().getTime()}-11`,
      isSelect: false,
      menuName: '清炒油麦菜',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：油麦菜、蒜； 配料：油、盐、味精、耗油',
    },
    {
      id: `${new Date().getTime()}-12`,
      isSelect: false,
      menuName: '清炒空心菜',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：空心菜、蒜； 配料：油、盐、味精、',
    },
    {
      id: `${new Date().getTime()}-12`,
      isSelect: false,
      menuName: '清炒生菜',
      price: 18,
      imageSrc: doujiaochaorou,
      desc: '材料：生菜； 配料：油、盐、味精',
    },
  ],
};

const initMenus = () => {
  const ary1 = [1, 2, 3];
  const ary2 = [4, 5];
  for (let i = 0, j = 0; i < ary1.length || j < ary2.length; ++i, ++j) {
    // console.log('i=%s ary1[i]', i, ary1[i]);
    // console.log('j=%s ary2[j]', j, ary2[j]);
    // menuData.push(
    //   {
    //     id: `${new Date().getTime()}${i}`,
    //     menuName: '毛豆炒肉',
    //     price:1,
    //     imageSrc: maodou,
    //     desc:'材料：毛豆、前腿肉、红辣椒、樟树港辣椒； 配料：油、盐、味精、耗油、料酒',
    //   }
    // )
  }
};
initMenus();
const data = {
  menuData,
  categories,
}
export default data;
