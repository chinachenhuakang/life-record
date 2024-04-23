/*
 * @Author: Chen HuaKang
 * @Date: 2024-04-22 16:25:46
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-04-23 14:27:57
 * @Description: 嫁给我
 */
'use client';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const MerryMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>打开</button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                    嫁给我
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      陈华康，想与檐芬宝贝同看每一天的日出日落，一起相互包容、理解，相濡以沫，嫁给我！
                    </p>
                    <p className='text-sm text-gray-500'>
                      陈华康，从此和檐芬宝贝一日两人三餐四季，共同过好我们生命中的每一天，嫁给我！
                    </p>
                    <p className='text-sm text-gray-500'>
                      檐芬，遇见你，是我这辈子最美的意外。现在，我想用我全部的勇气，来向你求婚。
                      你愿意和我一起，将这个意外变成幸福的开始吗？嫁给我！
                    </p>
                    <p className='text-sm text-gray-500'>
                      岁月悠长，携手共度每一个春夏秋冬。祝我们的爱情永远甜蜜如初，幸福美满！
                    </p>
                    <p className='text-sm text-gray-500'>
                      在这个特别的日子里，我想对你说：愿我们的爱情像繁星般闪烁，永不熄灭；愿我们的生活像琴瑟和鸣，和谐美妙。你是我生命中的唯一，
                      我愿意与你共度未来的每一天。我在此向你求婚，期待与你共筑爱巢，一起走向美好的未来。
                    </p>
                    <p className='text-sm text-gray-500'>
                    我的一生错过很多，可我知道我一定不能错过你，亲爱的，嫁给我，让我牵起你的手走进婚姻的殿堂，这辈子我都会爱你、宠溺你，此生都不离不弃。
                    </p>
                    <p className='text-sm text-gray-500'>
                      你的身影已化作我生活中的一种氛围，你的牵挂已成为我生命中的一个支点，你的每一次微笑都让我感到无比幸福，
                      让我用余生来为你加冕，嫁给我宝贝
                    </p>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      我愿意
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data will be permanently
            removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog> */}
    </div>
  );
};

export default MerryMe;
