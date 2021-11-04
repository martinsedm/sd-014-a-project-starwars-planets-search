import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 140%;
  }

  body { 
    background: linear-gradient(to bottom, #f05053, #e1eec3);
  }
`;

const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #add;
    margin: 10px 0 20px 0;
    padding: 10px;
    box-sizing: border-box;
`;

export const Title = styled.h1`
    display: flex;
    color: #555;
    font-family: Arial, Helvetica, sans-serif;
    justify-content: center;
    padding: 20px;
`;

export const MainSearchBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    align-content: space-around;
`;
export const SearchBar = styled.input`
    width: 35%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #add;
`;

export const StyleInput = styled.input`
    display: flexbox;
    width: 30%;
    ${sharedStyles}
`;

export const StayleSelect = styled.select`
  ${sharedStyles}
`;

export const StyleForm = styled.form`
  display: flexbox;
  justify-content: center;
  align-items: baseline;
  align-content: space-around;
`;

export const FilterButton = styled.button`
  /* display: block; */
  background-color: #DC143C;
  color: #fff;
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const RemoveButton = styled.button`
  background-color: #DC143C;
  color: #fff;
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
  height: 20px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const FilterSaved = styled.h4`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export default GlobalStyle;
