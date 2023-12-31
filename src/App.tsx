import { useState } from "react"
import { Address, Restaurant } from "./model/restaurant"
import Main from "./pages/Main"
import BestMenu from "./components/BestMenu"

const data: Restaurant = {
  name: "누나네 식당",
  category: "western",
  address: {
    city: "incheon",
    detail: "somewhere",
    zipCode: 2342521
  },
  menu: [
    { name: "rose pasta", price: 2000, category: "pasta" },
    { name: "garlic steak", price: 2000, category: "steak" },
  ]
}

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address })
  }
  const showBestMenuName = (name: string) => {
    return name
  }
  return (
    <div className="App">
      <Main
        data={myRestaurant}
        changeAddress={changeAddress}
      />
      <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />
    </div>
  )
}

export default App
