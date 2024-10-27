import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
        <div className='sidebar'>
                    <Link to="/home">
                        <div className='sideop'>
                            <img width="35" height="35" src="https://img.icons8.com/ios/50/home--v1.png" alt="home--v1"/>
                            <p5>Home</p5>
                        </div>
                    </Link>
                    <Link to="/scan">
                        <div className='sideop'>
                            <img width="35" height="35" src="https://img.icons8.com/cotton/64/qr-code--v2.png" alt="qr-code--v2"/>
                            <p5>Attendance</p5>
                        </div>
                    </Link>
                    <Link to="/records">
                        <div className='sideop'>
                            <img width="35" height="35" src="https://img.icons8.com/ios/50/day-view.png" alt="day-view"/>
                            <p5>Records</p5>
                        </div>
                    </Link>

                    <Link to="/">
                        <div className='sideop'>
                            <img width="35" height="35" src="https://img.icons8.com/ios/50/exit--v1.png" alt="exit--v1"/>
                            <p5>Log Out</p5>
                        </div>
                    </Link>
                </div>
    </div>
  )
}

export default Sidebar