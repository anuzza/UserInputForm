import React, {useState, useRef, useEffect} from "react";


const SimpleInput = (props) => {

  const nameInputRef = useRef('');

  const[enteredName, setEnteredName] = useState('');

  const [enteredNameisValid, setEnteredNameisValid]= useState(false);

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(()=>{
    if(enteredNameisValid){
      console.log("Name Input is valid!");
    }
  }, [enteredNameisValid])

  const nameInputChangeHandler = event =>{
    setEnteredName(event.target.value);

  };

  const nameInputBlurHandler = event =>{
    setEnteredNameTouched(true);

    if(enteredName.trim ()=== ''){
      setEnteredNameisValid(false)
      return;
    }
  
  }

  const formSubmissionHandler =event =>{
    event.preventDefault();

    setEnteredNameTouched(true);

    if(enteredName.trim ()=== ''){
      setEnteredNameisValid(false)
      return;
    }

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value
    console.log(enteredValue);

    setEnteredName("");
    // nameInputRef.current.value =""; => DONT MANIPULATE THE DOM (NOT IDEAL)


  };

  const nameInputisInvalid = !enteredNameisValid && enteredNameTouched;

  const nameInputClasses = nameInputisInvalid? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  ref = {nameInputRef}type='text' id='name'  value = {enteredName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler}/>
        {nameInputisInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
