import React from 'react'

const ContactForm = () => {
  return (
    <section className="contact-form">
        <div className="container">
            <h3>Come in Contact with Us</h3>
            <form onsubmit="submitForm(event)" novalidate>
                <div className="inputs">
                    <div>
                        <input id="name" onkeyup="validate(event)" type="text" placeholder="Your Name" className="error" />
                        <div id="nameErrorMessage" className="errorMessage"></div>
                    </div>
                    <div>
                        <input id="email" onkeyup="validate(event)" type="email" placeholder="Your Email" />
                        <div id="emailErrorMessage" className="errorMessage"></div>
                    </div>
                </div>
                <div>
                    <textarea id="comment" onkeyup="validate(event)" className="textarea"name="" cols="30" rows="10" placeholder="Comments"></textarea>
                    <div id="commentErrorMessage" className="errorMessage"></div>
                </div>
                <button className="button-theme" type="submit">Post Comments</button>
            </form>
        </div>
    </section>
  )
}

export default ContactForm