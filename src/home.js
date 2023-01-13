import React from "react";
import "./home.css";
import Product from "./product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__containerImage"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/US_SVOD_Something_From_Tiffanys_Cornetto/7e8f9730-4a72-4d7f-82df-fc41b51765d1._UR3000,600_SX1500_FMjpg_.jpeg"
          alt="Logo"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Harry Potter & the Philosopher's Stone"
            price={15.99}
            image="https://m.media-amazon.com/images/I/71WKvIYkKHL._AC_UY654_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="2"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="4"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="5"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={2}
            image="https://th.bing.com/th/id/OIP.BVUGZk-cKXYqYMkq7aaMmAHaGy?w=222&h=203&c=7&r=0&o=5&dpr=3&pid=1.7"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
