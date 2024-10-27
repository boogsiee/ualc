import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Scanner = () => {
    const [scanResult, setScanResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const scanner = new Html5QrcodeScanner("reader", {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
        });

        // Function to handle successful scan
        const success = (result) => {
            scanner.clear();
            setScanResult(result);
        };

        // Function to handle errors
        const error = (err) => {
            console.warn(err);
            setErrorMessage("Scanning failed. Please try again.");
        };

        // Start the scanner
        scanner.render(success, error);

        // Cleanup function to stop the scanner
        return () => {
            scanner.clear(); // Clear the scanner when the component unmounts
        };
    }, []);

    return (
        <div className="scanner">
            <h2>QR Code Scanner</h2>
            <div className="scanner-div">
                {scanResult ? (
                    <div>
                        {scanResult.includes("http") ? (
                            <>
                                <h4>Link:</h4>
                                <a href={scanResult} target="_blank" rel="noopener noreferrer">{scanResult}</a>
                            </>
                        ) : (
                            <>
                                <h4>Success:</h4>
                                <p>{scanResult}</p>
                            </>
                        )}
                    </div>
                ) : (
                    <div id="reader"></div>
                )}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>

            <button className="back-btn" type="button" onClick={() => navigate("/home")}>
                Back
            </button>
        </div>
    );
};

export default Scanner;
