import React from 'react';
import { Link } from 'react-router-dom';
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Scan = () => {
    const [scanResult, setScanResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

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
                <div className='scan-content'>
                    <div className="scanner">
                        <h2>QR Code Scanner</h2>
                        <div className="scanner-div">
                            {scanResult ? (
                            <div>
                                {scanResult.includes("http") ? (
                                <>
                                    <h4>Link:</h4>
                                    <a href={scanResult}>{scanResult}</a>
                                </>
                                ) : (
                                <>
                                    <h4>Success:</h4>
                                    <p>{scanResult}</p>
                                </>
                                )}
                            </div>
                            ) : (
                            <div id="reader"/>
                            )}
                        </div>

                    <button className="back-btn" type="button" onClick={() => navigate("/")}>
                        Back
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Scan