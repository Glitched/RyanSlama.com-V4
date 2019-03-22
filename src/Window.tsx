import React, { ReactNode } from 'react';
import { Rnd } from "react-rnd";

type stringChild = {
    children: string
}

interface TitleBarButtonProps {
    children: ReactNode
    f: Function;
}
function TitleBarButton(props: TitleBarProps) {
    return <span
        className="TitleBarButton"
        onClick={() => props.f()}>
        {props.children}
    </span>
}

interface TitleBarProps {
    children: string;
    f: Function;
}
function TitleBar(props: TitleBarProps) {
    return <span className="TitleBar">
        <span className="titleBarTitle">{props.children}</span>
        <TitleBarButton f={() => props.f({ type: "minimize" })}>⎼</TitleBarButton>
        <TitleBarButton f={() => props.f({ type: "maximize" })}>❏</TitleBarButton>
        <TitleBarButton f={() => props.f({ type: "close" })}>X</TitleBarButton>
    </span >
}

function MenuItem(props: stringChild) {
    return <span className="MenuItem">{props.children}</span>
}

function MenuBar(props: { f: Function }) {
    return (
        <div onClick={() => props.f()}>
            <MenuItem>File</MenuItem>
            <MenuItem>Edit</MenuItem>
            <MenuItem>View</MenuItem>
            <MenuItem>Options</MenuItem>
            <MenuItem>Help</MenuItem>
        </div>
    )
}

export interface AppWindow {
    title: string;
    isMinimized: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
    content: ReactNode;
    key: number;
}

interface WindowProps extends AppWindow {
    isActive: boolean;
    f: Function
}

export function Window(props: WindowProps) {
    return (
        <Rnd
            className={["Window", props.isActive ? "active" : ""].join(" ")}
            default={{ x: props.x, y: props.y, width: props.width, height: props.height }}
            minWidth={300}
            minHeight={240}
            dragHandleClassName="titleBarTitle"
            onDragStop={(e, d) => props.f({ type: "setPos", x: d.x, y: d.y })}
            onResizeStop={(e, dir, ref, d) => props.f({ type: "setSize", width: d.width, height: d.height })}
        >
            <TitleBar f={props.f}>{props.title}</TitleBar>
            <MenuBar f={() => props.f({ type: "getFocus" })} />
            <div onClick={() => props.f({ type: "getFocus" })} className="fill">
                {props.content}
            </div>
        </Rnd >
    );
}
