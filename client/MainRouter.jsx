import {Route, Routes} from 'react-router-dom';
import Welcome from './src/components/Welcome';
import Projects from './src/components/Projects';
import Services from './src/components/Services';
import ContactMe from './src/components/ContactMe';
import Layout from './src/components/Layout';
import AboutMe from './src/components/sections/AboutMe/AboutMe';

export default function MainRouter  ()
    {
return (<div>
    <Layout/>
    <Routes>
        <Route exact path = "/" element= {<Welcome />} />
        <Route exact path = "/aboutme" element = {<AboutMe/>} />
        <Route exact path = "/projects" element = {<Projects />} />
        <Route exact path = "/services" element = {<Services />} />
        <Route exact path = "/contactme" element = {<ContactMe />} />

    </Routes>
</div>
    );
 };
