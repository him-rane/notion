import "./home.css";
import Header from "../Components/Header/Header";
import Posts from "../Components/Posts/Posts";
import Sidebar from "../Components/Sidebar/Sidebar";

function Home() {
  return (
    <div>
      <Header></Header>
      <div className="home">
        <Posts></Posts>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default Home;
