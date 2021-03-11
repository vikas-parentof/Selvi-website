import React from "react";
import Product from "../Product";
import { Link } from "react-router-dom";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import Fade from "react-reveal/Fade";
import mainBcg from "../../images/bcg.png";

export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        {/* title */}
        <Title title="About the Host" center="true" />
        {/* products */}
        <div className="row my-5">
          {/* <ProductConsumer>
            {(value) => {
              const { featuredProducts } = value;

              return featuredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer> */}
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img src={mainBcg} style={{ width: "280px", height: "280px" }} />
          <div style={{ marginLeft: "13%" }}>
            <h2>John doe</h2>
            <h5>CEO of the company</h5>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse rutrum eleifend arcu sit amet hendrerit. Etiam tempor
              ante ac ipsum finibus, at consectetur urna tristique. Nulla nec
              lacinia velit{" "}
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "10% 0" }}>
          <h2>About Us</h2>
          <br />
          <br />
          <h5>
            The Virtual Faire is a result of the hard work of the kids in our
            program and our experts who have been guiding them through our
            project-based learning program In our Jr. MBA program, Our Certified
            Coaches, invest and obsess over Identifying and Nurturing your
            child’s abilities, to their full potential.
          </h5>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/" className="main-link">
              Reserve your spot now !!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
