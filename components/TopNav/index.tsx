import React from 'react';

const TopNav = () => {
  return (
    <div className='text-xs bg-base-300'>
      <div className='flex justify-between py-2 max-w-8xl mx-auto px-4 sm:px-6 md:px-8'>
        <div>Welcome</div>
        <ul className='flex gap-4'>
          <li>
            <a className='cursor-pointer text-base-content hover:text-primary'>
              Item 1
            </a>
          </li>
          <li>
            <a className='cursor-pointer text-base-content hover:text-primary'>
              Item 2
            </a>
          </li>
          <li>
            <a className='cursor-pointer text-base-content hover:text-primary'>
              Item 2
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
