import React from 'react';
import './Home.scss';

import { spotifyData } from './spotify';
import { recommends } from './recommends';


const Home = function Home(props: { start: Function }) {
    return <div id="home">
        <header>
            <section id="info">
                <h1>Hey, I'm Ryan</h1>
                <p>I’m a Computer Science Junior at Cornell. This summer, I’ll be  on Slack’s Product Security team as a Kleiner Perkins Engineering Fellow.
I’m interested in weird music, modern board games, interesting podcasts, and oxford commas. </p>
                <ul>
                    <li><a target="_blank" rel="noopener" href="/Resume.pdf">Resume</a></li>
                    <li><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/RyanSlama">LinkedIn</a></li>
                    <li><a target="_blank" rel="noopener" href="https://github.com/Glitched">GitHub</a></li>
                    <li><a target="_blank" rel="noopener" href="https://www.facebook.com/ryan.slama">Facebook</a></li>
                </ul>
            </section>
            <aside>
                <img src="/RyanSlama.jpg" id="profilePic" alt="Ryan Slama" />
            </aside>
        </header>
        <div id="spotify">
            <h2>Stalk Me On Spotify</h2>
            <p>Or just check out what I’ve been listening to lately</p>
            <ul>
                {spotifyData.items.map((artist, i) => {
                    if (document.body.clientWidth > 550 || i < 12) {
                        return (<li className="artist" key={artist.id}>
                            <img src={artist.images[1].url} alt="" />
                            <a target="_blank" rel="noopener" href={artist.uri}>{artist.name}</a>
                        </li>)
                    }
                })}
            </ul>
        </div>
        <div id="recommends">
            <h2>Ryan <br />Recommends</h2>
            <ul>
                {recommends.map(r =>
                    <li key={r.href}>
                        <span className="title">
                            <a target="_blank" rel="noopener" href={r.href}> {r.title} </a>
                        </span>
                        <span className="source">{r.source}</span>
                    </li>
                )}
            </ul>
        </div>
        <footer>Ryan Slama © 2019</footer>
        <div className={"startButton"} onClick={() => props.start()}> ❖ Start </div>
    </div>;
}

export default Home;
