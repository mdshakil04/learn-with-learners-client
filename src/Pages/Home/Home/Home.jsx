
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
        <div className=" bg-[#98EECC]">
            <Banner></Banner>
            <PopulerClasses></PopulerClasses>
            <PreviewClass></PreviewClass>
            <TeacherJoin></TeacherJoin>
            <Feedback></Feedback>
            <Partners></Partners>
            <SearchCourse></SearchCourse>
            <OurInfo></OurInfo>
        </div>
    );
};

export default Home;