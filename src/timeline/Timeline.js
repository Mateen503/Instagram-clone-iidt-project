import React, { useState } from "react";
import Post from "./posts/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
    const [posts, setposts] = useState ([
        {
           user: "ChandraTeja_",
           postImage:"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
           likes: 56,
           timestamp: "30min",
        },
        {
            user: "Mateen",
            postImage:"https://static.toiimg.com/thumb/105480351/Mountain-gorilla.jpg?width=1200&height=900",
            likes: 12,
            timestamp: "8h",
         },
         {
            user: "Ganesh",
            postImage:"https://i.natgeofe.com/n/0523f64d-d586-4180-ab8d-e9a6be93c02c/chimpanzee_01.JPG?w=2880&h=1916",
  
            likes: 30,
            timestamp: "1d",
         },
         {
            user: "sairam",
            postImage:"https://www.pbs.org/wnet/nature/files/2021/05/rat-1280x720.png",
            likes: 20,
            timestamp: "2d",
         },
    ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__left">
          <div className="timeline__posts">
            {posts.map((post) => (
              <Post
                user={post.user}
                postImage={post.postImage}
                likes={post.likes}
                timestamp={post.timestamp}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;