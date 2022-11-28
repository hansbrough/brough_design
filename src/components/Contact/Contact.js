import React, { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown/Dropdown';
import { navigate } from 'gatsby';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    address: '',
    description: '',
    budget: ''
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    console.log("handleChange id:",id," e:",e);
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.assign({"form-name": "contact"}, contactForm);
    const encodedFormData = new URLSearchParams(formData).toString();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedFormData
    })
    .then(() => navigate("/"))
    .catch(error => alert(error));
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
          or via the contact form below to tell us about your project.
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
            <FormInputField
              id={'address'}
              value={contactForm.phone}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'Project Site Address'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'description'}
                value={contactForm.description}
                handleChange={(id, e) => handleChange(id, e)}
                type={'textarea'}
                labelName={'Brief Project Description'}
                required
              />
            </div>
            <div className={styles.budgetRange}>
              <Dropdown
                id={'budget'}
                handleChange={(id, e) => handleChange(id, e)}
                label="Estimated Budget (Total Project)"
                optionList = {[
                  {label:"$15,000 - $30,000", value:"$15,000 - $30,000"},
                  {label:"$30,000 - 60,000", value:"$30,000 - 60,000"},
                  {label:"$60,000 - 100,000", value:"$60,000 - 100,000"},
                  {label:"$100,000 - 150,000", value:"$100,000 - 150,000"},
                  {label:"$150,000 + ", value:"$150,000 + "}
                ]}
                required
              >
              </Dropdown>
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
