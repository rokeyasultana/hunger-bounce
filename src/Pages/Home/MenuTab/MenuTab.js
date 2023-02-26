import React from 'react';
import { Tab } from '@headlessui/react'
import Breakfasts from '../Breakfast/Breakfasts';
import Lunches from '../Lunch/Lunches';
import Dinners from '../Dinner/Dinners';


const MenuTab = () => {
    return (
        <div >

<Tab.Group>
      <Tab.List className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-11 text-2xl font-semibold'>
        <Tab  className='text-red-500 no-underline hover:underline '>Breakfast</Tab>
        <Tab  className='text-red-500 no-underline hover:underline '>Lunch </Tab>
        <Tab className='text-red-500 no-underline hover:underline '>Dinner</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
            <Breakfasts></Breakfasts>
      
        </Tab.Panel>
        <Tab.Panel>
            <Lunches></Lunches>
        </Tab.Panel>
        <Tab.Panel>
            <Dinners></Dinners>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
        </div>
    );
};

export default MenuTab;