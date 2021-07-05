import React from "react";
import "./Home.css";
import Product from "./Product/Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://www.wallpaperup.com/uploads/wallpapers/2014/10/30/499935/c77801d37fd394a2cd4bea6c2735f354-500.jpg"
        />
        <div className="home_row">
          <Product
            id="1"
            title="The lean StartUp|Lorem ipsum dolor sit ipsum dolor sit, amet consectetur adipisicing. "
            price={29.99}
            image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
            rating={5}
          ></Product>
          <Product
           id="2"
           title="harry Poter|Lorem ipsum dolor ipsum dolor sit sit, amet consectetur adipisicing."
           price={99.99}
           image="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2016/08/Harry-Potter-and-the-Cursed-Child.jpg"
           rating={2}
          ></Product>
        </div>
        <div className="home_row">
          <Product
          id="3"
          title="The lean StartUp|Lorem ipsum dolor sit, amet consectetur adipisicing."
          price={29.99}
          image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
          rating={5}></Product>
          <Product
           id="4"
           title="The lean StartUp|Lorem ipsum dolor sit, amet consectetur adipisicing."
           price={29.99}
           image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
           rating={5}
          ></Product>
          <Product
          id="5"
          title="The lean StartUp|Lorem ipsum dolor sit, amet consectetur adipisicing."
          price={29.99}
          image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
          rating={5}
          ></Product>
        </div>
        <div className="home_row">
          <Product
          id="6"
          title="The Samsung TV|Lorem ipsum dolor sit, amet consectetur adipisicing."
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/A1LBkD12AHL._AC_SL1500_.jpg"
          rating={4}
          ></Product>
        </div>
      </div>
    </div>
  );
};

export default Home;
