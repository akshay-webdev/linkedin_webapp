import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../CSS/Sidebar.css";
import { Avatar } from "@material-ui/core";
const Sidebar = () => {
  const recentItem = (topic) => {
    return(
      <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
    )
   
  };

  const profileimg = "/my_photo.png";
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="/linkedin.jpg" alt="" />

        <div className="profile_sec">
          <Avatar>
            <img
              src={profileimg}
              className="sidebar__avatar"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          </Avatar>
          <h2>Akshay Wakle</h2>
          <h4>Webdev.akshay@gmail.com</h4>
        </div>

        <div className="sidebar_stats">
          <div>
            <p>Who Viewed you</p>
            <p className="sidebar_status_number">2,003</p>
          </div>
          <div>
            <p>Views On Post</p>
            <p className="sidebar_status_number">203</p>
          </div>
        </div>
      </div>
      <div className="recent__widget">
        <h6>Recent</h6>
        {recentItem("Programming")}
        {recentItem("Software")}
        {recentItem("FrontEnd")}
        {recentItem("Design")}
        {recentItem("Development")}
      </div>
    </div>
  );
};

export default Sidebar;
