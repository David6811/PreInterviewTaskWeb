'use client'
import './CarDetails.css'; // Import the CSS file
import React, { useState, useEffect } from 'react';
import TableNormal from './TableNormal';
import TableInfo from './TableInfo';
import TableList from './TableList';

export default function CarDetails() {
    const [activeComponent, setActiveComponent] = useState<'normal' | 'info' | 'list' | null>(null);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 756) {
                setActiveComponent('list');
            } else if (width >= 756 && width < 1080) {
                setActiveComponent('info');
            } else {
                setActiveComponent('normal');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'normal':
                return <TableNormal />;
            case 'info':
                return <TableInfo />;
            case 'list':
                return <TableList />;
            default:
                return null;
        }
    };

    return (
        <div className="carDetailContainor">
            {renderComponent()}
        </div>
    );
}


