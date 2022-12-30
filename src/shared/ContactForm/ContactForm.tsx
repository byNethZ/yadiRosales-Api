import React, { useEffect, useState } from "react";
import { IForm } from "../../interfaces/Propety.interface";
import requests from "../../request";

import charging from "./../../img/charging.gif";

import "./contactform.css";

interface Props {
  id: number | undefined;
  setCloseModal?: (bol: boolean) => void;
}

const ContactForm = ({ id, setCloseModal }: Props) => {
  const [sending, setSending] = useState<boolean>(false);
  const [isSended, setIsSended] = useState<boolean>(false);
  const [tomorrow, setTomorrow] = useState<Date>(new Date())
  const [formData, setformData] = useState<IForm>({
    propertyid: 1,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    typetour: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    if (id) setformData({ ...formData, propertyid: id });

    setTomorrowDate()

  }, [id]);

  const setTomorrowDate = () => {
    let today = new Date();
    let nextDay = new Date(today);
    
    nextDay.setDate(today.getDate() + 1);
    setTomorrow(nextDay)

  }

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setSending(true);

    const response = await fetch(`${requests.sendContact}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (data.code === 200) {
      setSending(false);
      setIsSended(true);
      localStorage.setItem('messageSended', '1');
    }
    if(setCloseModal) setCloseModal(false);
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={(evt) => handleSubmit(evt)}>
        <h3>Ask a question</h3>
        <div className="contact-form-row">
          <div className="contact-form-field">
            <label htmlFor="firstname">First Name</label>
            <input
              onChange={(evt) =>
                setformData({
                  ...formData,
                  [evt.target.name]: evt.target.value,
                })
              }
              required
              type="text"
              name="firstname"
              id="firstname"
            />
          </div>
          <div className="contact-form-field">
            <label htmlFor="lastname">Last Name</label>
            <input
              onChange={(evt) =>
                setformData({
                  ...formData,
                  [evt.target.name]: evt.target.value,
                })
              }
              required
              type="text"
              name="lastname"
              id="lastname"
            />
          </div>
        </div>

        <div className="contact-form-row">
          <div className="contact-form-field">
            <label htmlFor="email">Email</label>
            <input
              onChange={(evt) =>
                setformData({
                  ...formData,
                  [evt.target.name]: evt.target.value,
                })
              }
              required
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="contact-form-field">
            <label htmlFor="phone">Phone</label>
            <input
              onChange={(evt) =>
                setformData({
                  ...formData,
                  [evt.target.name]: evt.target.value,
                })
              }
              required
              type="phone"
              name="phone"
              id="phone"
            />
          </div>
        </div>

        <div className="contact-form-row">
          <div className="contact-form-message">
            <label htmlFor="message">What would you like to know?</label>
            <textarea
              onChange={(evt) =>
                setformData({
                  ...formData,
                  [evt.target.name]: evt.target.value,
                })
              }
              required
              name="message"
              id="message"
            ></textarea>
          </div>
        </div>

        <div className="contact-form-checkbox-container">
          <div className="contact-form-checkbox">
            <input
              onChange={(evt) =>
                setformData({
                  ...formData,
                  [evt.target.name]: evt.target.value,
                })
              }
              required
              type="radio"
              name="typetour"
              value="personal"
              id="personal"
            />
            <label htmlFor="personal">Tour in Person</label>
          </div>
          <div className="contact-form-checkbox">
            <input
              onChange={(evt) =>
                setformData({
                  ...formData,
                  [evt.target.name]: evt.target.value,
                })
              }
              required
              type="radio"
              name="typetour"
              value="virtual"
              id="virtual"
            />
            <label htmlFor="virtual">Tour via Video Chat</label>
          </div>
        </div>

        <div className="contact-form-row">
          <div className="contact-form-field">
            <label htmlFor="date">Date</label>
            <input
              onChange={(evt) =>
                setformData({
                  ...formData,
                  [evt.target.name]: evt.target.value,
                })
              }
              required
              type="date"
              name="date"
              id="date"
              min={`${tomorrow.getFullYear()}-${tomorrow.getMonth()+1}-${tomorrow.getDate()}`}
            />
          </div>
          <div className="contact-form-field">
            <label htmlFor="time">Time of Day</label>
            <select
              onChange={(evt) =>
                setformData({
                  ...formData,
                  [evt.target.name]: evt.target.value,
                })
              }
              required
              name="time"
              id="time"
              defaultValue=""
            >
              <option disabled value="">
                Select one option
              </option>
              <option value="anytime">Anytime</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
        </div>

        <div className="contact-form-submit">
          {!sending && !isSended && <button>Submit</button>}
          {sending && (
            <img className="charging" src={charging} alt="Charging" />
          )}
          {!sending && isSended && (
            <h3>Message sent successfully</h3>
          )}
        </div>

        <div className="contact-form-disclaimer">
          <p>
            <span>Disclaimer:</span> By entering your information and submitting
            this form, you agree to our Terms of Use and Privacy Policy and that
            you may be contacted by Yadi Rosales Realtor by phone, text message
            and email about your real estate interests. Frequency of contact may
            vary and message and data rates may apply.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
