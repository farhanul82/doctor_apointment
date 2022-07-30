import React, { useRef, useEffect, useCallback, useState } from "react";
import { Select, ModalInput, SubmitButton } from "../styles/Styles";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createAppointment, getCalendarData } from "../../redux/action";
import { X } from "react-feather";

const Background = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000 !important;
  background: rgb(10 10 10 / 30%);
`;

const ModalWrapper = styled.div`
  width: 400px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  position: relative;
  z-index: 1000 !important;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  padding: 30px;
  z-index: 1000 !important;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #db700f;
    color: white;
  }
`;

const ModalTitle = styled.h6`
  margin: 0;

  font-size: 20px;
  color: black;
`;

const ModalBody = styled.div`
  margin-top: 15px;
`;

const ErrorMessage = styled.p`
  margin: 0;
  color: red;
  font-size: 14;
`;

const CreateAppointmentModal = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [error, setError] = useState(false);

  // function for close modal
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  // remove modal pressing escape
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  // useForm configuration
  const {
    register,
    handleSubmit,

    reset,
  } = useForm();

  // onSubmit function
  const onSubmit = (data) => {
    const hasEmptyStringInData = Object.keys(data).some((item) => data[item] === "");
    if (!hasEmptyStringInData) {
      dispatch(createAppointment(data));
      dispatch(getCalendarData())
      setShowModal((prev) => !prev);
      reset();
      setError(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <ModalTitle>Create Appointment</ModalTitle>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <ModalInput type="text" placeholder="name" {...register("name")} />
                  <Select
                    {...register("gender")}
                    id="gender"
                    // onChange={(year) => {
                    //   dispatch(filterByYear(parseInt(year.target.value)));
                    //   dispatch(getCalendarData());
                    // }}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </Select>

                  <ModalInput type="text" placeholder="Age" {...register("age")} />
                  <ModalInput type="date" placeholder="Date" {...register("date")} />
                  <ModalInput type="time" placeholder="Time" {...register("time")} />
                  <SubmitButton type="submit">Submit </SubmitButton>
                </form>

                {error ? (
                  <>
                    <ErrorMessage>Please fill up all the fields</ErrorMessage>
                  </>
                ) : (
                  ""
                )}
              </ModalBody>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            >
              {" "}
              <X />
            </CloseModalButton>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default CreateAppointmentModal;
