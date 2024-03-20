/*
 * @Author: Chen HuaKang
 * @Date: 2024-03-20 10:46:22
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-03-20 15:43:12
 * @Description: 
 */
import doujiaochaorou from './../../public/image/doujiaochaorou.jpg';
import maodou from './../../public/image/maodou.jpg';
const menuData = [
  {
    id: `${new Date().getTime()}-1`,
    isSelect: false,
    menuName: '毛豆炒肉',
    price:18,
    imageSrc: maodou,
    desc:'材料：毛豆、前腿肉、红辣椒、樟树港辣椒； 配料：油、盐、味精、耗油、料酒',
  },
  {
    id: `${new Date().getTime()}-2`,
    isSelect: false,
    menuName: '豆角炒肉',
    price:18,
    imageSrc: doujiaochaorou,
    desc:'材料：豆角、前腿肉、红辣椒、樟树港辣椒； 配料：油、盐、味精、耗油、料酒',
  }
]
const initMenus = ()=>{
  const ary1 = [1,2,3];
  const ary2= [4,5];
  for(let i = 0,j = 0; i < ary1.length || j < ary2.length; ++i,++j){
    console.log('i=%s ary1[i]',i,ary1[i]);
    console.log('j=%s ary2[j]',j,ary2[j]);
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
}
initMenus()
export default menuData