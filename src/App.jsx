import Header from './components/Header'
import Main from './components/Main'
// import Footer from './components/Footer'
import Data from './components/Data'
import './App.css'

function App() {
  return (
      <div>
        <Header/>
        {Data.map((collection, idx)=> {
          return(
            <Main key={idx} img={collection.img} name={collection.name} location={collection.location} description={collection.description}/>
          )
        })}
        {/* <Footer/> */}
      </div>
  )
}

export default App
