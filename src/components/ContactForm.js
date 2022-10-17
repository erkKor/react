import React from 'react'

const ContactForm = () => {
  return (
    <section className="contact-form">
        <div className="container">
            <h3>Come in Contact with Us</h3>
            <form onsubmit="submitForm(event)" className="grid" novalidate>
                <div>
                    <input id="name" onkeyup="validate(event)" type="text" placeholder="Your Name" className="error" />
                    <span id="nameErrorMessage" className="errorMessage"></span>
                </div>
                <div>
                    <input id="email" onkeyup="validate(event)" type="email" placeholder="Your Email" />
                    <span id="emailErrorMessage" className="errorMessage"></span>
                </div>
                <div>
                    <textarea id="comment" onkeyup="validate(event)" className="textarea"name="" cols="30" rows="10" placeholder="Comments"></textarea>
                    <span id="commentErrorMessage" className="errorMessage"></span>
                </div>
                <button className="button-theme" type="submit">Post Comments</button>
            </form>
        </div>
    </section>
  )
}

export default ContactForm