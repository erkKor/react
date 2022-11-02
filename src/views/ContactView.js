import React from 'react'
import Breadcrumb from '../components/items/Breadcrumb'
import Navbar from '../components/Navbar'
import Map from '../components/items/Map'
import ContactFormErik from '../components/ContactFormErik'
import ContactForm from '../components/ContactForm'

const ContactView = () => {
  window.top.document.title = 'Contacts | Fixxo.'
  return (
    <>
      <Navbar headerType="header-light"/>
      <Breadcrumb currentPage="Contacts"/>
      {/* <Map /> */}
      {/* <ContactFormErik /> */}
      <ContactForm />
    </>
  )
}

export default ContactView