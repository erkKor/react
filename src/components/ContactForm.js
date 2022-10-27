import React, {useState} from 'react'

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        // const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!values.name)
            errors.name = "You must enter a name"
        else if(values.comment.length < 2)
            errors.name = "Your name must contain atleast 2 characters"

        if(!values.email)
            errors.email = "You must enter an email"
        else if(!regex_email.test(values.email))
            errors.email = "You must enter a valid email adress eg(name@domain.com)"
        
        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(values.comment.length < 5)
            errors.comment = "Your comment must contain atleast 5 characters"


        if(Object.keys(errors).length === 0)
            setSubmitted(true)
        else 
            setSubmitted(false)

        return errors;
    }


    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }


    function handleKeyPress(e) {
        var key = e.key;
        var regex = /[a-zA-Z]|\./;

        const {id, value} = e.target;
        // console.log(id, value)
        let errorMsg = 'dess';
        
        if( !regex.test(key) ) {
            e.preventDefault();
        }
        else {
            console.log();
            console.log( "You pressed a key: " + key );
        }

        setFormErrors(previuosErrors => {
            // console.log(previuosErrors)
            return {
                ...previuosErrors,
                [id]: errorMsg
            }
        })
    }

  return (
    <section className="contact-form">
        <div className="container">

            {
                submitted ? 
                (<div>
                    Thanks you
                </div>)
                :
                (
                <>
                <h3>Come in Contact with Us</h3>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="inputs">
                        <div>
                            <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} onKeyPress={(e) => handleKeyPress(e)}/>
                            <div id="nameErrorMessage" className="errorMessage">{formErrors.name}</div>
                        </div>
                        <div>
                            <input id="email" className="" type="email" placeholder="Your Email" value={contactForm.email} onChange={handleChange}/>
                            <div id="emailErrorMessage" className="errorMessage">{formErrors.email}</div>
                        </div>
                    </div>
                    <div>
                        <textarea id="comment" className="textarea" name="" cols="30" rows="10" placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
                        <div id="commentErrorMessage" className="errorMessage">{formErrors.comment}</div>
                    </div>
                    <button className="button-theme" type="submit">Post Comments</button>
                </form>
                </>
                )
            }
        </div>
    </section>
  )
}

export default ContactForm