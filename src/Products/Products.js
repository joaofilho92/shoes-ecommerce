import "./Products.css";
import { AiFillStar } from "react-icons/ai";

function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Card_Image"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              <span className="total-reviews">4</span>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default Products;
