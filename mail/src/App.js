import "./App.css";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Mainbar from "./Components/Mainbar/Mainbar";
import Messagecontent from "./Components/Messagecontent/Messagecontent";

import { DataProvider } from "./Context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Header />
      <div className="App">
        <Sidebar />
        <Mainbar />
        <Messagecontent Message={"Message"} />
      </div>
    </DataProvider>
  );
}

export default App;
