import React, {useEffect, useState} from "react";
import useInput from "../hooks/use-input";


const SimpleInput = (props) => {

  const {value: enteredName, isValid: enteredNameisValid,  hasError: nameInputError, valueChangeHandler: nameChangeHandler, inputBlurHandler: nameBlurHandler, reset: resetName }= useInput(value =>value.trim() !== "");

  
  

  const[enteredEmail, setEnteredEmail]= useState('');

  const [enteredEmailTouched, setEnteredEmailTouched]= useState(false);

   
  
  const enteredEmailisValid = enteredEmail.trim()!== ""&& enteredEmail.match(    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


  
  

  const emailisInvalid = !enteredEmailisValid && enteredEmailTouched; 

  let formIsValid = false;


    if(enteredNameisValid && enteredEmailisValid){
      formIsValid = true;
    }


  const emailChangeHandler = event =>{
    setEnteredEmail(event.target.value);
  }

  const emailBlurHandler= event =>{
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler =event =>{
    event.preventDefault();

    if(!enteredNameisValid){      
      return;
    }
    console.log(enteredName);   

    setEnteredName("");
    setEnteredNameTouched(false);
    // nameInputRef.current.value =""; => DONT MANIPULATE THE DOM (NOT IDEAL)


  };


  const nameInputClasses = nameInputError ?'form-control invalid' : 'form-control';

  const emailClasses = emailisInvalid? 'form-control invalid': 'form-control';
  

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'  value = {enteredName} onChange={  nameChangeHandler} onBlur={nameBlurHandler}/>
        {nameInputError && <p className="error-text">Name must not be empty.</p>}
        </div>

        <div className={emailClasses}>
        <label htmlFor="email">E-mail Address</label>
        <input type = 'text' id = 'email' onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailisInvalid && <p className="error-text">Enter a valid email</p>}
        
        </div>

      
      
      <div className="form-actions">
        <button disabled= {!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
