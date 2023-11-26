import Banner from "../Banner/Banner";
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
        </div>
    );
};

export default Home;