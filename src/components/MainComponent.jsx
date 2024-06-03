import './../cirrus-all.css'
import { useRef } from 'react';

import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import TechComponent from './TechComponent';
import TeamComponent from './TeamComponent';
import WatchComponent from './WatchComponent';
import AboutComponent from './AboutComponent';
import DownloadComponent from './DownloadComponent';
import GradioComponent from './GradioComponent';
import EntranceComponent from './EntranceComponent';


export default function MainComponent() {

    const teamComp = useRef(null);
    const techComp = useRef(null);
    const aboutComp = useRef(null);
    const watchComp = useRef(null);
    const homeComp = useRef(null);
    const demoComp = useRef(null);
    const sourcesComp = useRef(null);

    return (
        <div className='main-component'>
            <HeaderComponent
                teamComp={teamComp}
                techComp={techComp}
                watchComp={watchComp}
                homeComp={homeComp}
                demoComp={demoComp}
                sourcesComp={sourcesComp}
            />
            <div className="others-component">
                <EntranceComponent myref={homeComp}/>
                <AboutComponent myref={aboutComp}/>
                <WatchComponent myref={watchComp}/>
                <GradioComponent myref={demoComp}/>
                <TechComponent myref={techComp}/>
                <TeamComponent myref={teamComp}/>
                <DownloadComponent myref={sourcesComp}/>
            </div>
            <FooterComponent/>
        </div>
    );
}