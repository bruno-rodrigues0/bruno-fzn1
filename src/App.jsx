import AboutMeArea from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageRow from "./components/ProjectRow";

export default function App() {
  return (
    <>
      <Header title={"BRUNO RODRIGUES"} subtitle={"FRONTEND DEV"}/>
      <AboutMeArea />
      <ImageRow />
      <Footer />
    </>
  );
}

