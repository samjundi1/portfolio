import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'; 

export default function Layout(){
   return( 
<div style={styles.container}>
<h1>My Portfolio</h1>
<p>
<img src={logo} alt="Logo" style={ styles.image } />
</p>
<nav>
   <Link to="/">Welcome</Link> | <Link to="/aboutme">About Me</Link> | <Link to="/projects">Projects</Link> | <Link to="/Services">Services</Link>|<Link to="/ContactMe">Contact Me</Link>
</nav>
<br/>
<hr/>
</div>
   );
};
const styles = {
   container: {
     textAlign: 'center',
     marginTop: '50px'
   },
   image: {
     width: '150px',
     borderRadius: '50%',
     marginBottom: '20px'
   },
   text: {
     fontSize: '18px',
     lineHeight: '1.6',
     maxWidth: '600px',
     margin: '0 auto'
   }
 };
 