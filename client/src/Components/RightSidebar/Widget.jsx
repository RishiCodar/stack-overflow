import React from 'react';
import "./RightSidebar.css";
import comment from "../../Assets/comment-alt-solid.svg";
import pen from "../../Assets/pen-solid.svg";
import blacklogo from "../../Assets/blacklogo.svg";

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width="18" />
                    <p>Ethical AI isn’t just how you build it, it’s how you use it</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width="18" />
                    <p>Ethical AI isn’t just how you build it, it’s how you use it</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="comment" width="18" />
                    <p>Announcing the arrival of Valued Associate #1214: Dalmarus</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="comment" width="18" />
                    <p>Improvements to site status and incident communication</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={blacklogo} alt="blacklogo" width="18" />
                    <p>Staging Ground: Reviewer Motivation, Scaling, and Open Questions</p>
                </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <p>38</p>
                    <p>Why was this spam flag declined, yet the question marked as spam?</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>20</p>
                    <p>What is the best course of action when a user has high enough rep to...</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>14</p>
                    <p>Is a link to the "How to ask" help page a useful comment?</p>
                </div>
            </div>
        </div>
    )
}

export default Widget;
