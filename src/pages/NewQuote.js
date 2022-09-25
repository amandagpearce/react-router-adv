import React from 'react';
import QuoteForm from './../components/quotes/QuoteForm';

import { useHistory } from 'react-router-dom';

import useHttp from './../hooks/use-http';
import { addQuote } from '../lib/api';
import { useEffect } from 'react';

const NewQuote = () => {
    
    const { sendRequest, status } = useHttp(addQuote); // using object destructuring bc useHttp returns an object

    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') { // status is returned in the useHttp
            // if the data is sent, navigate to quotes list
            history.push('/quotes')// pushing a new page to the stack of pages inside the user history
            //history.push() allows to use the come back browser button, history.replace() does not since it replaces the current url, its more of a redirect
        }
    },[status, history]);

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
        
        sendRequest(quoteData);
     }
    
    return (
        <div>
            <h1>New quote</h1>
            <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}></QuoteForm>
        </div>
    );
};

export default NewQuote;