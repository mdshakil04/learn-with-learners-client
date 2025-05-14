import TeachOn from "../../TeachOn/TeachOn";
import Banner from "../Banner/Banner";
import OurInfo from "../OurInfo/OurInfo";
import Partners from "../Partners/Partners";
import PopulerClasses from "../PopulerClasses/PopulerClasses";
import PreviewClass from "../PreviewClass/PreviewClass";
import SearchCourse from "../SearchCourse/SearchCourse";
import TeacherJoin from "../TeacherJoin/TeacherJoin";
import Feedback from "./StudentsFeedback/Feedback";

const Home = () => {
  return (
    <div className=" ">
      <Banner></Banner>
      <div className=" container mx-auto">
        <PopulerClasses></PopulerClasses>
        <PreviewClass></PreviewClass>
        <TeacherJoin></TeacherJoin>
        <Partners></Partners>
        <SearchCourse></SearchCourse>
        <TeachOn></TeachOn>
        <OurInfo></OurInfo>
      </div>
      {/* <Feedback></Feedback> */}
    </div>
  );
};

export default Home;
