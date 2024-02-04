import { Image } from "react-bootstrap";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-5">
            <Image src="assets/pexels5.jpg" fluid />
          </div>
          <div className="col-md-6 my-5">
            <h1 className="text-center fw-bold">SMAN 1 MAJALENGKA</h1>
            <p style={{ textAlign: "justify" }}>
              SMAN 1 Majalengka berdiri pada tahun 1960. Nomor Pokok Sekolah
              Nasional atau NPSN SMAN 1 Majalengka adalah 20213893. Sekolah
              beralamat di Jalan K.H. Abdul Halim No. 113 RT. 03 RW. 09
              Majalengka 45418. Sekolah berdiri di atas tanah seluas 17.900 m².
              Bangunan yang dimiliki diantaranya ruang kepala sekolah, ruang
              wakil kepala sekolah, ruang guru, ruang bimbingan konseling, ruang
              tenaga kependidikan, mesjid, aula, raung perpustakaan, ruang seni,
              ruang osis, 36 ruang kelas, 3 laboratorium IPA, 5 ruang Komputer,
              dan lapangan olah raga. Sejak tahun 2023 sd sekarang, SMAN 1
              Majalengka dipimpin oleh Bapak H. Mohamad Ali, S.Pd., M.A.P.
              Beliau diberikan amanah menjadi Kepala Sekolah di SMA Negeri 1
              Majalengka sejak tanggal 1 Agustus 2023. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
