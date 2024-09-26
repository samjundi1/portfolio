import {Link} from 'react-router-dom';

export default function Layout(){
   return( 
<>
<h1>My Portfolio</h1>
<nav>
   <Link to="/">Welcome</Link> | <Link to="/aboutme">About Me</Link> | <Link to="/projects">Projects</Link> | <Link to="/Services">Services</Link>|<Link to="/ContactMe">Contact Me</Link>
</nav>
<br/>
<hr/>
</>
   );
};
