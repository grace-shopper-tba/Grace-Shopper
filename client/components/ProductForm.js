import React from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../store/products'
import { fetchSingleProduct, updateProduct } from '../store/singleProduct'

class ProductForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      type: 'vegetable',
      season: 'summer',
      price: 0,
      imageUrl: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    if (this.props.match.params.productId) {
      this.props.fetchProduct(+this.props.match.params.productId)
      this.setState({
        ...this.props.product,
      })
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.product.id !== this.props.product.id) {
      this.setState({
        ...this.props.product,
      })
    }
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    this.state.price = this.state.price * 100
    if (this.props.match.params.productId) {
      this.props.updateProduct({
        ...this.state,
        season: [`${this.state.season}`],
        id: +this.props.match.params.productId,
      })
    } else {
      this.props.createProduct({
        ...this.state,
        season: [`${this.state.season}`],
      })
    }
  }
  render() {
    const { name, price, imageUrl } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <div>
        {this.props.admin ? (
          <div>
            <img src={imageUrl || ''} />
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input name="name" value={name} onChange={handleChange} />

              <label htmlFor="type">Type</label>
              <select name="type" onChange={handleChange}>
                <option value="vegetable">vegetable</option>
                <option value="fruit">fruit</option>
              </select>

              <label htmlFor="season">Season</label>
              <select name="season" onChange={handleChange}>
                <option value="summer">summer</option>
                <option value="autumn">autumn</option>
                <option value="winter">winter</option>
                <option value="spring">spring</option>
              </select>

              <label htmlFor="price">Price: $</label>
              <input name="price" value={price} onChange={handleChange} />

              <label htmlFor="image">Image url</label>
              <input name="imageUrl" value={imageUrl} onChange={handleChange} />
              <button type="submit">Submit changes</button>
            </form>
          </div>
        ) : (
          <h1>You need to be an admin to view this page</h1>
        )}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    product: state.singleProduct,
    admin: state.auth.isAdmin,
  }
}
const mapDispatch = (dispatch, { history }) => {
  return {
    fetchProduct: (id) => dispatch(fetchSingleProduct(id)),
    createProduct: (productObject) =>
      dispatch(createProduct(productObject, history)),
    updateProduct: (productObject) =>
      dispatch(updateProduct(productObject, history)),
  }
}

export default connect(mapState, mapDispatch)(ProductForm)
