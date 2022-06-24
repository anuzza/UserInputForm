
import useInput from "../hooks/use-input";


const BasicForm = (props) => {

  const {value: enteredFirstname, isValid: FnameValid, hasError:FnameError, valueChangeHandler: fnameChangeHandler, inputBlurHandler: fnameBlurHandler, reset: fnameReset }=useInput(value =>value.trim()!== "");

  const {value: enteredLastname, isValid: LnameValid, hasError:LnameError, valueChangeHandler: lnameChangeHandler, inputBlurHandler: lnameBlurHandler, reset: lnameReset }=useInput(value =>value.trim()!== "");

  const {value: enteredEmail, isValid: emailValid, hasError:emailError, valueChangeHandler: emailChangeHandler, inputBlurHandler: emailBlurHandler, reset: emailReset }=useInput(value =>value.includes('@'));

  let formIsValid = false;

  if(FnameValid && LnameValid && emailValid){
      formIsValid= true;
    };

  const formSubmitHandler=(event)=>{
    event.preventDefault();

    if(!FnameValid || !LnameValid || !emailValid){
      return;
    }

    

    fnameReset();
    lnameReset();
    emailReset();


  };

  const fnameClasses = FnameError? "form-control invalid": "form-control";

  const lnameClasses = LnameError?"form-control invalid": "form-control";

  const emailClasses = emailError? "form-control invalid": "form-control";





  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={fnameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstname} onChange={fnameChangeHandler} onBlur= {fnameBlurHandler}/>
          {FnameError && <p className= "error-text">FirstName must not be empty</p>}
        </div>
        <div className={lnameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value = {enteredLastname} onChange={lnameChangeHandler} onBlur={lnameBlurHandler}/>
          {LnameError && <p className= "error-text">LastName must not be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail}  onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailError && <p className= "error-text"> Enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};



export default BasicForm;
