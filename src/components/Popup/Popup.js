import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby';
import '../Header/Header/node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap'
import "../Popup/Popup.css"

const Popup = () => {
    return (
      <>
      <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
        </Modal.Footer>
        </Modal.Dialog>
      </>
    )
}
