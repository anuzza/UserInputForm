import React, {useState, useRef} from "react";


const SimpleInput = (props) => {

  const nameInputRef = useRef('');

  const[enteredName, setEnteredName] = useState('');

  const [enteredNameisValid, setEnteredNameisValid]= useState(true);

  const nameInputChangeHandler = event =>{
    setEnteredName(event.target.value);

  };

  const formSubmissionHandler =event =>{
    event.preventDefault();

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

  const nameInputClasses = enteredNameisValid? 'form-control' : 'form-control invalid';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  ref = {nameInputRef}type='text' id='name'  value = {enteredName} onChange={nameInputChangeHandler}/>
        {!enteredNameisValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
