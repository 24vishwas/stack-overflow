import React from 'react'
import './RightSidebar.css'
import pen from '../../assets/Pencil.svg'
import comment from '../../assets/comment.png'

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The overflow blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt='pen' className='pen-logo ' width='18' />
                    <p>Observability is key to the future of software (and your DevOps career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt='pen' width='18' className='pen-logo' />
                    <p>Podcast 374: How valuable is your screen name? </p>

                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt='comment' width='18' className='comment-logo'/>
                    <p>Review queue workflow - final release....</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt='comment' width='18' className='comment-logo'/>
                    <p>Please welcome Valued Associates: #958 -V2Blast #958-spancer </p>

                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt='comment' className='comment-logo' width='18' />
                    <p>Outdated Answer: accepted answer is row unpinned on Stack Overflow</p>

                </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <p>38</p>
                    <p>Why was this spam flag declined, yet the question marked as spam</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>20</p>
                    <p>What is the best course of action when a user has high enough rep to... </p>

                </div>
                <div className='right-sidebar-div-2'>
                    <p>14</p>
                    <p>is a link to the "How to ask" help page a useful comment?</p>

                </div>
            </div>

        </div>
    )
}

export default Widget