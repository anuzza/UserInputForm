import React, {useEffect, useState} from "react";


const SimpleInput = (props) => {

  
  const[enteredName, setEnteredName] = useState('');
  
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

   
  const enteredNameisValid = enteredName.trim()!=="";
  
  const nameInputisInvalid = !enteredNameisValid && enteredNameTouched;

  let formIsValid = false;


    if(enteredNameisValid){
      formIsValid = true;
    }


  const nameInputChangeHandler = event =>{
    setEnteredName(event.target.value);
    
  };

  const nameInputBlurHandler = event =>{
    setEnteredNameTouched(true);

    
  };

  const formSubmissionHandler =event =>{
    event.preventDefault();

    setEnteredNameTouched(true);

    if(!enteredNameisValid){      
      return;
    }
    console.log(enteredName);   

    setEnteredName("");
    setEnteredNameTouched(false);
    // nameInputRef.current.value =""; => DONT MANIPULATE THE DOM (NOT IDEAL)


  };


  const nameInputClasses = nameInputisInvalid? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'  value = {enteredName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler}/>
        {nameInputisInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled= {!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
