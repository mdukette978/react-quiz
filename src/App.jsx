



import Loading from './components/Loading'
import Posts from './components/Posts'
import {useState, useEffect} from 'react'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setPosts(data)
    }

    getData()
  }, []) 

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     const data = await res.json()
  //     setPosts(data)
  //   }

  //   getData()
  // }, []) 

  // useEffect(function() {
  //   function getData() {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(function(res) {
  //       return res.json()
  //     })
  //     .then(function(data) {
  //       setPosts(data)
  //     })
  //   }

  //   getData()
  // }, [])
 
  if(posts.length === 0) {
    return <Loading />
  }

  return <Posts posts={posts} />
}

export default App























