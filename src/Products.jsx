import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const products = [
  {
    id: 1,
    name: "Perfume",
    image: "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
    price: 200,
    quantity: 1,
    selected: false
  },
  {
    id: 2,
    name: "Sandal Perfume",
    image: "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
    price: 200,
    quantity: 1,
    selected: false
  },
  {
    id: 3,
    name: "Movie Perfume",
    image: "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
    price: 200,
    quantity: 1,
    selected: false
  }
];

function Products() {
    const dispatch = useDispatch();
    // const counter = useSelector(state => console.log(state,"counter"));
    const AddToCart = (product) => {
        dispatch(addToCart(product));
    };
     

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Quantity: {product.quantity}</p>
                <button className="btn btn-primary" onClick={() => AddToCart(product)}>
                  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
