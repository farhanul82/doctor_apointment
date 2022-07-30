import React, { useRef, useEffect, useCallback } from "react";

import styled from "styled-components";

import { X } from "react-feather";

const Background = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000 !important;
  background: rgb(10 10 10 / 30%);
`;

const ModalWrapper = styled.div`
  width: 485px;
  height: 305px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  position: relative;
  z-index: 1000 !important;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
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
const GreetingsTitle = styled.p`
  text-align: end;
  font-size: 18px;
`;

const ModalBodyParagraph = styled.p`
  font-size: 20px;
`;

const AppointmentDetailsModal = ({ showModal, setShowModal, data }) => {
  const modalRef = useRef();

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
              <ModalTitle> Appointment Details</ModalTitle>
              <ModalBody>
                <ModalBodyParagraph>
                  Hello {data?.gender === "Male" ? "Mr." : "Mrs."} {data?.name} you have an
                  appointment at {data.time} on {data.date}{" "}
                </ModalBodyParagraph>

                <GreetingsTitle>--Thank you</GreetingsTitle>
              </ModalBody>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            >
              <X />
            </CloseModalButton>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default AppointmentDetailsModal;
