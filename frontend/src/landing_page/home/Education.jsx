function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="image"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            style={{ textDecoration: "none" }}
            onClick={(e) => e.preventDefault()}
          >
            Varsity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment market related
            queries.
          </p>
          <a
            href="#"
            style={{ textDecoration: "none" }}
            onClick={(e) => e.preventDefault()}
          >
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
