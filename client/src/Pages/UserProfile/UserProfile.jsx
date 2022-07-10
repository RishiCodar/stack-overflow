import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faPen, faUserCheck, faLocationPin} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import Avatar from '../../Components/Avatar/Avatar';
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import EditProfileForm from './EditProfileForm';
import ProfileBio from './ProfileBio';
import './UserProfile.css';

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  

  return (
    <div className="home-container-1">
      <LeftSidebar/>
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar  backgroundColor='purple' color='white' fontSize='70px' px='55px' py='55px'>
              {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
            
              <div className="user-name">
               <h1>{currentProfile?.name}</h1>
              <h1><FontAwesomeIcon icon={faBirthdayCake}/> {moment(currentProfile?.dob).calendar()}</h1>
              { currentProfile?.location?(
              <h1><FontAwesomeIcon icon={faLocationPin}/> {currentProfile?.location}</h1>):
              (<></>)
              }
               <p><FontAwesomeIcon icon={faUserCheck}/> Joined {moment(currentProfile?.joindOn).fromNow()}</p>
              </div>
             
            </div>
          {
            currentUser?.result?._id === id && (
              <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                  <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )
          }
          </div>
          <>
            {
              Switch?(
              <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>):
              (<ProfileBio currentProfile={currentProfile}/>)
            }
          </>
        </section>
      </div>
    </div>
  )
}


export default UserProfile;