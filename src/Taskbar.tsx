import React, { ReactNode, useState, useEffect } from 'react';

function Clock() {
    let [time, setTime] = useState(
        new Date().toLocaleString("en-US", { hour: "2-digit", minute: "2-digit" })
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString("en-US", {
                hour: "2-digit",
                minute: "2-digit"
            }))
        }, 1000);
        return () => clearInterval(interval);
    })

    return <div className="clock"> {time} </div>
}

interface TaskBarProps {
    children: ReactNode[];
    f: Function;
    startActive: boolean;
    toggleStart: Function;
}

export function TaskBar(props: TaskBarProps) {
    return <div className="TaskBar">
        <div
            className={"start button " + (props.startActive ? "active" : "inactive")}
            onClick={() => props.toggleStart()}>
            ❖ Start
        </div>
        {props.children}
        <Clock />
    </div >
}
