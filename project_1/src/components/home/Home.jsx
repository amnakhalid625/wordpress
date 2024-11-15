import shoeImg from '../../../public/shoe-img.png'
import './home.css'
const Home = () => {
  return (
    <>
    <div className="home_parent">
        <div className="home_txt">
            <h1>your feet deserve the best</h1>
            <p>your feet deserve the best and we'are here to help to you with other shoes.your feet deserve the best and we'are here to help to you with other shoes</p>
       <button className='btn-1'>Shop Now</button>
       <button className='btn-2'>Category</button>
        </div>

        <div className="home_img">
            <img src={shoeImg} alt="" />
        </div>
    </div>
    </>
  )
}

export default Home