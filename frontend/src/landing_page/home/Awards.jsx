function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="Image" />
        </div>
        <div className="col-6">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mb-5">
            <div className="col-6">
              <ul>
                <li>
                  <p>Features and options</p>
                </li>
                <li>
                  <p>Commodity Derivatives</p>
                </li>
                <li>
                  <p>Currency Derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            className="mt-5"
            src="media/images/pressLogos.png"
            alt="image"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
