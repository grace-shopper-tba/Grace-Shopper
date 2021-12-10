import React from 'react';

const dummyData = [{id: 1, firstName: "A"}, {id: 2, firstName: "B"}, {id: 3, firstName: "C"}, {id: 4, firstName: "D"}, {id: 5, firstName: "E"}]

class AllUsers extends React.Component {

render() {
  const users = dummyData;
  return (
    <div>
      {users.map(user => (
        <p key={user.id}>
          ID: {user.id} <br />
          Name: {user.firstName}
        </p>
      ))}
    </div>
    )
  }
}

export default (AllUsers);
