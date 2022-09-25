import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from './../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  
  const params = useParams();
  const { sendRequest, data:loadedComments, status} = useHttp(getAllComments);
  const { quoteId } = params;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  // making the comments appear right after sending one
  const addedCommentHandler = useCallback(() => { // useCallback is necessary because addedCommentHandler is a dependency in a useEffect in NewCommentForm
                                                  // ensures the addedCommentHandler does not get recreated everytime the component is reevaluated
    sendRequest(quoteId);
  }, [sendRequest, quoteId]); // if the sendRequest changes or the quoteId changes, the addedCommentHandler gets recreated

  let comments;
  if (status === 'pending') {
    comments = <div className='centered'><LoadingSpinner /></div>;
  }

  if (status === 'completed' && (loadedComments || loadedComments.length)) {
    comments = <CommentsList comments={loadedComments} />
  }

  if (status === 'completed' && (!loadedComments || !loadedComments.length)) {
    comments = <p className='centered'>No comments were added yet.</p>;
  } 

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest])
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
