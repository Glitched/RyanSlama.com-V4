import React from 'react';

// interface TaskBarProps {
//     children: ReactNode[];
//     f: Function;
//     startActive: boolean;
//     toggleStart: Function;
// }
function StartMenuItem(props: {
    reducer: Function,
    program: String,
    displayName?: String,
    icon: string
}) {
    return <div
        className="startMenuItem"
        onClick={() => props.reducer()({ type: "launch", title: props.program })}
    >
        <img src={props.icon} className="startMenuItemIcon" />
        <span>{props.displayName || props.program}</span>
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
            <StartMenuItem program="Internet Explorer" icon="/icons/msie.png" reducer={() => props.reducer} />
            <StartMenuItem program="Notepad" icon="/icons/notepad.png" reducer={() => props.reducer} />
            <StartMenuItem displayName="PDF Viewer" icon="/icons/pdf.png" program="Resume.pdf" reducer={() => props.reducer} />
            <StartMenuItem program="Getting Started" icon="/icons/help.png" reducer={() => props.reducer} />
            <StartMenuItem program="About Me" icon="/icons/about.png" reducer={() => props.reducer} />
        </ul>
    </div >
}
