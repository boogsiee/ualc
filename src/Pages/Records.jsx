import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import TroopsReview from '../Components/TroopsReview';



const Records = () => {
  return (
    <div>
      <div className='face-main'>
            <Header/>
            <div className='body'>
                <Sidebar/>
                <div className='main-content'>
                    <h2>Records</h2>
                    <TroopsReview/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Records