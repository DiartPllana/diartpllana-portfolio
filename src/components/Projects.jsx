import Project1 from "../assets/client1.jpg";
import Project2 from "../assets/client2.jpg";
import Project3 from "../assets/client3.jpg";

export default function Projects() {
  return (
    <>
      <div className="projects">
        <h1>Recent Projects</h1>
        <p>
          Here are some exciting projects I’m currently working on for my
          clients. While I can't share the details just yet, I’m looking forward
          to showcasing them once they are completed!
        </p>
        <p>
          Stay tuned for <span>updates !</span>
        </p>
        <div className="clientProjects">
          <div className="clientProject">
            <img src={Project1} alt="" />
            <h2>Car Wash</h2>
            <p>
              This project aims to establish an eco-friendly car wash service
              that prioritizes sustainability while delivering exceptional
              cleaning results. The mission is to provide a high-quality car
              wash experience that minimizes environmental impact through the
              use of biodegradable products, water-efficient techniques, and
              renewable energy sources.
            </p>
          </div>
          <div className="clientProject">
            <img src={Project2} alt="" />
            <h2>E-Commerce</h2>
            <p>
              Discover a world of possibilities at your online store, where
              shopping meets convenience and variety. Our platform is designed
              to provide an exceptional shopping experience, offering a wide
              range of high-quality products tailored to meet your needs.
            </p>
          </div>
          <div className="clientProject">
            <img src={Project3} alt="" />
            <h2>WorkPlace</h2>
            <p>
              At our company, we believe that our people are our greatest asset.
              Our workplace is designed to foster creativity, collaboration, and
              personal growth, making it an ideal environment for talented
              individuals to thrive. We are committed to building a diverse and
              inclusive culture that empowers every employee to contribute their
              best.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
