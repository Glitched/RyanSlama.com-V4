import React from 'react';

interface ItemProps {
    title: string;
    reducer: Function;
    icon?: string
}

function Item(props: ItemProps) {
    return <div
        className="desktopItem"
        tabIndex={1}
        onDoubleClick={() => props.reducer()({
            type: "launch",
            title: props.title
        })}
    >
        <span>
            <img className="desktopIcon" src={props.icon || "/icons/speaker.png"} />
            {props.title}
        </span>
    </div>
}

export function Desktop(props: { reducer: Function, hideStartMenu: Function }) {
    return <div className="desktopItems" onClick={() => console.log(props.hideStartMenu)}>
        <Item title="Getting Started" icon="/icons/help.png" reducer={() => props.reducer} />
        <Item title="Internet Explorer" icon="/icons/msie.png" reducer={() => props.reducer} />
        <Item title="About Me" icon="/icons/about.png" reducer={() => props.reducer} />
        <Item title="Notepad" icon="/icons/notepad.png" reducer={() => props.reducer} />
        <Item title="Resume.pdf" icon="/icons/pdf.png" reducer={() => props.reducer} />
        <Item title="Hint.txt" icon="/icons/hint.png" reducer={() => props.reducer} />
    </div >
}
