import React, { useState } from "react"
import styled from "styled-components"
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Toast, Button} from 'react-bootstrap'
import "../Popup/Popup.css"


const  Popup = () => {

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <section class="popup">
      <Row>
        <Col>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" className="rounded" alt="" />
            </Toast.Header>
          </Toast>
        </Col>
      </Row>
    </section>
  );
}

export default Popup 