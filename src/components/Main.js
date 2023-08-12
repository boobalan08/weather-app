import React from 'react'
import pic from '../assets/isebella.png';
import { BsThreeDots } from 'react-icons/bs';
import Chart from './Chart';
import WeatherData from './WeatherData';

const Main = () => {
  return (
   <div className="main">
    <header className='main_header flex justify-between mt-3'>
<div className='flex flex-col'>
  <span className='font-extrabold text-lg'>Welcome back Isebella!</span>
  <p className='text-sm px-1'>checkout today's weather information</p>
</div>
<div className='flex items-center'>
  <span className='px-3'><BsThreeDots size={24}/></span>
  <span><img src={pic} alt="isebella"/></span>
</div>
    </header>
    <section className='my-4'>
      <Chart/>
    </section>

    <section className='py-4'>
      <WeatherData/>
    </section>
   </div>
  )
}

export default Main