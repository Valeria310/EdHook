import React, { useState } from "react";
import Calendar from "moedim";
import c from "./MyCalendar.module.css";

export const MyCalendar = () => {
    const [value, setValue] = useState(new Date());
    return (
        <div className={c.calendar_wrapper}>
            <div className={c.info}>
                <h3 className={c.title}>Март</h3>
                <div className={c.calendar}></div>
            </div>
            <Calendar
                value={value}
                locale={"ru-Ru"}
                onChange={(d) => setValue(d)}
            />
        </div>
    );
};
