import CardBoard from "../components/card-board/CardBoard";
import HeaderLayout from "../layouts/HeaderLayout";

import "./styles/home.css";
import cat_walk from "../assets/images/cat_walk.webp";
import SlideBanner from "../components/slide-banner/slide-banner";

function HomePage() {
  return (
    <div id="container-home">
      <CardBoard header={<HeaderLayout />}>
        <div className="content">
          <div className="content__left">
            <SlideBanner />
          </div>

          <div className="content__right">
            <h1 className="content__title">Mew store</h1>

            <div className="content__body">
              <p className="content__tagline">Everything your cat needs.</p>

              <p className="content__desc">
                We curate high-quality products for cats — from toys to
                essential care.
                <br />
                Designed for comfort, safety, and everyday joy.
              </p>

              <ul className="content__features">
                <li className="content__feature">Pet-safe materials</li>
                <li className="content__feature">Modern design</li>
                <li className="content__feature">Easy shopping</li>
              </ul>

              <p className="content__highlight">For cats. For better days.</p>

              <div className="content__frame">
                <div className="content__cat-walk">
                  <img src={cat_walk} alt="image" />
                </div>
              </div>

              <div className="content__actions">
                <div className="content__btn content__btn--primary">
                  <p>Jump to shop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBoard>
    </div>
  );
}

export default HomePage;
