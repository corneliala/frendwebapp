import React from 'react'

const MapSection: React.FC = () => {
  return (
    <section>
        <iframe className="google-map" title="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d32544.68286718831!2d18.01359571613497!3d59.34893538235742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac5dd727a529fe56!2sEC%20Utbildning%20AB!5e0!3m2!1sen!2sse!4v1666089249378!5m2!1sen!2sse" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default MapSection