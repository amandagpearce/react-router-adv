import { Fragment, useRef, useState } from 'react';

import Card from './../UI/Card';
import LoadingSpinner from './../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

import { Prompt } from 'react-router-dom';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    setIsEntering(true);
  }

  const finishedEnteringHandler = () => {
    setIsEntering(false);
  }

  return (
    <Fragment>
      {/* prompting the user in case he does some work in the form but tries to leave the page */}
    <Prompt when={isEntering} message={(location) => 'Are you sure you want to leave? All your entered data will be lost'}/> {/* the function inside message receives a location of the page we're trying to reach */}
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input onFocus={formFocusedHandler} type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea onFocus={formFocusedHandler} id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={finishedEnteringHandler} className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default QuoteForm;
