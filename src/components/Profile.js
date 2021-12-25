import React from 'react';
import { useState } from 'react';

const Profile = ({setTimePeriod}) => {
  const [dailyActiveBtn, setDailyActiveBtn] = useState(false)
  const [weeklyActiveBtn, setWeeklyActiveBtn] = useState(true)
  const [monthlyActiveBtn, setMonthlyActiveBtn] = useState(false)

  const changePeriodDaily = () => {
    setDailyActiveBtn(true)
    setWeeklyActiveBtn(false)
    setMonthlyActiveBtn(false)
    setTimePeriod("Daily")
  }

  const changePeriodWeekly = () => {
    setDailyActiveBtn(false)
    setWeeklyActiveBtn(true)
    setMonthlyActiveBtn(false)
    setTimePeriod("Weekly")
  }

  const changePeriodMonthly = () => {
    setDailyActiveBtn(false)
    setWeeklyActiveBtn(false)
    setMonthlyActiveBtn(true)
    setTimePeriod("Monthly")
  }

  return (
    <div className='profile-container flex-column'>
      <div className="user-info-container">   
        <div className="user-details-container flex-column">
          <img src='/image-jeremy.png' alt="" className='profile-photo'/>
          <div className="name-container">
            <p className="report-for">Report for</p>
            <p className="user-name">Jeremy Robson</p>
          </div>
        </div>
        <div className="time-period-container">
          <div className="time-periods flex-column">
            <button className={dailyActiveBtn ? 'active-btn' : 'not-active-btn'} onClick={changePeriodDaily}>Daily</button>
            <button className={weeklyActiveBtn ? 'active-btn' : 'not-active-btn'} onClick={changePeriodWeekly}>Weekly</button>
            <button className={monthlyActiveBtn ? 'active-btn' : 'not-active-btn'} onClick={changePeriodMonthly}>Monthly</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
