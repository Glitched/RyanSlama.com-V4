import React, { ReactNode, useState, useEffect } from 'react';

function SysTray(props: { toggleWinamp: () => void, f: Function }) {
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

    return <div className="tray">
        <img className="trayIcon" src="/icons/speaker.png" alt="Mini Player" onClick={() => props.toggleWinamp()} />
        <img className="trayIcon" src="/icons/update.png" alt="System Update" onClick={() => props.f()({
            type: "launch",
            title: "Critical Update Notification"
        })} />
        <span className="clock"> {time} </span>
    </div>
}

interface TaskBarProps {
    children: ReactNode[];
    f: Function;
    startActive: boolean;
    toggleStart: Function;
}

export function TaskBar(props: TaskBarProps) {
    let [showWinamp, setWinamp] = useState(false);

    return <div className="TaskBar">
        <div
            className={"start button " + (props.startActive ? "active" : "inactive")}
            onClick={() => props.toggleStart()}>
            ❖ Start
        </div>
        {props.children}
        <div className={!showWinamp ? "winamp" : "winampVisible"}>
            <iframe
                title="Mini Player"
                className="browser"
                src="https://open.spotify.com/embed/user/theslama/playlist/2xXLjFAhpmc7rSW5h2bzup"
                allow="encrypted-media"
            />
        </div>
        <SysTray toggleWinamp={() => setWinamp(!showWinamp)} f={props.f} />
    </div >
}
