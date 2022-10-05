import './App.css';
import { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import Spinner from './components/Spinner'
import { createResource as fetchData } from './helper'


function App() {
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState(null)

    useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`
      console.log(fetchData(searchTerm))
      setData(fetchData(searchTerm))
  }
  }, [searchTerm])
    
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }
    const renderGallery = () => {
    if(data){
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      )
    }
  }

  return (
    <div className="App">
        <SearchBar handleSearch={handleSearch} />
        {message}
        <Suspense fallback={<h1>Loading...</h1>}>
            // <Gallery data={data} />
        </Suspense>
    </div>
)
}

export default App;

