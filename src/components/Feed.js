import React, { useEffect, useState } from "react";
import "../CSS/Feed.css";
import InputOptions from "./InputOptions";
import Post from "./Post";
import {db} from "../firebase/app"
import {app} from "../firebase/app"
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// ... other services you need


import { Avatar } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";
import WorkIcon from "@material-ui/icons/Work";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AssignmentIcon from "@material-ui/icons/Assignment";

const Feed = () => {
  const profileimg = "/my_photo.png";
  const [input , setInput]=useState('');
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
      db.collection("posts").onSnapshot((snapshot)=>
        setPosts(
          snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data()
          }))
        )
      )
  },[])
  const sendPost=(e)=>{
    e.preventDefault();
    db.collection('post').add({
      name:'akshay wakle',
      descripition:'this is a just test',
      message:input,
      photoUrl:'',
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    }) 
  }

  return (
    <div className="feed_section">
      <div className="feed_searchbar">
        <div className="post_sec">
          <Avatar>
            <img
              src={profileimg}
              className="sidebar__avatar"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          </Avatar>
          <input
            type="text"
            placeholder="Start a post"
            className="search_input" value={input} 
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendPost} type="submit">Send</button>
        </div>
        <div className="header_options">
          <InputOptions Icon={PhotoIcon} title="Photo" className="photo"/>
          <InputOptions Icon={WorkIcon} title="Work" className="work"/>
          <InputOptions Icon={EventNoteIcon} title="Event" className="event"/>
          <InputOptions Icon={AssignmentIcon} title="Assignment" className="assignment"/>
        </div>
      </div>
      
      {
        posts.map(({id,data:{name,descripition,message,photoUrl,timestamp}})=>(

          <post 
              key={id}
              name={name}
              descripition={descripition}
              message={message}
              photoUrl={photoUrl}
              timestamp={timestamp}
          />
        ))
      }
      {/* Post Here... */}
      {/* <Post name="akshay" descripition="description here" message="wow its works"/> */}

    </div>
  );
};

export default Feed;
