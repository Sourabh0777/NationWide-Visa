import React from 'react';
import "./Feed.css"
// Material Ui
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import NearMeIcon from '@mui/icons-material/NearMe';

function Feed() {
  return (
    <div className='feed'>
      <div className='feed_heading_outerBorder'>
        <div className='feed_heading_innerBorder'>
          <h2>Your <br /> <span style={{ color: "#FF0000", fontSize: "38px" }}>"Study in Canada"</span>
            <br />Expert</h2>
        </div>
      </div>

      <div className='feed_secondHeading'>
        <div className='feed_secondHeading_headingOne'>
          <h4>Indian largest Canadian Education <br /> Counselling Seminar</h4>
        </div>
      </div>
      <div className='feed_subHeadings'>
        <div className='feed_subHeadings_one'>
          <h2>LIMITED SEATS</h2>
        </div>
        <div className="feed_subHeadings_two">
          <h2>Book Your Slots Now!</h2>
        </div>
      </div>
      <div className="feed_schedule_box_one">
        <div className="feed_schedule_box_one_details">
          <CalendarMonthIcon /> <h2>18 Sept 2022</h2>
        </div>
        <div className="feed_schedule_box_one_details">
          <AccessAlarmsIcon /><h2>11:00 Am Onwards</h2>
        </div>
        <div className="feed_schedule_box_one_details">
          <NearMeIcon /> <h2>Eros Hotel, NehruPlace, New Delhi</h2>
        </div>
      </div>
    </div>
  )
}

export default Feed;
