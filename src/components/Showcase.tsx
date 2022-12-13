import LeftImage from '../assets/images/img-2.svg'
import RightImage from '../assets/images/img-1.svg'

const Showcase: React.FC = () => {
  return (
    <section className="__showcase">
        <div className="container-fluid">
            <img className="womanimg fr-1" src={LeftImage} alt="" />
            <div className="showcase-title fr-1">
               <h1>SALE UP <span>TO 50% OFF</span></h1>
               <p>Online shopping free home delivery over $100</p>
               <a href="#" className="btn btn-theme">SHOP NOW</a>
            </div>
            <img className="manimg fr-1" src={RightImage} alt="" />
        </div>
    </section>
  )
}

export default Showcase