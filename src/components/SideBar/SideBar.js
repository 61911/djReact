import React from "react";
import "./SideBar.css";
const SideBar = (props) => {
  return (
    <div class="help">
      <h3>Our Sidebar</h3>
      <p class="text-muted">You can put any information here you'd like.</p>
      <ul class="list-group">
        <li class="list-group-item list-group-item-light">Latest Posts</li>
        <li class="list-group-item list-group-item-light">Announcements</li>
        <li class="list-group-item list-group-item-light">Calendars</li>
        <li class="list-group-item list-group-item-light">etc</li>
      </ul>
    </div>
  );
};

export default SideBar;
