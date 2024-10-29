'use client';
import { useState, useRef, useMemo } from 'react';

const ShoppingList = () => {
  let storeProductList = [];
  if (typeof window !== 'undefined') {
    // 客户端代码，可以安全使用localStorage
    storeProductList = JSON.parse(localStorage.getItem('productList'));
    // ...
  }
  const [textProdcut, setTextProdcut] = useState('');
  const [productList, setProductList] = useState(storeProductList || []);

  const handleAddProduct = () => {
    if (!textProdcut) {
      return;
    }
    setProductList((oldProductList) => {
      const result = [
        {
          name: textProdcut,
          done: false,
        },
        ...oldProductList,
      ];
      handelSetStoreProductList(result);
      return result;
    });
    setTextProdcut('');
  };

  const handleShoppingProductDone = (product) => {
    const result = productList.map((item) => {
      if (JSON.stringify(item) === JSON.stringify(product)) {
        item.done = !item.done;
      }
      return item;
    });
    setProductList(result);
    handelSetStoreProductList(result);
  };

  const handleDeleteProduct = (index) => {
    const result = productList.splice(index, 1);
    setProductList(result);
    handelSetStoreProductList(result);
  };

  const handleChangeText = (event) => {
    setTextProdcut(event.target.value);
  };

  const handleClearAll = () => {
    setProductList([]);
    handelSetStoreProductList([]);
  };

  const handelSetStoreProductList = (data) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('productList', JSON.stringify(data));
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      // 调用你想要执行的函数
      handleAddProduct();
    }
  };

  const total = useMemo(() => productList?.length, [productList]);
  const doneCount = useMemo(() => productList?.filter((item) => item.done)?.length, [productList]);

  return (
    <div className=' flex ' style={{ height: '100vh', flexDirection: 'column' }}>
      <div className=' h-24'>
        <h1
          className='text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'
          onClick={handleClearAll}
        >
          购物清单栏 ({doneCount}/{total})
        </h1>
        <div className=' flex p-4'>
          <input
            className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            value={textProdcut}
            onChange={handleChangeText}
            onKeyDown={handleInputKeyDown}
          ></input>
          <button
            className='  ml-auto block w-16 rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
            onClick={handleAddProduct}
          >
            加购
          </button>
          {/* <button
            className='block w-16 rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
            onClick={handleAddProduct}
          >
            清除
          </button> */}
        </div>
      </div>

      {productList?.length > 0 && (
        <ul style={{ padding: 16, flex: 1, overflowY: 'scroll' }}>
          {productList.map((product, index) => (
            <li
              key={index}
              className={`h-24 p-2 bottom-1 border-dashed mt-4 text-gray-50 relative ${
                product.done ? 'bg-green-700' : 'bg-gray-500'
              }`}
              style={{
                display: 'flex',
                borderRadius: 8,
                alignItems: 'center',
                textDecoration: product.done ? 'line-through' : 'auto',
              }}
              onClick={() => handleShoppingProductDone(product)}
            >
              {product.done ? (
                <>
                  <span className=' absolute top-1 left-0 -rotate-45'>已购</span>
                </>
              ) : (
                <>
                  <span className=' absolute top-1 left-0 -rotate-45'>未购</span>
                </>
              )}
              <label htmlFor='message' className='block text-sm font-semibold leading-6'>
                {product.name}
              </label>
              <button
                className='block w-16 rounded-md bg-red-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400'
                style={{ marginLeft: 'auto' }}
                onClick={() => handleDeleteProduct(index)}
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingList;
