import React, { useState } from 'react';
import './Windows.scss';
import { Window, AppWindow } from './Window'
import { TaskBar } from './Taskbar'
import { TaskbarEntry } from './TaskbarEntry';
import { StartMenu } from './StartMenu';
import { Desktop } from './Desktop';
import { Programs } from './Programs'

// Brings a window to top by putting it in bottom of array
function bringToTop(idx: number, arr: AppWindow[]) {
    let topItem = arr.splice(idx, 1)
    return [...arr, topItem[0]]
}

function close(idx: number, arr: AppWindow[]) {
    arr.splice(idx, 1)
    return arr
}

function minimize(idx: number, arr: AppWindow[], shouldMinimize: boolean) {
    let min = arr.splice(idx, 1)
    let new_window = { ...(min[0]), isMinimized: shouldMinimize }
    return shouldMinimize
        ? [new_window, ...arr]
        : [...arr, new_window]
}

function maximize(idx: number, arr: AppWindow[]) {
    let min = arr.splice(idx, 1)[0]
    let new_window = min.width === document.body.clientWidth ?
        {
            ...min,
            x: 100,
            y: 100,
            width: Programs[min.title].width,
            height: Programs[min.title].height,
            key: Math.random()
        } : {
            ...min,
            x: 0,
            y: 0,
            width: document.body.clientWidth,
            height: document.body.clientHeight - 30,
            key: Math.random()
        }
    return [...arr, new_window]
}

function setPos(idx: number, arr: AppWindow[], x: number, y: number) {
    let min = arr.splice(idx, 1)[0]
    let new_window = { ...min, x: x, y: y }
    return [...arr, new_window]
}

function setSize(idx: number, arr: AppWindow[], x: number, y: number) {
    let min = arr.splice(idx, 1)[0]
    let new_window = { ...min, width: min.width + x, height: min.height + y }
    return [...arr, new_window]
}

function launch(arr: AppWindow[], title: string) {
    let new_window = {
        title: title,
        isMinimized: false,
        x: 100,
        y: 100,
        ...Programs[title],
        key: Math.random(),
    }
    return [...arr, new_window]
}

interface action {
    type: string
}

interface setPos extends action {
    x: number,
    y: number
}

interface setSize extends action {
    width: number,
    height: number
}

interface launch extends action {
    title: string;
}


const Windows = () => {

    const [windows, setWindows] = useState([{
        height: 400,
        isMinimized: false,
        key: Math.random(),
        title: "Internet Explorer",
        ...Programs["Internet Explorer"],
        x: document.body.clientWidth * 0.4,
        y: 52,
    }, {
        title: "Resume.pdf",
        isMinimized: false,
        x: document.body.clientWidth * 0.7,
        y: 122,
        ...Programs["Resume.pdf"],
        key: Math.random()
    }
        , {
        height: 400,
        isMinimized: false,
        key: Math.random(),
        title: "Notepad",
        ...Programs["Notepad"],
        x: document.body.clientWidth / 15,
        y: 405,
    }, {
        title: "Getting Started",
        isMinimized: false,
        x: document.body.clientWidth / 10,
        y: 200,
        ...Programs["Getting Started"],
        key: Math.random(),
    }
    ])

    const [showStartMenu, setShowStartMenu] = useState(false)
    const toggleStart = () => setShowStartMenu(!showStartMenu)

    function getReducer(i: number) {
        return (action: action) => {
            setShowStartMenu(false)
            const resolvers: { [s: string]: (() => AppWindow[]) } = {
                "close": () => close(i, windows),
                "maximize": () => maximize(i, windows),
                "minimize": () => minimize(i, windows, true),
                "unminimize": () => minimize(i, windows, false),
                "getFocus": () => bringToTop(i, windows),
                "setPos": () => {
                    const posAction = action as setPos;
                    return setPos(i, windows, posAction.x, posAction.y);
                },
                "setSize": () => {
                    const sizeAction = action as setSize;
                    return setSize(i, windows, sizeAction.width, sizeAction.height);
                },
                "launch": () => {
                    const launchAction = action as launch
                    return launch(windows, launchAction.title)
                }
            }
            action.type in resolvers && setWindows(resolvers[action.type]())
        }
    }


    return (
        <div className="Windows">
            {windows.filter((w) => !w.isMinimized)
                .map(((w, i) => <Window
                    {...w}
                    isActive={i == windows.length - 1}
                    key={w.key}
                    f={getReducer(i)}
                />))
            }
            <Desktop reducer={getReducer(-1)} />
            <TaskBar startActive={showStartMenu} toggleStart={toggleStart} f={getReducer}>
                {[...windows]
                    .map((w, i) => { return { index: i, window: w } })
                    .sort((a, b) => ((a.window.key == b.window.key) ? 0 : ((a.window.key > b.window.key) ? 1 : -1)))
                    .map((w) => <TaskbarEntry key={w.window.key} w={w.window} f={getReducer(w.index)} />)
                }
            </TaskBar>
            {showStartMenu && <StartMenu reducer={getReducer(-1)} />}
        </div>
    );
};

export default Windows;
