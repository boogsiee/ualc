import React from 'react';
import Scan from '../Components/Scan';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';


const Scanner = () => {
  return (
    <div>
        <div className='scan-main'>
            <Header/>
            <div className='body'>
               <Sidebar/>
                <div>
                  <Scan/>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Scanner