import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct, fetchProducts } from '../store/products'

class AllProducts extends React.Component {
  constructor() {
    super()
    this.state = {
      productType: "all"
    }
    this.changeProductType = this.changeProductType.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  changeProductType(event) {
    this.setState({productType: event.target.value})
  }
  componentDidMount() {
    this.props.getProducts()
  }
  handleDelete(id) {
    this.props.deleteProduct(id)
  }
  render() {
    const allProducts = this.props.products
    const admin = this.props.admin
    const style = {
      textDecoration: 'none',
      color: 'black',
    }
    return (
      <div className="grid-item">
        <h1>Store</h1>
        <div>
          <label>Filter Products</label> <br />
          <select onChange={this.changeProductType}>
            <option value="all">All Products</option>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetables</option>
          </select>
        </div>
        <Link to="/products/add">
          <button className={admin ? '' : 'admin-buttons'}>
            Add a product
          </button>
        </Link>
        <div className="flex-container products-container">
          {allProducts.map((product) => (
            <div className="flex-container product-items" key={product.id}>
              <Link style={style} to={`/products/${product.id}`}>
                <img src={product.imageUrl} className="products-img" /> <br />
                <h3 className="product-name">{product.name}</h3>
                <p>Price: ${product.price}</p>
              </Link>
              <Link to={`/products/${product.id}/edit`}>
                <button className={admin ? '' : 'admin-buttons'}>Edit</button>
              </Link>
              <button
                className={admin ? '' : 'admin-buttons'}
                onClick={() => this.handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    products: state.products,
    admin: state.auth.isAdmin,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    deleteProduct: (productId) => dispatch(deleteProduct(productId)),
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
