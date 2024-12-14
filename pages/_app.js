import { Header } from "../components/Header";
import { SongsContainer } from "../containers/SongsContainer";
import '../styles/global.css';

function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#ff7e5f] to-[#feb47b] text-white font-sans p-4">
      <Header />
      <SongsContainer />
    </div>
  );
}

export default Home;
