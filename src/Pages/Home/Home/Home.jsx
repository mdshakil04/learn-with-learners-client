
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
        <div className="">
            <Banner></Banner>
            <Partners></Partners>
            <PopulerClasses></PopulerClasses>
            <Feedback></Feedback>
            <OurInfo></OurInfo>
            <TeacherJoin></TeacherJoin>
            <PreviewClass></PreviewClass>
            <SearchCourse></SearchCourse>
        </div>
    );
};

export default Home;