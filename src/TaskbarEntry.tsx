import React from 'react';
import { AppWindow } from './Window';

interface TaskbarEntryProps {
    w: AppWindow,
    f: Function
}

export const TaskbarEntry = React.memo(
    function TaskbarEntry(props: TaskbarEntryProps) {
        return <div
            className={["TaskBarEntry", "button", (props.w.isMinimized ? "minimized" : "visible")].join(" ")}
            onClick={() => props.f({ type: props.w.isMinimized ? 'unminimize' : 'minimize' })}
        >
            {props.w.title}
        </div>;
    }
)
