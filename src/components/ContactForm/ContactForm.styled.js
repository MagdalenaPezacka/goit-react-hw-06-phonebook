import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// export const Title = styled.h1`
//   display: flex;
//   justify-content: center;
// `; 
// export const Container = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `; 
export const Label = styled.label`
  padding-bottom: 10px;
  margin-left: 10px;
`;
export const Input = styled.input`
  margin-bottom: 20px;
  width: 200px;
  border: 1px solid #e4e9f0;
  border-radius: 10px;
  padding: 10px 15px;
  &:focus {
    outline: 1px solid #e4e9f0;
  }
`

export const Button = styled.button `
  width: 100px;
  background-color: #f3f6f9;
  border: none;
  border-radius: 10px;
  color: #062769;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  transition: all 0.8s;
  margin: 0 auto 0;
  &:hover {
  background-color: #062769;
  color: #fff;
}
`