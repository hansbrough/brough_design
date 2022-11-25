import React, { useState } from 'react';
import Button from '../Button';
import { navigate } from 'gatsby';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit contactForm:",contactForm);
    const formData = Object.assign({"form-name": "contact"}, contactForm);
    const encodedFormData = new URLSearchParams(formData).toString();
    console.log("--- encodedFormData:",encodedFormData)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedFormData
    })
    .then(() => navigate("/"))
    .catch(error => alert(error));
    //setContactForm(initialState);
  };

  return (
    <div className={styles.root}>

      <div className={styles.section}>
        <h4>Phone</h4>
        <p>650-218-4172</p>
      </div>

      <div className={styles.section}>
        <h4>Email</h4>
        <p>
          You can email us at info@broughdesign.com
          or via the contact form below:
        </p>
      </div>

      <div className={styles.contactContainer}>
        <form
          onSubmit={(e) => handleSubmit(e)}
          name="contact"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              value={contactForm.name}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'Full Name'}
              required
            />
            <FormInputField
              id={'phone'}
              value={contactForm.phone}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'Phone Number'}
              required
            />
            <FormInputField
              id={'email'}
              value={contactForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Email'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                value={contactForm.comment}
                handleChange={(id, e) => handleChange(id, e)}
                type={'textarea'}
                labelName={'Comments / Questions'}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'buttonSubmit'}
          >
            submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
