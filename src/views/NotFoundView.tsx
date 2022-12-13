import React from 'react'
import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';

const NotFoundView: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-center align-items-center" style={ { height: "500px" } }>
      <h1>404 - Page Not Found</h1>
    </div>
    <div style={{ position: "fixed", bottom:"0"}}>
      <FooterSection />
    </div>


    
    </>
    

    
  )
}

export default NotFoundView;