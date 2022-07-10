import React, {useState} from 'react';

import { useDispatch } from 'react-redux';
import { updateComment } from '../../actions/question';


import './Questions.css';

const EditComments = ({Question, setSwitch}) => {
    
    const [comment, setComment] = useState(Question?.comment?.commentBody);
    const dispatch = useDispatch();

    const handleSubmit =(e) => {
        e.preventDefault();
        dispatch(updateComment(Question?.comment?._id, {comment}))
        setSwitch(false);
    }

   
  return (
    
        
        <section className="post-ans-container">
              <h1>  Edit Your Comment </h1>
            
            <form  onSubmit={handleSubmit}>
                <label htmlFor="comment">
                <textarea  id="" cols="20" rows="5" value={comment} onChange={(e) =>setComment(e.target.value)}></textarea>
                </label>
                <input type="submit" value="Save Comment" className='post-ans-btn'/>
                <button type='button' className='user-cancel-btn' onClick={()=>setSwitch(false)}>Cancel</button>
            </form>
        </section>
           
   
  )
}

export default EditComments;