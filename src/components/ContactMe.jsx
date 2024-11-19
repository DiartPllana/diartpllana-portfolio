import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
        };

        emailjs.send('service_0472qmt', 'template_96aqyav', templateParams, 'M3nI1W9TAdmqA3Ao7')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                // Show success toast
                toast.success('Your message has been sent successfully!');
                // Reset form fields
                setFormData({ name: '', email: '', phone: '', message: '' });
            })
            .catch((err) => {
                console.error('FAILED...', err);
                // Show error toast
                toast.error('Failed to send your message. Please try again later.');
            });
    };

    return (
        <div className="contactMe">
            <h1>Love to Hear From You, Get in Touch!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send</button>
            </form>
            <ToastContainer /> {/* Toast container for notifications */}
        </div>
    );
}