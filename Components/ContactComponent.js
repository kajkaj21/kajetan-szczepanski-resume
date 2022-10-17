import styles from "../styles/ContactComponent.module.scss";
import emailjs from "@emailjs/browser";
import { SectionContainer } from "./layout/SectionContainer";
import { PageHeader } from "./ui/PageHeader";
import { InfoItem } from "./InfoItem";
import { useEffect, useRef, useState } from "react";
import { LoadingSpinner } from "./ui/LoadingSpinner";

export const ContactComponent = () => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const textRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSent(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isSent]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_1vv7o34",
        "template_xekyjro",
        formRef.current,
        "iYyN1xAqkrZgZ3AuN"
      );
      setIsSent(true);
    } catch (err) {
      setIsSent(false);
    }
    clearInputs();
    setIsSending(false);
  };

  const clearInputs = () => {
    nameRef.current.value = null;
    emailRef.current.value = null;
    subjectRef.current.value = null;
    textRef.current.value = null;
  };

  return (
    <SectionContainer>
      {isSending && <LoadingSpinner />}
      {isSent === true && (
        <div className={`${styles.Notification} ${styles.Sent}`}>
          Your message has been sent!
        </div>
      )}
      {isSent === false && (
        <div className={`${styles.Notification} ${styles.Error}`}>
          Could not sent your message, Try again!
        </div>
      )}
      <div className={styles.Container}>
        <PageHeader
          text="contact me here"
          header="contact"
          highlighted="me"
          background="contact"
        />
        <div className={styles.InfoContainer}>
          <InfoItem
            icon={
              <span className="material-symbols-outlined">location_on</span>
            }
            title="Location"
            text="Radom, Poland"
          />
          <InfoItem
            icon={<span className="material-symbols-outlined">mail</span>}
            title="Email"
            text="kajetan.szczepanski20@gmail.com"
          />
          <InfoItem
            icon={<span className="material-symbols-outlined">call</span>}
            title="Mobile Number"
            text="882 560 864"
          />
          <InfoItem
            icon={<span className="material-symbols-outlined">language</span>}
            title="Languages"
            text="Polish, English"
          />
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className={styles.InputsContainer}
        >
          <input
            ref={nameRef}
            name="name"
            type="text"
            placeholder="Your name"
            required
          />
          <input
            ref={emailRef}
            name="email"
            type="text"
            placeholder="Your email"
            required
          />
          <input
            ref={subjectRef}
            name="subject"
            type="text"
            placeholder="Enter subject"
            required
          />
          <textarea
            ref={textRef}
            name="text"
            rows="5"
            placeholder="Message Here..."
            required
          ></textarea>
          <div className={styles.Buttons}>
            <input type="submit" value="Send" />
            <button onClick={clearInputs}>Clear</button>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
};
