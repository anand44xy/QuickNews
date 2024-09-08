import Rocket from '../assets/Rocket.gif';

const Spinner = () => {
    return (
      <div className='text-center my-3'>
        <img src={Rocket} alt="loading..." />
      </div>
    );
}

export default Spinner;
