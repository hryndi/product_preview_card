import deskProductImg from "./assets/image-product-desktop.jpg";
import mobileProductImg from "./assets/image-product-mobile.jpg";

function App() {
  return (
    <main>
      <article className="product">
        <picture className="product-image">
          <source srcSet={deskProductImg} media="(min-width:600px)" />
          <img src={mobileProductImg} alt="" />
        </picture>

        <div className="product-content">
          <p className="category">Perfume</p>
          <h1 className="header">Gabrielle Essence Eau De Parfum</h1>
          <p className="description">
            A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of
            CHANEL.
          </p>
          <div className="flex-group">
            <p className="price">149.99</p>
            <p className="actual-price">
              <s>169.99</s>
            </p>
          </div>
          <button className="button" data-icon="shopping-cart">
            Add to Cart
          </button>
        </div>
      </article>
    </main>
  );
}

export default App;
