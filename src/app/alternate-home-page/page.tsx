export default function contact() {
  return (
    <div>
      <div>
        <div className="wrapper" id="wrapper"></div>
      </div>

      <section className="aboutus" id="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading text-center">
                <img
                  className="dividerline"
                  src="http://www.pixempire.com/images/preview/horizontal-line-icon-1.jpg"
                  alt=""
                />
                <h2>About btates m7amara bank</h2>
                <img
                  className="dividerline"
                  src="http://www.pixempire.com/images/preview/horizontal-line-icon-1.jpg"
                  alt=""
                />
                <h4></h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://cdn1.iconfinder.com/data/icons/playing-cards-1/512/heart-playing-card-gambling-hearts-gamble-luck-3-128.png"
                  alt="Card image cap"
                />
                <div className="card-block">
                  <h4 className="card-title">This is Card #1</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </p>
                  <a
                    href="https://v4-alpha.getbootstrap.com/components/card/"
                    className="btn btn-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-inverse card-warning text-center">
                <img
                  className="card-img-top"
                  src="https://cdn3.iconfinder.com/data/icons/basic-new/64/basic_cards_hearts-128.png"
                  alt="Card image cap"
                />
                <div className="card-block">
                  <h4 className="card-title">This is Card #2</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </p>
                  <a
                    href="https://v4-alpha.getbootstrap.com/components/card/"
                    className="btn btn-default"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-inverse card-success text-center">
                <img
                  className="card-img-top"
                  src="http://www.iconninja.com/files/637/593/161/christmas-card-icon.png"
                  alt="Card image cap"
                />
                <div className="card-block">
                  <h4 className="card-title">This is Card #3</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </p>
                  <a
                    href="https://v4-alpha.getbootstrap.com/components/card/"
                    className="btn btn-secondary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-inverse card-info text-center">
                <img
                  className="card-img-top"
                  src="http://iconshow.me/media/images/ui/iOS7-optimized-icon/png/128/08.credit-card.png"
                  alt="Card image cap"
                />
                <div className="card-block">
                  <h4 className="card-title">This is Card #4</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </p>
                  <a
                    href="https://v4-alpha.getbootstrap.com/components/card/"
                    className="btn btn-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="heading text-center">
          <img
            className="dividerline"
            src="http://www.pixempire.com/images/preview/horizontal-line-icon-1.jpg"
            alt=""
          />
          <h2>Enhanced Features</h2>
          <img
            className="dividerline"
            src="http://www.pixempire.com/images/preview/horizontal-line-icon-1.jpg"
            alt=""
          />
          <h4>
            <a href="#" data-toggle="tooltip" title="This is a tooltip">
              Bootstrap 4 alpha
            </a>{" "}
            has a new prefix{" "}
            <a
              href="#"
              data-toggle="tooltip"
              title="Make all backgrounds black!"
            >
              -inverse
            </a>{" "}
            className that gives a background to the table itself. Another cool
            thing about this is the improve tooltips and popovers which help a
            lot of developers when it comes to ease of use. Thanks to{" "}
            <a
              href="#"
              data-toggle="tooltip"
              title="Tether is a JavaScript library for efficiently making an absolutely positioned element stay next to another element on the page. For example, you might want a tooltip or dialog to open, and remain, next to the relevant item on the page."
            >
              Tether
            </a>
            , a third party library it has improved.
          </h4>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <table className="table table-inverse">
                <thead>
                  <tr>
                    <th className="text-center">Bootstrap 3</th>
                  </tr>
                  <tr>
                    <th>Size</th>
                    <th>Device</th>
                    <th>className</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Extra Small</td>
                    <td>Less than 768px</td>
                    <td>col-xs</td>
                  </tr>
                  <tr>
                    <td>Small</td>
                    <td>768px and up</td>
                    <td>col-sm</td>
                  </tr>
                  <tr>
                    <td>Medium</td>
                    <td>992px and up</td>
                    <td>col-md</td>
                  </tr>
                  <tr>
                    <td>Large</td>
                    <td>1200px and up</td>
                    <td>col-lg</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table table-inverse">
                <thead>
                  <tr>
                    <th className="text-center">Bootstrap 4</th>
                  </tr>
                  <tr>
                    <th>Size</th>
                    <th>Device</th>
                    <th>className</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Extra Small</td>
                    <td>Less than 34em</td>
                    <td>col-xs</td>
                  </tr>
                  <tr>
                    <td>Small</td>
                    <td>34em and up</td>
                    <td>col-sm</td>
                  </tr>
                  <tr>
                    <td>Medium</td>
                    <td>48em and up</td>
                    <td>col-md</td>
                  </tr>
                  <tr>
                    <td>Large</td>
                    <td>62em and up</td>
                    <td>col-lg</td>
                  </tr>
                  <tr>
                    <td>Extra Large</td>
                    <td>75em and up</td>
                    <td>col-xl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <p>&copy; 2023 - btatesM7amara.com</p>
    </div>
  );
}
