import React, { ReactNode } from 'react';

interface program {
    height: number;
    width: number;
    content: (f: Function) => ReactNode;
}

export const Programs: { [key: string]: program; } = {
    "Getting Started": {
        height: 320,
        width: 500,
        content: (f) => (
            <div className="about">
                <h1>Welcome!</h1>
                This site has been a small pocket project of mine. <br /><br />
                Feel free to explore starting with the icons on the left or the Start menu.
                It's still in it's early stages, so future additions are planned.
            </div>
        )
    },
    "Internet Explorer": {
        height: 480,
        width: 620,
        content: (f) => (
            <div className="fill">
                <div className="overlay" />
                <iframe className="browser" title="Internet Explorer" src="https://RyanSlama.com" />
            </div>
        )
    },
    "About Me": {
        height: 280,
        width: 460,
        content: (f) => (
            <div className="about">
                <h1>Ryan Slama</h1>
                I’m a Software Engineer on Slack's Product Security Foundations team.
                I like weird music, modern board games, podcasts, and oxford commas.
            </div>
        )
    },
    "Notepad": {
        height: 400,
        width: 400,
        content: (f) => (<textarea />)
    },
    "Hint.txt": {
        height: 400,
        width: 400,
        content: (f) => (
            <textarea defaultValue="The blue screen isn't inevitable. You have more levels to discover." />
        )
    },
    "Resume.pdf": {
        height: 700,
        width: 450,
        content: (f) => (
            <div className="fill">
                <div className="overlay" />
                <iframe className="browser" title="Resume.pdf" src="Resume.pdf" />
            </div>)
    },
    "RS-DOS Prompt": {
        height: 700,
        width: 450,
        content: (f) => (
            <div className="cmd">
                <span>Ryan &lt;R&gt; Slama 98</span>
                <span>  &lt;C&gt;Copyright Ryan Slama 1998-Present</span>
                <br />
                <span>C:\&gt;</span>
            </div>)
    },
    "Critical Update Notification": {
        height: 320,
        width: 600,
        content: (f) => (
            <div className="updater">
                <p>New critical updates are available for your computer. Ryan strongly recommends that you install these updates now. </p>
                <p>To install these updates, click "Update Now." Windows Update will guide you through the installation process. </p>
                <p>If you would like to postpone installation for 24 hours, click "Notify Me Later." This message will appear tomorrow when you connect to the Internet. Postponing installation of critical updates is not recommended. </p>
                <div className="buttons">
                    <button onClick={(e) => {
                        e.stopPropagation()
                        f({ type: "close" });
                    }}>Notify Me Later</button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            f({ type: "update" });
                        }}> Update Now </button>
                </div>
            </div >)
    }
}
