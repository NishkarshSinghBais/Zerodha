import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container">
      <div className="text-center mt-5 text-muted">
        <h3>The Zerodha Universe</h3>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-4 p-3 mt-5">
          <img
            src="https://zerodha.com/static/images/partners/zerodhafundhouse.png"
            alt="image_loading"
            style={{ width: "60%" }}
          />
          <p className="text-small text-muted mt-2">
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="https://zerodha.com/static/images/products/sensibull-logo.svg"
            alt="image_loading"
            style={{ width: "60%" }}
          />
          <p className="text-small text-muted mt-3">
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="https://zerodha.com/static/images/partners/tijori.svg"
            alt="image_loading"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-2">
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="https://zerodha.com/static/images/products/streak-logo.png"
            alt="image_loading"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-2">
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="image_loading" />
          <p className="text-small text-muted mt-2">
            Thematic investing platform <br /> that helps you invest in
            diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="https://zerodha.com/static/images/products/ditto-logo.png"
            alt="image_loading"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-2">
            Personalized advice on life <br /> and health insurance. No spam{" "}
            <br /> and no mis-selling. Sign up for free
          </p>
        </div>
        <Link to="/signup">
          <button
            className="p-3 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
