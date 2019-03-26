import React, { useState } from 'react';
import Windows from './Windows';
import Home from './Home';
import Bluescreen from './Bluescreen';


const App = React.memo(
    function App() {
        let [currentView, setCurrentView] = useState(1);
        const views = [
            <Home start={() => {
                setCurrentView(1);
                document.body.classList.add('containsWindows');
                let i = setInterval(() => { setCurrentView(2) }, 15000);
                let j = setInterval(() => {
                    setCurrentView(0);
                    clearInterval(i);
                    document.body.classList.remove('containsWindows');
                }, 18000);
                let k = setInterval(() => { clearInterval(j); clearInterval(k) }, 20000);
            }} />,
            <Windows update={() => {
                var killId = setTimeout(function () {
                    for (var i: any = killId; i > 0; i--) clearInterval(i)
                }, 10);
            }} />,
            <Bluescreen />,
        ]

        return views[currentView];
    }
)

export default App;
