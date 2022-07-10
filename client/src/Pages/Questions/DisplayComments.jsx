import React ,{useState} from 'react';
import { Link,useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import Avatar from '../../Components/Avatar/Avatar';
import { deleteComment} from '../../actions/question';
import EditComments from './EditComment';


const DisplayComments = ({question}) => {
    const currentUser = useSelector((state) => state.currentUserReducer);
    const Question = useSelector((state) => state.questionsReducer);
    const { id } = useParams();
    const [Switch, setSwitch] = useState(false);
   
    const dispatch = useDispatch();
    

    const handleDelete =(commentId, noOfComments)=>{
        dispatch(deleteComment(id, commentId, noOfComments - 1));
    }

    
return(
    <div>
        {
         question.comment.map((comm)=>(
             <div className='display-ans' key={comm._id}>
                 <p>{comm.commentBody}</p>
                <div className="question-actions-user">
                    <div>
                        {currentUser?.result?._id === comm?.userId && (
                        <>
                        <button type='button' onClick={()=>{
                            setSwitch(true) 
                            }}>Edit</button>
                        <button type="button" onClick={()=>handleDelete(comm._id, question.noOfComments)}>
                            Delete
                        </button>
                       
                        </>
                        )}

                    </div>
                    
                    <div>
                        <p>Commented {moment(comm.commentedOn).fromNow()}</p>
                        <Link to={`/Users/${comm.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                            <Avatar backgroundColor="green" px="8px" py="5px">{comm.userCommented.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>
                                {
                                comm.userCommented
                                }
                            </div>
                        </Link>
                    </div>
                    
                </div>
                <div>
                        <>
                            {
                                Switch?
                                (<EditComments Question={Question} setSwitch={setSwitch}/>):
                                <>

                                </>
                            }
                        </>
                    </div>
             </div>
         ))
        }
    </div>
  )
}

export default DisplayComments;