import React from 'react'
import Sidebarr from './adminComponents/Sidebarr'
import '../../assets/css/Admin.css'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'
import usersList from '../../assets/others/usersList.json'
import AdminUsers from './AdminUsers';
function Admindashboard() {
  const chartSetting = {
    xAxis: [
      {
        label: 'Orders Placed',
      },
    ],
    width: 500,
    height: 400,
  };
  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: 'Jan',
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: 'Fev',
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: 'Mar',
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: 'Apr',
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: 'May',
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: 'June',
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: 'July',
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: 'Aug',
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: 'Sept',
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      seoul: 55,
      month: 'Oct',
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      seoul: 48,
      month: 'Nov',
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: 'Dec',
    },
  ];
  
  const valueFormatter = (value) => `${value} orders`;
  return (
    <>
<Sidebarr/>
<div className='admin-home-container'>
<div className='main-cont'>
<div className='main-ti'>
    <h2>DASHBOARD</h2>
</div>
<div className='main-c'>
    <div className='card1'>
        <div className='card1-inner'>
            <p className='box'>TOTAL EMPLOYEES</p>
            <BsPeopleFill className='card1_icon'/>

        </div>
        <h1>300</h1>
    </div>
    <div className='card1'>
        <div className='card1-inner'>
            <p className='box'>ORDERS RECIEVED</p>
            <BsFillGrid3X3GapFill className='card1_icon'/>
        </div>
        <h1>500</h1>
    </div>
    <div className='card1'>
        <div className='card1-inner'>
            <p className='box'>ORDERS DISPATCHED</p>
            <BsFillArchiveFill className='card1_icon'/>

        </div>
        <h1>240</h1>
    </div>
    <div className='card1'>
        <div className='card1-inner'>
            <p className='box'>TOTAL EARNINGS</p>
            <BsFillBellFill className='card1_icon'/>
        </div>
        <h1>39840</h1>
    </div>
</div>
</div>

<div className='admin-charts'>
<h2>ORDER STATS</h2>
<div className='admin-charts1'>
<BarChart
dataset={dataset}
yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
series={[{ dataKey: 'seoul', label: 'Orders Recieved (2023)', valueFormatter }]}
layout="horizontal"
{...chartSetting}
/>
<PieChart
series={[
  {
    data: [
      { id: 0, value: 40, label: 'Cake' },
      { id: 1, value: 20, label: 'Sweets' },
      { id: 2, value: 20, label: 'Fashion' },
      { id: 3, value: 10, label: 'Home & Living' },
      { id: 4, value: 10, label: 'Flowers' },
    ],
  },
]}
width={400}
height={200}
/>
</div>
</div>
{/*<AdminUsers/> */} 
</div>
    </>
  )
}

export default Admindashboard