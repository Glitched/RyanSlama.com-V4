import React from 'react';
import './Home.scss';

const Home = React.memo(
    function Home() {
        return <div id="bluescreen">
            <p>A problem has been detected and Windows has been shut down to prevent damage to your computer.</p>
            <p>If this is the first time you've seen this stop error screen, restart your computer. if this screen appears again, follow these steps:</p>
            <p>Check to make sure any new hardware or software is properly installed. I this is a new installation, ask your hardware or software manufacturer for and Windows updates you might need.</p>
            <p>If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode.</p>
            <p>Technical information:</p>
            <p>*** STOP: 0x000000FE (0x00000008, 0x000000006, 0x00000009, 0x847075cc)</p>
            <p>strt1.sys - Address G74H0000, DateStamp 4eh2534dh</p>
            <p>Beginning dump of physical memory</p>
            <p>Physical memory dump complete.</p>
            <p>Contact your system administrator or technical support group for further assistance.</p>

        </div>;
    }
)

export default Home;
