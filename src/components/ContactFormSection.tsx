import React, { useState } from 'react'
import { validateEmail, validateText } from '../utilities/validation'
import AlertNotification from './AlertNotification'

interface IFormData {
    name: string
    email: string
    comments: string
}

const ContactFormSection: React.FC = () => {
    const DEFAULT_VALUES: IFormData = {name: '', email:'', comments:''}
    const [formData, setFormData] = useState<IFormData>(DEFAULT_VALUES)
    const [errors,setErrors] = useState<IFormData>(DEFAULT_VALUES)
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [failedSubmit, setFailedSubmit] = useState<boolean>(false)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setFormData({...formData, [id]: value})

        if (id === 'name')
            setErrors({...errors,[id]: validateText(id,value)})
        
        if (id === 'email')
            setErrors({...errors,[id]: validateEmail(id,value)})
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {id, value} = e.target
        setFormData({...formData, [id]: value})

        if (id === 'comments')
            setErrors({...errors,[id]: validateText(id,value, 5)})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(false)
        setFailedSubmit(false)

        if (formData.name !== ''&& formData.email !== '' && formData.comments !== '')
            if (errors.name === '' && errors.email === '' && errors.comments === '') {

                const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })

                if (res.status === 200) {
                    setSubmitted(true)
                    setFormData(DEFAULT_VALUES)
                } else {
                    setSubmitted(false)
                    setFailedSubmit(true)
                }

                
                
            }
    }


    

  return (
    <section className="contact-form">
        <div className="container">
            
                { submitted ? (<AlertNotification alertType='success' title="Thank you for your comment!" text="We will contact you as soon as possible." />) : (<></>)}
                { failedSubmit ? (<AlertNotification alertType='danger' title="Something went wrong!" text="We could not submit your comment." />) : (<></>) }
                
                {
                    <>
                    <h2>Come in Contact with Us</h2>
                    <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <input id="name" type="text" placeholder="Your Name" value={formData.name} onChange={(e) => handleChange (e)} />
                        <div className="errorMessage">{errors.name} </div>
                    </div>
                    <div>
                        <input id="email" type="email" placeholder="Your Mail" value={formData.email} onChange={(e) => handleChange (e)}/>
                        <div className="errorMessage">{errors.email}</div>
                    </div>
                    <div className="textarea">
                        <textarea id="comments" placeholder="Comments"value={formData.comments} onChange={(e) => handleTextAreaChange (e)}></textarea>
                        <div className="errorMessage">{errors.comments}</div>
                    </div>
                    <div className="formbtn">
                        <button type="submit" className="btn-theme">Post Comments</button>
                    </div>
                    </form>
                    </>
                }
        </div>
    </section>
  )
}


export default ContactFormSection