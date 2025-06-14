import Navbar from "../components/common/navbar/Navbar";
import Sidebar from "../components/common/sidebar/Sidebar";
import MainContent from "../components/HomeContent/Playlists"; // Your new main content
import Footer from "../components/common/footer/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="grid grid-cols-6 ">
        <div className="col-span-1 grid mt-16">
          <Sidebar />
        </div>
        <div className="col-span-5 grid mt-4">
          <MainContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
