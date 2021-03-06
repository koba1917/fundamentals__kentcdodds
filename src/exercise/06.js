// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  /*function handleSubmit(event) {
    event.preventDefault()
    const value = event.target.elements.usernameInput.value
    alert(value)
  }*/

  const [username, setUsername] = React.useState('')

  //const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
    setUsername('')
  }

  function handleChange(event) {
    const {value} = event.target
    setUsername(value.toLowerCase())
    //const isLowerCase = value === value.toLowerCase()
    //setError(isLowerCase ? null : 'User name must be lowecase')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          value={username}
          id="usernameInput"
          type="text"
          onChange={handleChange}
        />
      </div>
      {/*<div style={{color: 'red'}}>{error}</div>*/}
      <button /*disabled={Boolean(error)}*/ type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
