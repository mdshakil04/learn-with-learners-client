import AddTeacher from "../AddTeacher/AddTeacher";
import Banner from "../Banner/Banner";
import OurInfo from "../OurInfo/OurInfo";
import Partners from "../Partners/Partners";
import PopulerClasses from "../PopulerClasses/PopulerClasses";
import Feedback from "./StudentsFeedback/Feedback";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Partners></Partners>
            <PopulerClasses></PopulerClasses>
            <Feedback></Feedback>
            <OurInfo></OurInfo>
            <AddTeacher></AddTeacher>
        </div>
    );
};

export default Home;