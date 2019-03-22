import React, { ReactNode } from 'react';

interface program {
    height: number;
    width: number;
    content: ReactNode;
}

export const Programs: { [key: string]: program; } = {
    "Getting Started": {
        height: 320,
        width: 500,
        content: (<div className="about">
            <h1>Welcome!</h1>
            This site has been a small pocket project of mine. <br /><br />
            Feel free to explore starting with the icons on the left or the Start menu.
            It's still in it's early stages, so future additions are planned.
        </div>)
    },
    "Internet Explorer": {
        height: 400,
        width: 600,
        content: (
            <div className="fill">
                <div className="overlay" />
                <iframe className="browser" src="https://RyanSlama.com" />
            </div>
        )
    },
    "About Me": {
        height: 320,
        width: 500,
        content: (<div className="about">
            <h1>Ryan Slama</h1>
            I’m a Computer Science Junior at Cornell. This summer, I’ll be  on Slack’s Product Security team as a Kleiner Perkins Engineering Fellow.
I’m interested in weird music, modern board games, interesting podcasts, and oxford commas.
        </div>)
    },
    "Notepad": {
        height: 400,
        width: 400,
        content: (<textarea />)
    },
    "Hint.txt": {
        height: 400,
        width: 400,
        content: (<textarea defaultValue="The blue screen isn't inevitable. You have more levels to discover." />)
    },
    "Resume.pdf": {
        height: 700,
        width: 450,
        content: (
            <div className="fill">
                <div className="overlay" />
                <iframe className="browser" src="Resume.pdf" />
            </div>)
    }
}
