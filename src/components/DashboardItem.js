import React from 'react';

const DashboardItem = ({backgroundImage, backgroundColor, statsData, period}) => {

  return (
    <div className='dashboard-item-container'>
      <div className="photo-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: backgroundColor
        }}>
      </div>
      <div className="stats-container">
        <div className="title-details flex-row">
          <p className="title">Work</p>
          <img src="/icon-ellipsis.svg" alt="details-icon" className="details"/>
        </div>
        <div className="data flex-column">
          <p className="current-data">{statsData.current}hrs</p>
          <p className="previous-data">Last {period} - {statsData.previous}hrs</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardItem
