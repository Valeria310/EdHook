import React, { useState } from "react";
import Calendar from "moedim";
import c from "./MyCalendar.module.css";

export const MyCalendar = () => {
    const [value] = useState(new Date());
    const handleClick = (e) => {
        console.log("click!", String(e).slice(8, 11));
    };
    return (
        <div className={c.calendar_wrapper}>
            <div className={c.info}>
                <h3 className={c.title}>Март</h3>
                <div className={c.calendar}></div>
            </div>
            <Calendar value={value} locale={"ru-Ru"} onChange={handleClick} />
        </div>
    );
};
