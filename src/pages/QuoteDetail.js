import React from 'react';
import { Route, useParams } from 'react-router-dom';
import Comments from './../components/comments/Comments';

const QuoteDetail = () => {
    const params = useParams();

    return (
        <div>
            <h1>Quote detail</h1>
            <p>{params.quoteId}</p>

            <Route path={`/quotes/${params.quoteId}/comments`}> {/* nested dynamic route */}
                {/* path could also be "path='/quotes/:quoteId/comments" */}
            
                <Comments />
            </Route> 
        </div>
    );
};

export default QuoteDetail;