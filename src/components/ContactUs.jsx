import React from "react";
import { TextField, Button, Snackbar, Alert, Slide } from "@mui/material";
import { Reveal } from "react-awesome-reveal";
import scrollAnimation from "./scrollAnimation/scrollAnimation";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function ContactUs() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => (e) => {
    e.preventDefault();
    setTransition(() => Transition);
    setOpen(true);
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
              className="contact-form"
            >
              <TextField
                id="standard-basic"
                label="Your Name"
                variant="standard"
                required
              />
              <TextField
                id="standard-basic"
                variant="standard"
                label="Company Name"
                required
              />
              <TextField
                type="email"
                id="standard-basic"
                variant="standard"
                label="Email"
                required
              />
              <TextField
                type="number"
                id="standard-basic"
                variant="standard"
                label="Number"
                required
              />
              <TextField
                id="standard-multiline-flexible"
                label="Your Message"
                variant="standard"
                multiline
                rows={4}
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
                Send
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
