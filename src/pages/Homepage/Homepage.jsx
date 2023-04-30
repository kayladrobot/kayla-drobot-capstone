import React from "react";
import "./Homepage.scss";

function Homepage() {
  return (
    <main className="home">
      <section className="home__section home__hero">
        <h1 className="home__hero-header">Discover 📓 Your Perfect 👌 Creative Match💘 on LookBook: </h1>
        <p>
          The Ultimate Creative Platform for Connection, Opportunities, and
          Collaboration
        </p>
        <button className="home__hero-button">Make A Match</button>
      </section>
      <section className="home__section home__creative">
        <p className="p--large">Creatives</p>
        <h2>Discover Vancouver Creatives</h2>
        <div className="home__creative-cards">
          <div className="home__creative-card"></div>
          <div className="home__creative-card"></div>
          <div className="home__creative-card"></div>
          <div className="home__creative-card"></div>
        </div>
        <button>View More Creatives</button>
      </section>
      <section className="home__section home__jobs">
        <p className="p--large">Creatives</p>
        <h2>Discover Vancouver Creatives</h2>
        <div className="home__jobs-cards">
          <div className="home__jobs-card"></div>
          <div className="home__jobs-card"></div>
          <div className="home__jobs-card"></div>
          <div className="home__jobs-card"></div>
        </div>
        <button>View More Jobs</button>
      </section>
      <section className="home__section home__project">
        <p className="p--large">Creatives</p>
        <h2>Discover Vancouver Creatives</h2>
        <div className="home__project-cards">
          <div className="home__project-card"></div>
          <div className="home__project-card-container">
          <div className="home__project-card"></div>
          <div className="home__project-card"></div>
          <div className="home__project-card"></div>
          </div>
          <button>View More Projects</button>
        </div>
      </section>
      <section className="home__section home__cta">
        <p className="p--large">Lorem ipsum, dolor sit amet isicing.</p>
        <h2>Welcome to your new digital reality that which will rock your world truly at all.</h2>
      <div className="cta__btn-wrapper">
        <button>Take The Quiz</button>
        <button>Make a Match</button>
      </div>
      </section>
    </main>
  );
}

export default Homepage;
