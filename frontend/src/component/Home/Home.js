import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import AnimatedText from 'react-animated-text-content';

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Steel and Bricks" />

          <div className="banner">
            {/* <p style={{background:"#C3272B"}}>Welcome</p> */}
            <h1 style={{ background: "#C3272B" }}>FIND Construction Material BELOW</h1>
            {/*diagonal*/}

            <AnimatedText
              type="chars" // animate words or chars
              animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
              }}
              animationType="bounce"
              interval={0.06}
              duration={0.8}
              tag="p"
              className="coverText"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
              fontSize="10%"
            >
              BEST MATERIAL SUPPLIER

            </AnimatedText>


            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          {/* <h2 className="homeHeading">WowSlider</h2>

          <div className="wowSlider">
            <iframe title="wowSlider1" className="wow" href="file:///C:/Users/CSPC/MernProjects/Construction/frontend/src/component/Home/constructionSlider.html" ></iframe>
          </div> */}



          
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
