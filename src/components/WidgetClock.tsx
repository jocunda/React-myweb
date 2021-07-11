import './Widgetclock.css';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import { setInterval } from 'timers';

interface DegProps {
    degree: number
}

export const DivDeg = styled.div<DegProps>`
 transform:rotate(${props => props.degree}deg)
`;

function Eclock() {
    let newdate = new Date(),
        h = newdate.getHours(),
        m = newdate.getMinutes(),
        s = newdate.getSeconds()

    let hour1 = h * 30 + m * (360 / 720),
        minute1 = m * 6 + s * (360 / 3600),
        second1 = s * 6

    return { hour1, minute1, second1 }
}

export default function WidgetClock() {

    function Clock() {
        const { hour1, minute1, second1 } = Eclock()
        const [hour, setHour] = useState(hour1)
        const [minute, setMinute] = useState(minute1)
        const [second, setSecond] = useState(second1)

        useEffect(() => {

            setInterval(function () {
                const { hour1, minute1, second1 } = Eclock()
                setHour(hour1)
                setMinute(minute1)
                setSecond(second1)
            }, 1000)
        }, []);

        return <>
            <div>
                <DivDeg className="hour-hand" degree={hour} />
                <DivDeg className="minute-hand" degree={minute} />
                <DivDeg className="second-hand" degree={second} />
            </div>
        </>
    }

    function DateCal() {
        let weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
            d = new Date(),
            date = d.getDate(),
            month = d.getMonth() + 1,
            year = d.getFullYear()

        const day = weekday[d.getDay()];

        return <>
            <div>
                <div className="info date">{date}/{month < 9 ? '0' + month : month}/{year}</div>
                <div className="info day">{day}</div>
            </div>

        </>
    }



    function Dial() {
        let count = [];
        for (let i = 0; i < 60; i++) {
            count[i] = 6 * i
        }
        return <>
            {count.map((deg) => <DivDeg className="diallines" degree={deg} />)}
        </>
    }


    return <>
        <div className="clock">
            <DateCal />
            <div className="dot"></div>
            <Clock />
            <div>
                <span className="h3">3</span>
                <span className="h6">6</span>
                <span className="h9">9</span>
                <span className="h12">12</span>
            </div>
            <Dial />
        </div>
    </>
}