import React from 'react'
import Navbar from '../components/Navbar';
import BreadcrumbSection from '../components/BreadcrumbSection';
import MapSection from '../components/MapSection';
import ContactFormSection from '../components/ContactFormSection';
import FooterSection from '../components/FooterSection';

const ContactsView: React.FC = () => {
  document.title= 'Contacts | Fixxo. '

  return (
    <>
        <Navbar />
        <BreadcrumbSection currentPage="Contacts" />
        <MapSection />
        <ContactFormSection />
        <FooterSection />
    </>
    
  )
}

export default ContactsView;