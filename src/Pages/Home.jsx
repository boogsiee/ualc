import React from 'react';
import Overview from '../Components/Overview';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';


const Home = () => {
  return (
    <div>
        <div className='face-main'>
            <Header/>
            <div className='body'>
                <Sidebar/>
                <div className='main-content'>
                    <h2>Welcome!</h2>
                    <p>Overview of our Cadets</p> <br/>
                    <Overview />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home