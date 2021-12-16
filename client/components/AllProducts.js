import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct, fetchProducts } from '../store/products'

class AllProducts extends React.Component {
  constructor() {
    super()
    this.state = {
      productType: 'all',
    }
    this.changeProductType = this.changeProductType.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  changeProductType(event) {
    this.setState({ productType: event.target.value })
  }
  componentDidMount() {
    this.props.getProducts()
  }
  handleDelete(id) {
    this.props.deleteProduct(id)
  }
  render() {
    let allProducts = this.props.products
    if (this.state.productType === 'fruit') {
      allProducts = allProducts.filter((product) => product.type === 'fruit')
    }
    if (this.state.productType === 'vegetable') {
      allProducts = allProducts.filter(
        (product) => product.type === 'vegetable'
      )
    }
    if (this.state.productType === 'all') {
      allProducts = this.props.products
    }
    const admin = this.props.admin
    const style = {
      textDecoration: 'none',
      color: 'black',
    }
    return (
      <div className="grid-item">
        <h1>Store</h1>
        <div className="flex-container view">
          <div>
            <label>View:</label>
            <select onChange={this.changeProductType}>
              <option value="all">All Products</option>
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetables</option>
            </select>
          </div>
        </div>
        {admin ? (
          <Link to="/products/add">
            <button>Add a product</button>
          </Link>
        ) : null}
        <div className="flex-container products-container">
          {allProducts.map((product) => (
            <div className="flex-container product-items" key={product.id}>
              <Link style={style} to={`/products/${product.id}`}>
                <img src={product.imageUrl} className="products-img" /> <br />
                <h3 className="product-name">{product.name}</h3>
                <p>Price: ${product.price}</p>
              </Link>
              {admin ? (
                <div>
                  <Link to={`/products/${product.id}/edit`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => this.handleDelete(product.id)}>
                    Delete
                  </button>
                </div>
              ) : null}
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
