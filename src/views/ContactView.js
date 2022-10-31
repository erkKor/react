import React from 'react'
import Breadcrumb from '../components/items/Breadcrumb'
import Navbar from '../components/Navbar'
import Map from '../components/items/Map'
import ContactForm from '../components/ContactForm'
import ContactFormHans from '../components/ContactFormHans'

const ContactView = () => {
  window.top.document.title = 'Contacts | Fixxo.'
  return (
    <>
      <Navbar headerType="header-light"/>
      <Breadcrumb currentPage="Contacts"/>
      {/* <Map /> */}
      {/* <ContactForm /> */}
      <ContactFormHans />
    </>
  )
}

export default ContactView