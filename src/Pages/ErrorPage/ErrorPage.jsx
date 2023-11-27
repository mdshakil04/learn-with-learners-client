
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=' text-center items-center flex flex-col'>
            <div className=''>
            <img className=' lg:h-[800px]' src="https://i.ibb.co/HgR1Jvd/21586054-Na-Nov-26.jpg" alt="" />
            </div>
            <h2 className=" text-4xl text-center">Data is on the way..Please! Reload 3 times</h2>
            <p className=' text-2xl text-red-700'>or</p>
            <Link to='/'><button className="btn btn-outline btn-secondary font-bold lg:text-xl px-8 mt-4 mb-4">Go Home </button></Link>
        </div>
    );
};

export default ErrorPage;