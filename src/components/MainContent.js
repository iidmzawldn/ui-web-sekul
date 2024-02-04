import Hero from "./Hero";
import Cards from "./Cards";
import Imgcard1 from "./../img/pexels4.jpg";
import Imgcard2 from "./../img/pexels2.jpg";
import Imgcard3 from "./../img/pexels3.jpg";
import Kegiatan1 from "./../img/pexels1.jpg";
import Kegiatan2 from "./../img/pexels6.jpg";
import Quotes from "./Quotes";
import Kegiatan from "./Kegiatan";
import Footer from "./Footer";

const MainContent = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>JURUSAN</h1>
            <div className="row gy-3 justify-content-center my-5">
              <div className="col-md-4">
                <Cards image={Imgcard1} judul="IPA" />
              </div>
              <div className="col-md-4">
                <Cards image={Imgcard2} judul="IPS" />
              </div>
              <div className="col-md-4">
                <Cards image={Imgcard3} judul="SASTRA" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <Quotes />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>DOKUMENTASI KEGIATAN</h1>
          </div>
          <div className="text-center my-5">
            <Kegiatan imgkeg={Kegiatan1} text="Kegiatan Belajar Mengajar" />
          </div>
          <div className="text-center my-5">
            <Kegiatan imgkeg={Kegiatan2} text="Kegiatan Di Luar Sekolah" />
          </div>
        </div>
      </div>
      <div className="justify-content-center">
      <Footer />
      </div>
    </>
  );
};
export default MainContent;
