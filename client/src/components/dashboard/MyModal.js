import React, { useRef, useState, useEffect } from "react";
import { Modal, Button, Card, Form, Col, ListGroup} from "react-bootstrap";
import { getApp } from "firebase/app";
import Axios from 'axios';
import {getDownloadURL, ref, uploadBytesResumable, getStorage} from 'firebase/storage';
import {FaImage, FaTimesCircle} from 'react-icons/fa'
import { formatAMPM, formatZeros } from "../commons/Common";
import ReplyDisplay from "./ReplyDisplay";
import BodyDisplay from "./BodyDisplay";
import EvaluationDisplay from "./EvaluationDisplay";
import ReplySend from "./ReplySend";

export default function MyModal(props) {


    if (props.report === undefined) {
        return null
    } 

    

    return (
        <Modal
          {...props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          className="mb-5"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.report.incident_type}
                <div className='h6'>
                    {props.report.date} | {props.report.time}<br/>
                </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <BodyDisplay primary_description={props.report.primary_description} description={props.report.description}/>
            <EvaluationDisplay evaluation = {props.report.evaluation} />
            <ReplyDisplay socket={props.socket} replies={props.report.replies} showreply = {props.showreply} />
          </Modal.Body>
          <ReplySend socket={props.socket} show={props.show} report={props.report} showreply={props.showreply} onHide={props.onHide}/>          
        </Modal>
      );

  }