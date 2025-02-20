import React, { useState, useEffect } from 'react';

const CheckInGuide = () => {
    const [property, setProperty] = useState('Green Surabaya Homey');
    const [guestName, setGuestName] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const propertyParam = params.get('property');
        const guestParam = params.get('guest');
        const checkInParam = params.get('checkin');
        const checkOutParam = params.get('checkout');

        if (propertyParam) setProperty(propertyParam);
        if (guestParam) setGuestName(guestParam);
        if (checkInParam) setCheckIn(checkInParam);
        if (checkOutParam) setCheckOut(checkOutParam);
    }, []);

    return (
        <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-4 px-3 sm:py-8 sm:px-4">
            {/* Exactly the same content as in the index.html */}
            {/* Copy the entire return block from the index.html */}
        </div>
    );
};

export default CheckInGuide;
