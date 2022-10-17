import React from 'react'
import Breadcrumb from '../components/items/Breadcrumb'
import Navbar from '../components/Navbar'
import Map from '../components/items/Map'
import ContactForm from '../components/ContactForm'

const ContactView = () => {
  return (
    <>
      <Navbar headerType="header-light"/>
      <Breadcrumb />
      <Map />
      <ContactForm />
    </>
  )
}

export default ContactView