// ContactMe.jsx
import  { useState, useEffect } from 'react';

export default function ContactMe(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        mobile: ''
      });

      useEffect(() => {
        document.title = "Form Submission"; 
      }, []);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your Contacting me!\n\nHere is the information you provided:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nMessage: ${formData.message}`);
      };

    return (

        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    )
    


    //return(<p>Contat Me</p>)

};