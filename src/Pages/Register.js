import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

const Register = () => {
    const [formData, setFormData] = useState({
        student_id: '',
        first_name: '',
        last_name: '',
        email: '',
        contact_number: '',
        rotc_unit: '',
        qr_code: '',
        date_of_registration: '',
        username: '',
        password: '',
        role: 'student' // default role
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const qrCode = formData.qr_code || "GeneratedQRCode"; // Placeholder logic for QR code generation
        const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

        const submissionData = {
            ...formData,
            qr_code: qrCode,
            date_of_registration: currentDate
        };

        console.log("Submission Data:", submissionData); // Log the data to be sent

        try {
            const response = await fetch("/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(submissionData)
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
            } else {
                console.error("Error Response:", data); // Log the error response
                alert(data.error || "An unknown error occurred.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting your registration. Please try again.");
        }
    };

    return (
        <div className="reg-main" id="cover">
            <div className="reg-form">
                <div>
                    <Link to="/">Back</Link> <br />
                </div>
                <h3 id="cta-type3">UALC-ROTC Management System</h3>
                <p>Be a part of this experience. Fill your data here.</p>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="inpt">
                        <h4>Student ID</h4>
                        <input
                            id="log-inpt"
                            type="text"
                            name="student_id"
                            value={formData.student_id}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="inpt">
                        <h4>First Name</h4>
                        <input
                            id="log-inpt"
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="inpt">
                        <h4>Last Name</h4>
                        <input
                            id="log-inpt"
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <br />

                    <div className="inpt">
                        <h4>Email</h4>
                        <input
                            id="log-inpt"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="inpt">
                        <h4>Contact Number</h4>
                        <input
                            id="log-inpt"
                            type="text"
                            name="contact_number"
                            value={formData.contact_number}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <br />

                    <div className="inpt">
                        <h4>ROTC Unit</h4>
                        <input
                            id="log-inpt"
                            type="text"
                            name="rotc_unit"
                            value={formData.rotc_unit}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <br />

                    <div className="inpt">
                        <h4>Username</h4>
                        <input
                            id="log-inpt"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="inpt">
                        <h4>Password</h4>
                        <input
                            id="log-inpt"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <br />

                    <div className="log-btn-cont">
                        <button type="submit" className="log-btn">
                            <h3>Register</h3>
                        </button>
                    </div>
                </form>
                {formData.qr_code && (
                    <div>
                        <h4>Your QR Code:</h4>
                        <QRCodeSVG value={formData.qr_code} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
