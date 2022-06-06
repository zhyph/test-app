import React, { useEffect } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = React.useState({})
  const [array, setArray] = React.useState([])
  const getData = async () => {
    try {
      const res = await fetch(
        'https://projeto-post.azurewebsites.net/api/cards/2022-05-30',
        { method: 'GET', mode: 'no-cors' }
      )
      console.log(res)
      const nome = await res.json()
      console.log(nome)
      debugger
      // setArray(await res.json())
    } catch (err) {
      console.log(err)
    }
  }
  console.log(array)
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    getData()
  }, [])

  const onSubmit = async e => {
    e.preventDefault()
    data.userId = 1
    const res = await fetch(
      'https://projeto-post.azurewebsites.net/api/cards/2022-05-30',
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
    setData(await res.json())
  }

  return (
    <>
      <form onSubmit={onSubmit} className="header">
        {/* <input type="text" name="title" onChange={handleChange} />
        <input type="text" name="body" onChange={handleChange} />
        <button
          type="submit"
          onClick={e => {
            onSubmit(e)
          }}
        >
          Submit
        </button>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        {array.map(({ title, body }) => {
          return (
            <>
              <h1>{title}</h1>
              <p>{body}</p>
            </>
          )
        })} */}
      </form>
    </>
  )
}

export default App
