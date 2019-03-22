import React, { useState, useEffect } from 'react';
import Windows from './Windows';
import Home from './Home';
import Bluescreen from './Bluescreen';


const App = React.memo(
    function App() {
        let [currentView, setCurrentView] = useState(0);
        const views = [
            <Home start={() => {
                setCurrentView(1);
                let i = setInterval(() => { setCurrentView(2) }, 15000);
                let j = setInterval(() => { setCurrentView(0); clearInterval(i) }, 18000);
                let k = setInterval(() => { clearInterval(j); clearInterval(k) }, 20000);
            }} />,
            <Windows />,
            <Bluescreen />,
        ]

        return views[currentView];
    }
)

export default App;
