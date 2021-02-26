import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {
  Button,
  Card,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  Row
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "inputChange":
          return { ...state, [action.fieldName]: action.fieldValue };
        case "bookTimeSlot":
          return {
            ...state,
            timeslots: state.timeslots.map(timeslot => {
              if (timeslot.id !== state.id) {
                return timeslot;
              }
              return {
                ...timeslot,
                booked: state.name==="" && state.phone===undefined?false:true,
                name: state.name,
                phone: state.phone
              };
            })
          };
        case "closeModal":
          return {
            ...state,
            bookingModalStatus: "closed",
            id: null,
            name: "",
            phone: ""
          };
        case "openModal":
          return {
            ...state,
            bookingModalStatus: "opened",
            id: action.id
          };
        case "closeUpdateModal":
          return {
            ...state,
            reviewingModalStatus: "closed",
            id: null,
            name: "",
            phone: "",
            
          };
        case "openUpdateModal":
          const { name, phone } = state.timeslots.find(
            ({ id }) => id === action.id
          ) || { name: "y", phone: "u" };
          
          return {
            ...state,
            reviewingModalStatus: "opened",
            id: action.id,
            name,
            phone,
          };
        default:
          return state;
      }
    },
    {
      timeslots: [
        {
          "id": 0,
          "startTime": "9:00 A.M.",
          "endTime": "10:00 A.M.",
          "booked": false,
          "name": null,
          "phone": null
        },
        {
          "id": 1,
          "startTime": "10:00 A.M.",
          "endTime": "11:00 A.M.",
          "booked": false,
          "name": null,
          "phone": null
        },
        {
          "id": 2,
          "startTime": "11:00 A.M.",
          "endTime": "12:00 P.M",
          "booked": false,
          "name": null,
          "phone": null
        },
        {
          "id": 3,
          "startTime": "12:00 P.M.",
          "endTime": "1:00 P.M.",
          "booked": false,
          "name": null,
          "phone": null
        },
        {
          "id": 4,
          "startTime": "1:00 P.M.",
          "endTime": "2:00 P.M.",
          "booked": false,
          "name": null,
          "phone": null
        },
        {
          "id": 5,
          "startTime": "2:00 P.M.",
          "endTime": "3:00 P.M.",
          "booked": false,
          "name": null,
          "phone": null
        },
        {
          "id": 6,
          "startTime": "3:00 P.M.",
          "endTime": "4:00 P.M.",
          "booked": false,
          "name": null,
          "phone": null
        },
        {
          "id": 7,
          "startTime": "4:00 P.M.",
          "endTime": "5:00 P.M.",
          "booked": false,
          "name": null,
          "phone": null
        }
      ],
      bookingModalStatus: "closed",
      reviewingModalStatus: "closed",
      name: "",
      phone: "",
      id: null
    }
  );
  const {
    timeslots,
    bookingModalStatus,
    reviewingModalStatus,
    name,
    phone
  } = state;

  console.log('name', name);
  console.log('phone', phone);

  function onCloseModal(e) {
    dispatch({ type: "closeModal" });
  }
  function onOpenModal(e) {
    const id = parseInt(e.target.getAttribute("data-timeslot-id"), 10);
    dispatch({ type: "openModal", id });
  }
  function onOpenUpdateModal(e) {
    const id = parseInt(e.target.getAttribute("data-timeslot-id"), 10);
    dispatch({ type: "openUpdateModal", id });
  }
  function onCloseUpdateModal() {
    dispatch({ type: "closeUpdateModal" });
  }

  function onFormFieldChange(e) {
    dispatch({
      type: "inputChange",
      fieldName: e.target.name,
      fieldValue: e.target.value
    });
  }
  function onPhoneChange(e) {
    console.log('e', typeof(e));
    dispatch({
      type: "inputChange",
      fieldName: "phone",
      fieldValue: e
    });
  }
  function onBookTimeSlot(e) {
    e.preventDefault();
    if (name === "") {
      return;
    } else if (phone === "") {
      return;
    }
    dispatch({ type: "bookTimeSlot" });
    dispatch({ type: "closeModal" });
  }
  function onUpdateTimeSlot(e) {
    e.preventDefault();
    dispatch({ type: "bookTimeSlot" });
    dispatch({ type: "closeUpdateModal" });
  }
  return (
    <>
      <Jumbotron className="text-sm-left text-md-center">
        <Container>
          <p className="lead">
            Appointment App
          </p>
          <p>
            Time slots marked in <span style={{color: 'red'}}>red</span> are
            already booked.
          </p>
        </Container>
      </Jumbotron>
      <Container className="App" >
        <Row>
          {timeslots.map(({ id, startTime, endTime, booked }) => {
            if (!booked) {
              return (
                <Col sm={{ size: 12, offsstateet: 1 }} key={id}>
                  <Card body key={id}>
                    <center><CardTitle tag="h5">{`${startTime} - ${endTime}`}</CardTitle>
                    <Col sm={{ size: 10}} key={id}>
                    <Button
                      color="secondary"
                      onClick={onOpenModal}
                      data-timeslot-id={id}
                    >
                      Book This Time Slot
                    </Button>
                    </Col>
                    </center>
                  </Card>
                </Col>
              );
            }
            return (
              <Col sm={{ size: 12 }} key={id}>
                <Card body key={id} color="danger" outline>
                <center><CardTitle tag="h5">{`${startTime} - ${endTime}`}</CardTitle>
                <Col sm={{ size: 10}} key={id}>
                  <Button
                    color="danger"
                    onClick={onOpenUpdateModal}
                    data-timeslot-id={id}
                  >
                    Update This Time Slot
                  </Button>
                  </Col>
                  </center>
                </Card>
              </Col>
            );
          })}
        </Row>

        <Modal
          isOpen={bookingModalStatus === "opened"}
          toggle={onCloseModal}
          className="bookingModal"
        >
          <ModalHeader toggle={onCloseModal}>
            Please Enter Your Contact Information.
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={onBookTimeSlot}>
              <FormGroup>
                <Label for="name">Your Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First and Last Name"
                  onChange={onFormFieldChange}
                  value={name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Your Phone Number</Label>
                <PhoneInput
                  name="phone"
                  id="phone"
                  placeholder="phone"
                  onChange={onPhoneChange}
                  value={phone}
                />
              </FormGroup>
              <Button
                type="submit"
                color="primary"
                className="mx-1"
                onClick={onBookTimeSlot}
              >
                Book
              </Button>
              <Button
                color="secondary"
                className="mx-1"
                onClick={onCloseModal}
              >
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>

        <Modal
          isOpen={reviewingModalStatus === "opened"}
          toggle={onCloseUpdateModal}
          className="reviewingModal"
        >
          <ModalHeader toggle={onCloseUpdateModal}>
            Update Your Contact Information.
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={onUpdateTimeSlot}>
              <FormGroup>
                <Label for="name2">Your Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name2"
                  placeholder="First and Last Name"
                  onChange={onFormFieldChange}
                  value={name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone2">Your Phone Number</Label>
                <PhoneInput
                  name="phone"
                  id="phone"
                  placeholder="phone"
                  onChange={onPhoneChange}
                  value={phone}
                />
              </FormGroup>
              <Button
                type="submit"
                color="primary"
                className="mx-1"
                onClick={onUpdateTimeSlot}
              >
                Save Updates
              </Button>
              <Button
                color="secondary"
                className="mx-1"
                onClick={onCloseUpdateModal}
              >
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
