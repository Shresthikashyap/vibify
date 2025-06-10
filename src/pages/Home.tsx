import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/HomeContent/Playlists"; // Your new main content
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
<div className=" min-h-screen ">
  <Navbar />

  <div className="border">
    <div className="grid min-h-auto grid-cols-6 ">
      <div className="col-span-1 grid ">
            <Sidebar />   
      </div>
      <div className="col-span-5 grid">
        <MainContent />
      </div>
    </div>
  </div>

  <Footer />
</div>


      {/* <Navbar /> */}

      {/* <Sidebar /> */}

{/* <h1 className="flex justify-center items-center">sbfjehuogho</h1> */}
      {/* <MainContent /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
