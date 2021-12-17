import React from 'react'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { firstName, lastName } = props

  return (
    <div className="grid-item flex-container thank-you">
      <h3>
        Hello, {firstName} {lastName}
      </h3>
      <div>
        <h3>We are thrilled to serve you!</h3>
        <div>
          <p>
            Welcome to our Grace Grocer project, which is our team's take on the
            Fullstack Academy’s Grace Shopper collaborative project. We’re a
            group of four software engineers who are passionate about anything
            related to code and tech!
          </p>
          <p>
            Our team is composed of the following members who worked together
            for two weeks to bring this project to life.
          </p>
        </div>

        <div className=" flex-container team-profiles">
          <div className="member">
            <img src="https://i.imgur.com/aOliUtQ.jpg" />
            <h3>Addis </h3>
            <div>
              The beginning of a journey; where man will command machine to
              gracefully accomplish what has been arduous in this long journey
              of existence.
              <div>
                <a href="https://www.linkedin.com/in/addislw/">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="member">
            <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/269265170_4696436297116592_5487831706970605230_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=t0LXXKxvaoYAX8QjgAd&_nc_ht=scontent-lga3-1.xx&oh=00_AT9NNraDYxWFOyEekdRau59kfakYmwQJUzajfG0zty45_w&oe=61C16CE3" />
            <h3>Chenel</h3>
            <div>
              I am a software engineer and recent graduate of Fullstack Academy
              with a love for problem solving. Some parts I worked on were the
              functionality for seeing a single product, adding an item to the
              cart, and guest user cart functionality.
              <div>
                <a href="https://www.linkedin.com/in/chenelmorgan/">
                  Linked In
                </a>
              </div>
            </div>
          </div>
          <div className="member">
            <img src="https://i.imgur.com/YFZ3HQc.png" />
            <h3>Juan</h3>
            <div>
              My name is Juan Mateo, a Fullstack Software Engineer that recently
              graduated from the program. Pleased to meet you. Some of the
              contributions I made to this project include: front and back end
              work on all products and single product; front end for rendering
              user data; initial redux for user’s cart. I’m looking for work so
              feel free to reach out to me on
              <a href="linkedin.com/in/juan-mateo-fsa/"> LinkedIn</a>
            </div>
          </div>
          <div className="member">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEvICCAfpCyUQ/profile-displayphoto-shrink_800_800/0/1556296390311?e=1645056000&v=beta&t=ch9b3qbOy4mEx6gU2MkkDhz6_nRh2bVJb9eNtJQgSGw" />
            <h3>Diana</h3>
            <div>
              Hi again! My name is Diana Duran, I am a Fullstack Software
              Engineer. I am a very passionate self starter who cannot get
              enough of coding and bring that energy to the teams I work with. I
              am particularly skilled at project management and thanks to my
              team, I have been able to make use of that throughout the project.
              With Grace Grocer, I was able to pitch my idea for a produce
              themed e-commerce site, building the
              <ul>
                <li>initial UX/UI design draft using Figma,</li>
                <li>database schema,</li>
                <li>
                  products database based on the book The Flavor Bible by Karen
                  Page and Andrew Dornenburg.
                </li>
              </ul>
              On the front-end my contributions include this welcome page,
              homepage, checkout pages, sidebar and many aspects of the cart as
              well as all the styling used. I am in search of opportunities
              therefore feel free to learn more about me through
              <a href="https://www.linkedin.com/in/dianalduran/"> LinkedIn</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
  }
}

export default connect(mapState)(Home)
