import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Billing',
    path: '/billing',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Billing Report',
    path: '/billingReport',
    icon: <IoIcons.IoIosBook />,
    cName: 'nav-text'
  },
  {
    title: 'Delivery',
    path: '/delivery',
    icon: <FaIcons.FaTruck />,
    cName: 'nav-text'
  },
  {
    title: 'Delivery Report',
    path: '/deliveryReport',
    icon: <FaIcons.FaNewspaper />,
    cName: 'nav-text'
  },
];
