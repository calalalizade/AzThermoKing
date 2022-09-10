import { React, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProjectItem(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <li className="project-item">
        <img src={props.img} alt="item"></img>
        <figcaption className="mask">
          <h3>{props.title}</h3>
          <p>{props.info.desc}</p>
        </figcaption>

        <ul className="external">
          <li onClick={handleShow}>
            <a className="fancybox">
              <i className="bi bi-eye"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="bi bi-link"></i>
            </a>
          </li>
        </ul>
      </li>

      <Modal scrollable size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{
              width: "100%",
              paddingBottom: "20px",
              borderRadius: "15px",
            }}
            src={props.img}
          />
          <p>
            <b>Project: {props.info.project}</b>
          </p>
          <p>
            <b>Project Location: </b>
            {props.info.location}
          </p>
          <p>
            <b>Date: </b>
            {props.info.date}
          </p>
          <p>
            <b>Project Description: </b>
            {props.info.desc}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectItem;
