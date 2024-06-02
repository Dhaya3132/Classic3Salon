import React, { useEffect } from 'react'
import { useState } from 'react'

function Timer({ initalDay = 2, initalHours = 0, initialMinutes = 30, initialSeconds = 0 }) {

    const [days, setDays] = useState(initalDay);
    const [hours, setHours] = useState(initalHours);
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const countdowninterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
                else {
                    if (hours > 0) {
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    }
                    else {
                        if (days > 0) {
                            setDays(days - 1);
                            setHours(23);
                            setMinutes(59);
                            setSeconds(59);
                        }
                        else {
                            clearInterval(countdowninterval);
                        }
                    }
                }
            }
        }, 1000);
        return () => clearInterval(countdowninterval);
    }, [minutes, seconds]);

    return (
        <div className="font-Poppins font-semibold text-center text-white">
            {days}D : {hours < 10 ? `0${hours}` : hours}H : {minutes < 10 ? `0${minutes}` : minutes}M : {seconds < 10 ? `0${seconds}` : seconds}S;
        </div>
    )
}

export default Timer;