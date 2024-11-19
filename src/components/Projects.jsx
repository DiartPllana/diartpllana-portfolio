import React from "react";
import Project1 from "../assets/client1.jpg";
import Project2 from "../assets/client2.jpg";
import Project3 from "../assets/client3.jpg";

export default function Projects() {
  return (
    <div className="projects" id="myProject">
      <h1>Recent Projects</h1>
      <p>
        Here are some exciting projects I’m currently working on for my
        clients. While I can't share the details just yet, I’m looking forward
        to showcasing them once they are completed!
      </p>
      <p>
        Stay tuned for <span>updates!</span>
      </p>
      <div className="clientProjects">
        <div className="clientProject">
          <img src={Project1} alt="Car Wash" />
          <h2>Car Wash</h2>
          <p>
            This project aims to establish an eco-friendly car wash service
            that prioritizes sustainability while delivering exceptional
            cleaning results.
          </p>
        </div>
        <div className="clientProject">
          <img src={Project2} alt="E-Commerce" />
          <h2>E-Commerce</h2>
          <p>
            Discover a world of possibilities at your online store, where
            shopping meets convenience and variety.
          </p>
        </div>
        <div className="clientProject">
          <img src={Project3} alt="WorkPlace" />
          <h2>WorkPlace</h2>
          <p>
            Our workplace is designed to foster creativity, collaboration, and
            personal growth.
          </p>
        </div>
      </div>
    </div>
  );
}