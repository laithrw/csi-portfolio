import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      
      <div className="home-content-container">

        <div className="text" />
        <div className="political-campaign-organizers-container">
          <p className="political-campaign">Political Campaign Organizers</p>
        </div>

        <p className="political-campaign">
          Our goal was to interview student and adult
          volunteers, campaign managers, and activists to
          see how new technology could streamline their
          work and improve their reach and impact.
         </p>

        <Link to="/planning">
          <button className="go-to-planning">{`GO TO PLANNING →`}</button>
        </Link>
        
      </div>

    
      <div className="image">
        <img className="image-1-icon" alt="" src="./image-1@2x.png" />
      </div>
    
    </div>
  );
};

export default Home;