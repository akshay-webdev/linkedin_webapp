import React from 'react'
import '../CSS/Post.css'
import { Avatar } from '@material-ui/core'
import InputOptions from './InputOptions'
import { Comment, Send, Share, ThumbUp } from '@material-ui/icons'
const Post = () => {
  return (
    <>
        <div className='post'>
            <div className='post__header'>
                <Avatar/>
                <div className='post__info'>
                    <h2>Akshay wakle</h2>
                    <p>Descripition</p>
                </div>
            </div>
            <div className='post__body'>
                <p>message here</p>
            </div>
            <div className='post__buttons'>
                <InputOptions Icon={ThumbUp} title="Like"/>
                <InputOptions Icon={Comment} title="Comment"/>
                <InputOptions Icon={Share} title="Share"/>
                <InputOptions Icon={Send} title="Send"/>
            </div>
        </div>
        
    </>
  )
}

export default Post