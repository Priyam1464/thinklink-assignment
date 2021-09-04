import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import SideNavBar from './Components/SideNavBar';
import OrderItems from './Components/OrderItems';
import Inventory from './Components/Inventory';
import LineChart from './Components/LineChart';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <SideNavBar/>
        <p id="overview">Overview</p>
        <OrderItems/>
        <p id="sales" className="header-style"><b>Sales Detail</b></p>
        <LineChart/>
       <p id="title" className="header-style"><b>Inventory</b></p>
        <Inventory />
    </div>
  );
}

export default App;
