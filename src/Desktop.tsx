import React from 'react';

interface ItemProps {
    title: string;
    reducer: Function;
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
        <span> {props.title} </span>
    </div>
}

export function Desktop(props: { reducer: Function }) {
    return <div className="desktopItems">
        <Item title="Getting Started" reducer={() => props.reducer} />
        <Item title="Internet Explorer" reducer={() => props.reducer} />
        <Item title="About Me" reducer={() => props.reducer} />
        <Item title="Notepad" reducer={() => props.reducer} />
        <Item title="Resume.pdf" reducer={() => props.reducer} />
        <Item title="Hint.txt" reducer={() => props.reducer} />
    </div >
}
