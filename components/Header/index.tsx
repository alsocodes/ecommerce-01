import React from 'react';
import {
  IoBagOutline,
  IoHeartOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from 'react-icons/io5';

const menus = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Shop',
    link: '/shop',
  },
  {
    label: 'Blog',
    link: '/blog',
  },
  {
    label: 'Pages',
    link: '/pages',
  },
];

const Header = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 md:px-8 flex py-6 gap-4 items-center justify-between'>
        <div className='flex items-center gap-4'>
          <h1 className='border rounded-3xl border-primary border-dashed my-0 py-0 px-4 text-primary font-bold text-2xl'>
            TUMBAS
          </h1>
          <div>
            <ul className='flex gap-2'>
              {menus.map((menu): any => {
                const { label, link } = menu;
                return (
                  <li>
                    <a className='px-2' href={link}>
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div>
            <input
              type='text'
              placeholder='Pencarian'
              className='input w-[400px] h-8 max-w-sm border-base-300 rounded-xl'
            />
          </div>
          <div>
            <ul className='menu menu-horizontal'>
              <li>
                <a className='rounded-xl'>
                  <IoBagOutline />
                </a>
              </li>
              <li>
                <a className='rounded-xl'>
                  <IoHeartOutline />
                </a>
              </li>
              <li>
                <a className='rounded-xl'>
                  <IoPersonOutline />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
