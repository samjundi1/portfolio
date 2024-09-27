//aboutme.jsx
//import   './AboutMe.css';
import profileImage from '../../../assets/image.jpeg';  
export default function AboutMe() {
  return (
    <div style={styles.container}>
      <h1>About Me</h1>
      <img src={profileImage} alt="Profile" style={styles.image} />
      <p style={styles.text}>
        Hello, I’m Samer Aljundi, a seasoned project manager with over 12 years of experience in 
        delivering innovative solutions across AI, data science, and full-stack development. 
        Passionate about leveraging technology to solve real-world problems and create meaningful change.
      </p>
    </div>
  );
};



const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  image: {
    width: '200px',
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
