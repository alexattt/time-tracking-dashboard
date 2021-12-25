import React from 'react';
import { useState } from 'react';
import Profile from './components/Profile';
import DashboardItem from './components/DashboardItem';
import data from './local-json/data.json';
import './css/styles.scss';

const backgroundImages = ['/icon-work.svg', '/icon-play.svg', '/icon-study.svg', 
                          '/icon-exercise.svg', '/icon-social.svg', '/icon-self-care.svg'];
const backgroundColors = ['#ff8c66', '#56c2e6', '#ff5c7c', '#4acf81', '#7536d3', '#f1c65b'];

const App = () => {
  const [timePeriod, setTimePeriod] = useState('Weekly')

  return (
    <div className='main-container'>
      <div className="card-container">
        <Profile setTimePeriod={setTimePeriod}/>
        {data.map((item, value) => {
          if (timePeriod === "Daily") {
            return <DashboardItem key={item.title} backgroundImage={backgroundImages[value]} backgroundColor={backgroundColors[value]} 
                                  statsData={item.timeframes.daily} period={"Day"} title={item.title}/>
          }
          if (timePeriod === "Weekly") {
            return <DashboardItem key={item.title} backgroundImage={backgroundImages[value]} backgroundColor={backgroundColors[value]} 
                                  statsData={item.timeframes.weekly} period={"Week"} title={item.title}/>
          }
          if (timePeriod === "Monthly") {
            return <DashboardItem key={item.title} backgroundImage={backgroundImages[value]} backgroundColor={backgroundColors[value]} 
                                  statsData={item.timeframes.monthly} period={"Month"} title={item.title}/>
          }
        })}
      </div>
    </div>
  )
}

export default App