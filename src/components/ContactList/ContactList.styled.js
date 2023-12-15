import styled from 'styled-components';
export const List = styled.ul`
  flex-direction: column;
  align-items: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Contact = styled.li`
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  max-width: 100%;
`
export const ContactName = styled.p`
display: inline-block; 
margin: 0;
  padding: 0;
  font-size: 15px;
  height: 30px;
  text-align: center;
`
export const ContactNumber = styled.p `
  display: inline-block;
  font-weight: 600;
  margin: 10px;
  font-size: 15px;
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

  &:hover,
  &:focus {
    background-color: #062769;
    color: #fff;
  }
`