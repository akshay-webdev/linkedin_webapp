import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./CSS/Header.css";
function App() {
  return (
    <>
       <Header />
      <section className="app_body">
        <div className="container" style={{display:'flex'}}>
          <Sidebar />
          <Feed/>
        </div>
      </section>
    </>
  );
}

export default App;
