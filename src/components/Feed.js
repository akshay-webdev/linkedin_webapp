import React, { useEffect, useState } from "react";
import "../CSS/Feed.css";
import InputOptions from "./InputOptions";
import Post from "./Post";
// import { db } from "../firebase/app"; // Correct import
// import firebase from "../firebase/firebase";
// import {db} from "../firebase/firebase"

import { db } from "../firebase";
import firebase from "../firebase"
import "firebase/firestore"
import "firebase/auth"
import { Avatar } from "@material-ui/core";
import { Assignment, EventNote, Photo, WorkOutline } from "@material-ui/icons";

const Feed = () => {
  const profileimg = "/my_photo.png";
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Corrected collection name from "post" to "posts"
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    // Corrected collection name from "post" to "posts"
    db.collection("posts").add({
      name: "akshay wakle",
      descripition: "this is just a test", // Corrected typo
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput(""); // Clear the input after sending the post
  };

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
            className="search_input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendPost} type="submit">
            Send
          </button>
        </div>
        <div className="header_options">
          <InputOptions Icon={Photo} title="Photo" className="photo" />
          <InputOptions Icon={WorkOutline} title="Work" className="work" />
          <InputOptions Icon={EventNote} title="Event" className="event" />
          <InputOptions
            Icon={Assignment}
            title="Assignment"
            className="assignment"
          />
        </div>
      </div>

      {posts.map(
        ({
          id,
          data: { name, descripition, message, photoUrl, timestamp },
        }) => (
          <Post
            key={id}
            name={name}
            descripition={descripition}
            message={message}
            photoUrl={photoUrl}
            timestamp={timestamp}
          />
        )
      )}
    </div>
  );
};

export default Feed;
