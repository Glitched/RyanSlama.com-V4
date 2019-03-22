import React from 'react';

// interface TaskBarProps {
//     children: ReactNode[];
//     f: Function;
//     startActive: boolean;
//     toggleStart: Function;
// }
function StartMenuItem(props: { reducer: Function, program: String, displayName?: String }) {
    return <div
        className="startMenuItem"
        onClick={() => props.reducer()({ type: "launch", title: props.program })}
    >
        {props.displayName || props.program}
    </div>
}

export function StartMenu(props: { reducer: Function }) {
    return <div className="startMenu">
        <aside className="sideLogo">
            <span className="rotatedTitle">Ryan Slama
                <span className="year"> 98 </span>
            </span>
        </aside>
        <ul className="startMenuItems">
            <StartMenuItem program="Internet Explorer" reducer={() => props.reducer} />
            <StartMenuItem program="Notepad" reducer={() => props.reducer} />
            <StartMenuItem displayName="PDF Viewer" program="Resume.pdf" reducer={() => props.reducer} />
            <StartMenuItem program="Getting Started" reducer={() => props.reducer} />
            <StartMenuItem program="About Me" reducer={() => props.reducer} />
        </ul>
    </div >
}
