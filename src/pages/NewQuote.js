import React from 'react';
import QuoteForm from './../components/quotes/QuoteForm';

import { useHistory } from 'react-router-dom';

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);

        // if the data is sent, navigate to quotes list
        history.push('/quotes')// pushing a new page to the stack of pages inside the user history
        //history.push() allows to use the come back browser button, history.replace() does not since it replaces the current url, its more of a redirect
     }
    
    return (
        <div>
            <h1>New quote</h1>
            <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>
        </div>
    );
};

export default NewQuote;