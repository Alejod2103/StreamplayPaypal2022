import { useEffect, useState } from "react"
import InputField from './Components/InputField.js'
import SelectField from "./Components/SelectField.js";
import emailjs from 'emailjs-com';
import './Form.css'

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    telf: '',
    message: '',
    user: '',
    role: '',
    password: '',
    repassword: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_ae51j99', 'template_jhj635y', values, 'user_Yuqa0U8GSg0rBG8ka2thS')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          telf: '',
          message: '',
          user: '',
          password: '',
          repassword: '',
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div className="Back-White">
    <div className="Back-Blue">
      <div className="BoxCont">
        <h1 className="textOne">Crea tu usuario</h1>
          <InputField value={values.fullName} handleChange={handleChange} label="Nombre" name="fullName" type="text" placeholder="John Doe" />
          <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
          <InputField value={values.telf} handleChange={handleChange} label="Telefono" name="telf" type="text" placeholder="jphn@example.com" />
          <InputField value={values.user} handleChange={handleChange} label="Usuario" name="user" type="text" placeholder="jphn@example.com" />
          <InputField value={values.password} handleChange={handleChange} label="Contraseña" name="password" type="password" placeholder="jphn@example.com" />
          <InputField value={values.repassword} handleChange={handleChange} label="Repetir Contraseña" name="repassword" type="password" placeholder="jphn@example.com" />
          <SelectField handleChange={handleChange} name="role" label="Paquete" />
      </div>
    </div>
    </div>


  )
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>your message submitted successfully</p>
  </div>
)

export default ContactForm