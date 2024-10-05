"use client"; // Ensure this is a client component

import React, { useEffect, useState } from 'react';

const CurrentDateTime = () => {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setDateTime(now.toLocaleString([], { 
                year: 'numeric', 
                month: 'numeric', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: true
            }));
        };

        updateDateTime(); // Set the initial time
        const interval = setInterval(updateDateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div >
            <div>
                <p className='font-bold text-pretty'>{dateTime}</p>
            </div>
        </div>
    );
};

export default CurrentDateTime;
