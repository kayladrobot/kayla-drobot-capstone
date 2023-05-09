import React from "react";
import { useState, useEffect } from "react";

// // ------ import api base URL -------
import apiData from "../../data/apiData";

import CreativeCarousel from "../../components/CreativeCarousel/CreativeCarousel";
import "./Homepage.scss";

function Homepage() {
  const [loading, setLoading] = useState(true);
  const [creativeData, setCreativeData] = useState([]);

  //   // -----  useEffect/ apiData -----
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiData.get("/creatives");
        const creatives = response.data;
        setCreativeData(creatives);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <main className="home">
      <section className="home__section home__hero">
        <div className="home__copy-container">
          <h1 className="home__copy-header">
            Discover 📓 Your Perfect 👌 Creative Match💘 on LookBook:{" "}
          </h1>
          <p>
            The Ultimate Creative Platform for Connection, Opportunities, and
            Collaboration
          </p>
        </div>
        <button className="home__btn--primary">Make A Match</button>
      </section>
      <section className="home__section home__creative">
        <div className="home__copy-container">
          <p className="p--large">Creatives</p>
          <h2>Discover Vancouver Creatives</h2>
        </div>
        <div className="home__cards">
          <CreativeCarousel creativeData={creativeData}/>
        </div>
        <button className="home__btn--primary">View More Creatives</button>
      </section>
      <section className="home__section home__jobs">
        <div className="home__copy-container">
          <p className="p--large">Creatives</p>
          <h2>Discover Vancouver Creatives</h2>
        </div>
        <div className="home__cards">
          <div className="home__jobs-card"></div>
          <div className="home__jobs-card"></div>
          <div className="home__jobs-card"></div>
          <div className="home__jobs-card"></div>
        </div>
        <button className="home__btn--primary">View More Jobs</button>
      </section>
      <section className="home__section home__project">
        <div className="home__copy-container">
          <p className="p--large">Projects</p>
          <h2>Discover Vancouver Creatives</h2>
        </div>
        <div className="home__cards">
          <div className="home__project-card"></div>
          <div className="home__project-card-container">
            <div className="home__project-card"></div>
            <div className="home__project-card"></div>
            <div className="home__project-card"></div>
          </div>
          <button className="home__btn--primary">View More Projects</button>
        </div>
      </section>
      <section className="home__section home__cta">
      <div className="home__copy-container">
        <p className="p--large">Lorem ipsum, dolor sit amet isicing.</p>
        <h3 className="home__copy-header">
          Welcome to your new digital reality that which will rock your world
          truly at all.
        </h3>
        </div>
        <div className="home__btn-wrapper">
          <button className="home__btn--secondary">Take The Quiz</button>
          <button className="home__btn--primary">Make a Match</button>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
