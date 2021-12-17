import React from 'react'

export default function OrderConfirmation() {
  window.localStorage.removeItem('cart')
  return (
    <div className="grid-item flex-container thank-you">
      <h1>Thank you for your order!</h1>
      <div>
        <p>
          Your health box will be shipping in the next 2 - 3 days. An email
          confirmation will be sent to the email on file with tracking
          information when shipped.
        </p>
      </div>
    </div>
  )
}
