import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import "animate.css";
import "animate.css/animate.min.css";


function Homepage() {
  const slideIn = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { mass: 1, tension: 280, friction: 30, delay: 1000 },
  });
    const fadeIn = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 2000 }, // adjust duration as needed
    });
  const h2Animation = useSpring({
    from: { transform: 'translateY(-50px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: { duration: 2000, delay: 500 },
  });

  return (
    <div className="container-fluid px-0">
      <div className="row no-gutters">
        <div className="col-md-6 bg-light position-relative">
          <div className="d-flex align-items-center h-100">
          <animated.div style={slideIn}>
            <div className="p-5">
              <h1 className="display-4 mb-4">
                <span className="text">Discover the world's best APIs</span>
              </h1>
              <p className="lead mb-5">
                Search for different kinds of data across multiple APIs, from Tenor GIFs to Spotify tracks to news and more.
              </p>
            </div>
          </animated.div>
          </div>
        </div>
  <div className="col-md-6 bg-dark text-light position-relative">
    <div className="d-flex align-items-center h-100">
      <animated.div style={h2Animation}>
        <div className="p-5">
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>
            Find the data you need with our API search app
          </h2>
          <p className="lead mb-5 box animate__rotateInDownRight" >
            Our app makes it easy to search for data across multiple APIs, so you can find the information you need quickly and easily.
          </p>
          <div>
            <Button variant="outline-light" as={Link} to="/tenor" className="mr-2 mb-2">
              Search Tenor Gifs
            </Button>
            <Button variant="outline-light" as={Link} to="/spotify" className="mr-2 mb-2">
              Search Spotify Tracks
            </Button>
            <Button variant="outline-light" as={Link} to="/joke" className="mr-2 mb-2">
              Get Jokes
            </Button>
            <Button variant="outline-light" as={Link} to="/news" className="mr-2 mb-2">
              Get News
            </Button>
            <Button variant="outline-light" as={Link} to="/facebook" className="mb-2">
              Search Facebook Users
            </Button>
          </div>
        </div>
      </animated.div>
    </div>
  </div>
  <animated.div className="col position-relative animate__animated animate__fadeInUp" style={h2Animation}>
  <div className="d-flex align-items-center h-100">
    <div className="p-3 p-md-5">
      <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>
        Learn how to build a React app that integrates with external APIs
      </h2>
      <p className="mb-5">
        This app is useful for anyone who needs to search for specific types of data across multiple APIs. Whether you're a developer building an app that needs to integrate with various data sources, or just a casual user looking to find something specific, this app makes it easy to search and discover the data you need.
      </p>
      <p>
        This project is also useful for junior developers who are looking to learn how to build a React app that integrates with external APIs. By studying the code in this project, junior developers can learn how to use React Router, make API requests, and handle asynchronous data loading in a clean and scalable way.
      </p>
    </div>
  </div>
</animated.div>
</div>

    </div>
  );
}

export default Homepage;
