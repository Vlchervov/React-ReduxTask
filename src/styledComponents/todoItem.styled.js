import styled from "styled-components";

export const Wrapper = styled.section `

`

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
  z-index: 2;
`;

export const EditModalBody = styled.div`
  padding: 2px;
  width: 410px;
  background: #ffffff;
  height: 452px;
  border-radius: 40px 40px 0px 0px;

  @media (min-height: 812px) and (max-height: 812px) {
    height: 650px;
  }

  @media (min-height: 667px) and (max-height: 667px) {
    height: 510px;
  }

  @media (min-height: 736px) and (max-height: 736px) {
    height: 515px;
    padding-left: 1.5rem;
    height: 576px;
  }

  @media (min-height: 568px) and (max-width: 320px) {
    height: 450px;
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
    margin-left: 20px;
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
`;

export const RemoveListButton = styled.input`
  width: 22px;
  height: 22px;
  position: absolute;
  left: 0;
  background: white;
  margin-left: 16px;
  margin-top: 9px;
  cursor: pointer;
  border: 2px solid #d9d9d9;
  display: ${({change}) => change ? 'none' : 'none'};

  ; 
`;


export const Remove = styled.button `
  border-radius: 50px;
  display: ${({change}) => change ? '' : 'none'};
  background-image: ${({change}) => change ? 'url("img/delete.svg")' : ''};
  width: 22px;
  height: 22px;
  position: absolute;
  left: 0;
  margin-left: 16px;
  margin-top: 9px;
  cursor: pointer;
  background-position: 50%;
  border: 1px none;
  background-repeat: no-repeat;
`