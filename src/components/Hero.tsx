import "../Hero.css";

function Hero() {
  return (
    <>
      <div className="hero-page-container">
        <div id="hero-content-container">
          <h1>
            Get started on the <span className="yellow-text">spectacular</span>{" "}
            expedition!!
          </h1>
          <p>
            I am the coolwest developer that ever created a travel application
            and you are going to have a hell of an experienece
          </p>
          <div id="searchbar-container">
            <input
              id="searchbar-input"
              type="text"
              placeholder="Where are you going?"
            />
            <span id="location-icon" className="material-symbols-rounded">
              location_on
            </span>
            <button className="search-button">
              <span
                id="button-icon"
                className="material-symbols-rounded filled"
              >
                search
              </span>
              <p>Search</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
