import React from "react";
import { ListGroup } from "react-bootstrap";

const MovieVideos = ({ videos }) => {
   return (
      <>
         {videos &&
            videos.slice(0, 5).map((video) => (
               <ListGroup.Item key={video.id}>
                  <iframe
                     title={video.name}
                     src={`https://www.youtube-nocookie.com/embed/${video.key}`}
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen="true"
                  ></iframe>
               </ListGroup.Item>
            ))}
      </>
   );
};

export default MovieVideos;
