import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/singleProduct'

class ProductForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      type: '',
      season: '',
      price: 0,
      imageUrl: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.setState({
      ...this.props.product,
    })
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }
  handleSubmit(evt) {
    evt.preventDefault()
  }
  render() {
    const { name, type, season, price, imageUrl } = this.state
    const { handleChange } = this
    return (
      <div>
        <img src="https://images.pexels.com/photos/7543152/pexels-photo-7543152.jpeg?auto=compress&cs=tinysrgb&h=350" />
        <form>
          <label htmlFor="name">Name</label>
          <input name="name" value={name} onChange={handleChange} />

          <label htmlFor="type">Type</label>
          <select name="type">
            <option value="vegetable">vegetable</option>
            <option value="fruit">fruit</option>
          </select>

          <label htmlFor="season">Season</label>
          <select name="season">
            <option>summer</option>
            <option>fall</option>
            <option>winter</option>
            <option>spring</option>
          </select>

          <label htmlFor="price">Price: $</label>
          <input name="price" value={price} onChange={handleChange} />

          <label htmlFor="image">Image url</label>
          <input name="imageUrl" value={imageUrl} onChange={handleChange} />
          <button type="submit">Submit changes</button>
        </form>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    product: state.singleProduct,
  }
}
const mapDispatch = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchSingleProduct(id)),
  }
}

export default connect(mapState, mapDispatch)(ProductForm)
