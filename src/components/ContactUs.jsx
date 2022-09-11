import { React, useState } from "react";
import { TextField, Button, Snackbar, Alert, Slide } from "@mui/material";
import { Reveal } from "react-awesome-reveal";
import scrollAnimation from "./scrollAnimation/scrollAnimation";
import axios from "axios";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function ContactUs() {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);
  const [sendText, setSendText] = useState("Send");

  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleClick = (Transition) => async (e) => {
    e.preventDefault();
    setSendText("Sending...");

    await axios
      .post("http://localhost:5000/mail", values, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        setTransition(() => Transition);
        setOpen(true);
        setValues({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        setSendText("Send");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="contact">
      <Reveal triggerOnce keyframes={scrollAnimation.fadeInDown}>
        <div className="sec-title">
          <h2>CONTACT</h2>
          <p>Ask how we can help you</p>
        </div>
      </Reveal>

      <Reveal triggerOnce keyframes={scrollAnimation.fadeInUp}>
        <div
          style={{ width: "100vw", display: "flex", justifyContent: "center" }}
        >
          <div className="contact-container">
            <form
              onSubmit={handleClick(TransitionLeft)}
              method="post"
              className="contact-form"
            >
              <TextField
                name="name"
                id="standard-basic"
                label="Your Name"
                variant="standard"
                value={values.name}
                onChange={handleChange}
                required
              />
              <TextField
                name="company"
                id="standard-basic"
                variant="standard"
                label="Company Name"
                value={values.company}
                onChange={handleChange}
                required
              />
              <TextField
                name="email"
                type="email"
                id="standard-basic"
                variant="standard"
                label="Email"
                value={values.email}
                onChange={handleChange}
                required
              />
              <TextField
                name="phone"
                type="number"
                id="standard-basic"
                variant="standard"
                label="Number"
                value={values.phone}
                onChange={handleChange}
                required
              />
              <TextField
                name="message"
                id="standard-multiline-flexible"
                label="Your Message"
                variant="standard"
                multiline
                rows={4}
                value={values.message}
                onChange={handleChange}
                required
              />
              <Button
                sx={{
                  width: "30%",
                  minWidth: "90px",
                  backgroundColor: "#009ee3",
                }}
                type="submit"
                variant="contained"
                startIcon={<i className="bi bi-send"></i>}
              >
                {sendText}
              </Button>
            </form>

            <address className="contact-details">
              <h3>Contact Details</h3>
              <p>
                <i className="bi bi-geo-alt-fill"></i>
                Masazır,
                <span>N.Tusi Street,</span>
                <span>Baku, Azerbaijan</span>
              </p>
              <br></br>
              <p>
                <i className="bi bi-telephone-fill"></i>
                <a href="tel:+9940502880818">+994 (050) 288 08 18</a>
              </p>
              <br></br>

              <p>
                <i className="bi bi-envelope-fill"></i>
                <a href="mailto:info@azthermoking.com">info@azthermoking.com</a>
              </p>
            </address>
          </div>
        </div>
      </Reveal>

      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        autoHideDuration={3000}
        key={transition ? transition.name : ""}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thank you for getting in touch!
        </Alert>
      </Snackbar>
    </section>
  );
}

export default ContactUs;
