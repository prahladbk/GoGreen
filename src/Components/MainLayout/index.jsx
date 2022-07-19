import React from 'react';
import AppDrawer from './AppDrawer';



function MainLayout(props) {
  return (
    <div className='flex flex-col h-full w-full min-h-screen mb-24 overflow-hidden'>
      <div className='flex flex-grow flex-col h-full w-full overflow-x-auto'>
          {props.children}
      </div>
      <AppDrawer />
    </div>
  );
}

export default MainLayout;
