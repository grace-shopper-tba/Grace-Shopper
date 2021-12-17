import React from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../store'
import { Link } from 'react-router-dom'
/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props

  return (
    <div className="flex-container form">
      <h3>{displayName}</h3>
      <form onSubmit={handleSubmit} name={name}>
        {name === 'signup' && (
          <div>
            <div>
              <label htmlFor="firstName" />
              <input name="firstName" type="text" placeholder="First Name" />
            </div>
            <div>
              <label htmlFor="lastName" />
              <input name="lastName" type="text" placeholder="Last Name" />
            </div>
            <div>
              <label htmlFor="address" />
              <input name="address" type="text" placeholder="Address" />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="email" />
          <input
            name="email"
            type="text"
            autoComplete="Email"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password" />
          <input
            name="password"
            type="password"
            autoComplete="Password"
            placeholder="Password"
          />
        </div>
        <div className="submit-button">
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
        {name === 'login' && (
          <div>
            <h3>
              <span>New To Grace Grocer? </span>
              <Link to="/signup">Sign Up Here</Link>
            </h3>
          </div>
        )}
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Log In',
    error: state.auth.error,
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      const address = evt.target.address ? evt.target.address.value : undefined
      const firstName = evt.target.firstName
        ? evt.target.firstName.value
        : undefined
      const lastName = evt.target.lastName
        ? evt.target.lastName.value
        : undefined
      dispatch(
        authenticate(email, password, formName, firstName, lastName, address)
      )
    },
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
