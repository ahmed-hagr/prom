import "./popUp.css";

import React, { useState } from "react";
//formik
import { useFormik } from "formik";

//validation
import Schema from "./validatio";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

export default (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [startDate, setDate] = React.useState(new Date());
  const today = new Date();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      assignee: "",
      date: "",
      img: null,
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      props.handleSubmitData(values);
      handleClose();
    },
  });

  return (
    <React.Fragment>
      <Button className="buttonStyle" onClick={handleShow}>
        + New Task
      </Button>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={formik.handleSubmit} className="popUp-parent">
          <Modal.Header closeButton>
            <Modal.Title>New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                name="title"
                id="title"
                value={formik.values.title}
                placeholder="name@example.com"
                autoFocus
                className={
                  formik.touched.title && formik.errors.title
                    ? "is-invalid"
                    : ""
                }
              />
              {formik.touched.title && formik.errors.title ? (
                <small className="text-danger">{formik.errors.title}</small>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                value={formik.values.description}
                name="description"
                id="description"
                as="textarea"
                rows={3}
                className={
                  formik.touched.description && formik.errors.description
                    ? "is-invalid"
                    : ""
                }
              />
              {formik.touched.description && formik.errors.description ? (
                <small className="text-danger">
                  {formik.errors.description}
                </small>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Select user</Form.Label>
              <Select
                isMulti
                value={formik.values.assignee}
                name="assignee"
                id="assignee"
                value={(formik.values.assignee, props.selectedOption)}
                onChange={props.handleSelectChange}
                options={props.multiSelect}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <DatePicker
                name="date"
                id="date"
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                onChange={(value) => {
                  const dateFormat = value.toString().split(" ");
                  formik.setFieldValue(
                    "date",
                    `${dateFormat[2]} / ${dateFormat[1]} / ${dateFormat[3]}`
                  );
                }}
                minDate={today}
                todayButton={"Today"}
              />
            </Form.Group>

            <Form.Group>
              <div class="form-group">
                <label for="exampleFormControlFile1">Example file input</label>

                <input
                  type="file"
                  onChange={(e) => {
                    if (e.target.files.length !== 0) {
                      let reader = new FileReader();
                      reader.onloadend = () => {
                        formik.setFieldValue("img", reader.result);
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                  className="filetype"
                  id="group_image"
                />
              </div>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <div className="col-12 ml-auto ">
              <Button
                className=" col-3"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button type="submit" className="saveBttn col-3">
                submit
              </Button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  );
};
