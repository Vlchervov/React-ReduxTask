import styled from "styled-components";

export const Wrapper = styled.li`
  position: relative;
  list-style: none;
`;

export const ListItem = styled.label`
  height: 22px;
  font-family: "Gilroy";
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #000000;
  @media (min-height: 568px) and (max-width: 320px) {
    font-size: 15px;
  }

  &::before {
    z-index: 10;
    content: " ";
    cursor: pointer;
    position: absolute;
    top: 7px;
    left: -35px;
    height: 22px;
    width: 22px;
    border: ${({ change }) => (change ? "none" : "1px solid #D9D9D9")};
    background-color: white;
    border-radius: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
  }
`;

export const EditItemModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.2);
  justify-content: flex-start;
  align-items: flex-end;
  z-index: 11;
`;

export const EditModalBody = styled.div`
  padding: 2px;
  width: 410px;
  background: #ffffff;
  height: 452px;
  border-radius: 40px 40px 0px 0px;

  @media (min-height: 812px) and (max-height: 812px) {
    height: 740px;
  }

  @media (min-height: 667px) and (max-height: 667px) {
    height: 595px;
  }

  @media (min-height: 736px) and (max-height: 736px) {
    padding-left: 1.5rem;
    height: 662px;
  }

  @media (min-height: 568px) and (max-width: 320px) {
    height: 490px;
  }

  input {
    width: 295px;
    height: 50px;
    border: 2px solid #e6e6e6;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 50px;
    margin-left: 33px;
    padding-left: 10px;
    font-family: "Gilroy";

    @media (min-height: 568px) and (max-width: 320px) {
      margin-left: 19px;
      width: 270px;
    }
  }
`;

export const RedactionButton = styled.button`
  font-size: 16px;
  color: white;
  border-radius: 10px;
  width: 137px;
  height: 40px;
  margin-top: 25px;
  margin-left: 35px;
  background-color: #23a3ff;
  border: 1px solid rgba(255, 255, 255, 0);

  @media (min-height: 568px) and (max-width: 320px) {
    margin-left: 25px;
    width: 120px;
  }
`;

export const ButtonCancel = styled.button`
  font-size: 16px;
  border-radius: 10px;
  width: 137px;
  height: 40px;
  margin-left: 15px;
  background-color: #f2f2f2;
  border: 1px solid rgba(255, 255, 255, 0);

  @media (min-height: 568px) and (max-width: 320px) {
    width: 120px;
  }
`;

export const TodoItemButton = styled.div`
  position: absolute;
  top: 15%;
  left: -12%;
  cursor: pointer;

  /* &:before {
    content: "";
    position: absolute;
    width: 15px;
    left: 6px;
    top: 5px;
    height: 15px;
    border-radius: 100%;
    z-index: 10;
    background-size: 100%;
  } */

  /* input[type="checkbox"] {
    display: none;
    z-index: ${({ change }) => (change ? "1" : "10")};
  } */

  /* input[type='checkbox']:checked + label::before {
    background-image: url(img/check.svg)
  } */

  /* &::after {
    content: " ";
    cursor: pointer;
    position: absolute;
    display: block;
    left: 3px;
    top: 1px;
    height: 22px;
    width: 22px;
    border: 1px solid #d9d9d9;
    border-radius: 50px;
    background-color: white;
    display: ${({ change }) => (change ? "none" : "")};
  } */
`;

export const Remove = styled.button`
  border-radius: 50px;
  display: ${({ change }) => (change ? "" : "none")};
  width: 22px;
  height: 22px;
  position: absolute;
  left: -12%;
  top: -1%;
  margin-top: 9px;
  cursor: pointer;
  background-position: 50%;
  background-color: white;
  border: ${({ change }) => (change ? "none" : "2px solid #d9d9d9")};
  background-repeat: no-repeat;
  z-index: ${({ change }) => (change ? "10" : "1")};

  &::after {
    background-image: ${({ change }) =>
      change ? 'url("img/delete.svg")' : ""};
    content: " ";
    cursor: pointer;
    display: block;
    width: 22px;
    height: 22px;
  }
`;
