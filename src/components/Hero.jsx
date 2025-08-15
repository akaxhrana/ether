import heroVideo from '../assets/nightsky-2.mp4';

function Hero() {
  return (
    <section className="hero">
      <video className="hero-bg" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 className="hero-title">
          Life's Simple <span className="hero-highlight">Hack</span>
        </h1>
        <p className="hero-description">
          You can't control the way things are. You can just <span className="italic-text">let it be</span>.
        </p>
        <p className="hero-description">
          Thoughts on life, existence, and finding peace in the uncontrollable.
        </p>
        <div className="hero-buttons">
          <a href="/explore" className="btn btn-primary">Explore Thoughts</a>
          <a href="/learn" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;