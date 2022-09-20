import React from "react";
// TODO: import useFormik from formik library
import './index.css';
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if(!values.email) errors.email = "Field required";
      if(!values.password) errors.password = "Field required";
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <div>Email</div>
        <input name="email" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}

        <div>Password</div>
        <input name="password" id="pswField" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.password}</div>: null}
        
        <div>Submit</div>
        <input id="submitBtn" type="submit"></input>
  
      </form>
    </div>
  );
}

export default App;
