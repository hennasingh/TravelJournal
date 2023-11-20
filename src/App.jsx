import travelData from './data'
import TravelCard from './components/TravelCard'
import Navbar from './components/navbar'
import './App.css'

function App() {

  const cards = travelData.map(item => {
    return (
      <TravelCard
          key={item.id}
          item={item} 
      />
    )
  })

  return (
    <>
      <Navbar />
      <section className="travel-list">
          {cards}
      </section>
    </>
  )
}

export default App
