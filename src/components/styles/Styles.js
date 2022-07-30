import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
`;

export const HeadersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// style fot select field
export const Select = styled.select`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

// Style for initialize modal button
export const ModalButton = styled.button`
  min-width: 100px;
  padding: 7px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

// Style for form submit button
export const SubmitButton = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #2b8768 !important;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

// Style for modal input
export const ModalInput = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: aliceblue;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

export const CalendarDaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

export const CalenderDiv = styled.div`
  width: 200px;
  height: 200px;
  padding: 20px;
  background: mintcream;
  margin: 0px 0px 15px 15px;
  box-shadow: 1px 2px 4px grey;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

export const ViewDate = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;

  width: 25px;
  border-radius: 50%;
  height: 25px;
`;

export const AppointmentContainer = styled.div`
  margin-top: 45px;
  height: 120px;
  overflow-y: auto;
`;

export const AppointmentsModalButton = styled.div`
  border-radius: 4px;
  margin-bottom: 5px;
  border: none;
  background: #2b8768;
  color: #fff;
  padding: 8px 10px;
  cursor: pointer;
  font-size: 12px;
  position: relative;
`;

export const DeleteIcon = styled.span`
  position: absolute;
  color: darkred;
  margin-left: 6px;
  svg {
    width: 14px;
    height: 14px;
  }
`;
