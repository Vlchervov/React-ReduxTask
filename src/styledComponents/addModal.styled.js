import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalButtonAddTask = styled.button`
  position: absolute;
  bottom: 5%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: ${({ change }) => (change ? "none" : "")};

  span {
    position: absolute;
    top: 27px;
    left: 14px;
    width: 30px;
    height: 3px;
    color: #23a3ff;
    background-color: #23a3ff;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    background: ${({ change }) => (change ? "none" : "")};
  }

  strong {
    position: absolute;
    top: 27px;
    left: 14px;
    width: 30px;
    height: 3px;
    color: #23a3ff;
    background-color: #23a3ff;
    background: ${({ change }) => (change ? "none" : "")};
  }
`;

export const Form = styled.form`
  margin-left: 10px;

  textarea {
    width: 295px;
    height: 160px;
    padding-top: 30px;
    border: 2px solid #e6e6e6;
    box-sizing: border-box;
    padding-left: 15px;
    border-radius: 10px;

    ::placeholder {
      width: 255px;
      height: 22px;
      left: 60px;
      font-family: "Gilroy";
      font-style: normal;
      font-size: 16px;
      letter-spacing: 0.01em;

      color: #999999;
    }

    @media (min-height: 568px) and (max-width: 320px) {
      height: 120px;
      width: 250px;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 2rem;
  width: 375px;
  background: #fff;
  height: 452px;
  z-index: 4;
  border-radius: 40px 40px 0px 0px;

  @media screen and (min-height: 812px) and (max-width: 375px) {
    height: 682px;
    width: 375px;
  }

  @media (min-height: 736px) and (max-height: 736px) {
    height: 600px;
    padding-left: 3rem;
  }

  @media (min-height: 667px) and (max-height: 667px) {
    height: 536px;
  }

  @media (min-height: 568px) and (max-width: 320px) {
    height: 430px;
    width: 290px;
  }
`;

export const AddButton = styled.button`
  color: white;
  border-radius: 10px;
  width: 137px;
  height: 40px;
  margin-top: 5px;
  margin-left: 7px;
  background-color: #23a3ff;
  border: 1px solid rgba(255, 255, 255, 0);
  margin-left: 17px;
  font-size: 16px;

  @media (min-height: 568px) and (max-width: 320px) {
    margin-left: 20px;
    height: 40px;
    width: 100px;
  }
`;

export const CloseButton = styled.button`
  margin-left: 4px;
  border-radius: 10px;
  width: 137px;
  height: 40px;
  margin-top: 25px;
  background-color: #f2f2f2;
  color: #4d4d4d;
  border: 1px solid rgba(255, 255, 255, 0);
  font-size: 16px;

  @media (min-height: 568px) and (max-width: 320px) {
    height: 40px;
    width: 100px;
    margin-left: 10px;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: 2;
`;
