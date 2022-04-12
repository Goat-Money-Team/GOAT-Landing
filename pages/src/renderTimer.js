import React from 'react';
import CountdownTimer from './countdownTimer';
import styles from '../../styles/Home.module.css';

export default function Timer() {
    const THREE_DAYS_IN_MS = 5 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return (
        <div>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
    );
}