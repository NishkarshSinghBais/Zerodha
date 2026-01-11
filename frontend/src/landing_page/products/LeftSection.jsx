function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a
              href="#"
              style={{ textDecoration: "none" }}
              onClick={(e) => e.preventDefault()}
            >
              Try Demo
            </a>
            <a
              href="#"
              style={{ marginLeft: "45px", textDecoration: "none" }}
              onClick={(e) => e.preventDefault()}
            >
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "45px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
