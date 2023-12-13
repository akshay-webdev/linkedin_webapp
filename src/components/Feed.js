import React from "react";
import "../CSS/Feed.css";
import { Avatar } from "@material-ui/core";
import MovieSharpIcon from '@material-ui/icons/MovieSharp';
import WorkSharpIcon from '@material-ui/icons/WorkSharp';
// import NewspaperSharpIcon from '@material-ui/icons/NewspaperSharp';
const Feed = () => {
  const profileimg = "/my_photo.png";

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
          <input type="text" placeholder="Start a post" className="search_input" />

        </div>
        <div className="search_bar_btns">
          <button>
           <MovieSharpIcon/>
            Media
          </button>
          <button>
           <WorkSharpIcon/>
            Job
          </button>
          <button>
            <NewspaperSharpIcon/>
            Write Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
