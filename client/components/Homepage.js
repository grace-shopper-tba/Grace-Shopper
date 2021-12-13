import React from 'react'

export default function Homepage() {
  return (
    <section className="flex-container homepage-container">
      <h1>
        <div>
          <span>Making your life easier,</span>
        </div>
        <div>
          <span>one health box at a time ...</span>
        </div>
      </h1>
      <div id="home-image">
        <img src="https://images.unsplash.com/photo-1511993226957-cd166aba52d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80" />
      </div>
      {/* <div>
        <h3>Making your life easier, </h3>
        <h3>one healthy box at a time...</h3>
      </div> */}
    </section>
  )
}
