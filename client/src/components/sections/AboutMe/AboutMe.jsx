import profileImage from '../../../assets/image.jpeg';
import resume from '../../../assets/resume.pdf';


export default function AboutMe() {
  return (
    <div style={styles.container}>
      <h1>About Me</h1>
      <img src={profileImage} alt="Profile" style={styles.image} />
      <p style={styles.text}>
        Hello, I’m Samer Al Fattouhi Aljundi, a seasoned project manager with over 12 years of experience in
        delivering innovative solutions across AI, data science, and full-stack development.
        Passionate about leveraging technology to solve real-world problems and create meaningful change.
      </p>
      <a href={resume} download>
        <button className="hover">Resume</button>
      </a>
    </div>
  );
}
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
  },
  link: {
    width: 'fit-content',
    alignSelf: 'center',
  },

};
