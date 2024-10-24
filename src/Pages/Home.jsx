import React from 'react';
import Overview from '../Components/Overview';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className='face-main'>
            <div className='header'>
                <img className="header-logo" src="rotc.png" alt="rotc"/>
                <div className='header-title'>
                    <p>University of Antique - Libertad Campus</p>
                    <p>Reserved Officer Training Corp</p>
                </div>
            </div>
            <div className='body'>
                <div className='sidebar'>
                    <Link to="/scan">
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
                    <div className='sideop'>
                        <img width="35" height="35" src="https://img.icons8.com/ios/50/day-view.png" alt="day-view"/>
                        <p5>Records</p5>
                    </div>

                    <Link to="/">
                        <div className='sideop'>
                            <img width="35" height="35" src="https://img.icons8.com/ios/50/exit--v1.png" alt="exit--v1"/>
                            <p5>Log Out</p5>
                        </div>
                    </Link>
                </div>
                <div className='main-content'>
                    <h2>Welcome!</h2>
                    <Overview />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home