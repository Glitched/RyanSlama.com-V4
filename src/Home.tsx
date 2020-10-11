import React from 'react';
import './Home.scss';

import { spotifyData } from './spotify';
import { recommends } from './recommends';


const Home = function Home(props: { start: Function }) {
    return <div id="home">
        <header>
            <section id="info">
                <h1>Hey, I'm Ryan</h1>
                <p>I’m an Associate Software Engineer on Slack's Product Security Foundations team, where I interned the past two summers.
                I'm a CS grad from Cornell and 2019 Kleiner Perkins Engineering Fellow.
                I like weird music, modern board games, podcasts, and oxford commas.
                </p>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="/Resume.pdf">Resume</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/RyanSlama">LinkedIn</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Glitched">GitHub</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ryan.slama">Facebook</a></li>
                </ul>
            </section>
            <aside>
                <img src="/RyanSlama.jpg" id="profilePic" alt="Ryan Slama" />
            </aside>
        </header>
        <div id="spotify">
            <div className="spotifyHeader">
                <h2>Stalk me on Spotify</h2>
                <p>Or just check out what I’ve been listening to lately</p>
            </div>
            <ul>
                {spotifyData.items.map((artist, i) => {
                    const width = document.body.clientWidth;
                    if (width > 1150 || (width > 550 && i < 20) || i < 12) {
                        return (<li className="artist" key={artist.id}>
                            <img src={artist.images[1].url} alt={"Photo of " + artist.name} />
                            <a target="_blank" rel="noopener noreferrer" href={artist.uri}>{artist.name}</a>
                        </li>)
                    }
                    return null;
                })}
            </ul>
        </div>
        <div id="talks">
            <h2>Talks <br />I've presented</h2>
            <ul>
                {recommends.map(r =>
                    <li key={r.title}>
                        <span className="title">{
                            r.href
                                ? <a target="_blank" rel="noopener noreferrer" href={r.href}>
                                    {r.title}
                                </a>
                                : r.title
                        }
                        </span>
                        <span className="event"> {r.event} </span>
                        <span className="description">{r.description}</span>
                    </li>
                )}
            </ul>
        </div>
        <footer>Ryan Slama ©&nbsp;2020</footer>
        <div className={"startButton"} onClick={() => props.start()}> <span className="spinner">❖</span> Start </div>
    </div>;
}

export default Home;
