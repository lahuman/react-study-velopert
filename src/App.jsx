import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import CheckBox from './components/Checkbox';
import Buttons2 from './components/Button2';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color};
  border-radius: 50%;
  ${(props) => {
    return (
      props.huge &&
      css`
        width: 10rem;
        height: 10rem;
      `
    );
  }}
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;
const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Buttons2 size="large">BUTTON</Buttons2>
          <Buttons2 size="medium">BUTTON</Buttons2>
          <Buttons2 size="small">BUTTON</Buttons2>
        </ButtonGroup>
        <ButtonGroup>
          <Buttons2 color="gray" size="large">
            BUTTON
          </Buttons2>
          <Buttons2 color="gray" size="medium">
            BUTTON
          </Buttons2>
          <Buttons2 color="gray" size="small">
            BUTTON
          </Buttons2>
        </ButtonGroup>
        <ButtonGroup>
          <Buttons2 color="pink" size="large">
            BUTTON
          </Buttons2>
          <Buttons2 color="pink" size="medium">
            BUTTON
          </Buttons2>
          <Buttons2 color="pink" size="small">
            BUTTON
          </Buttons2>
        </ButtonGroup>
      </AppBlock>
      {
        // <Circle color="blue" huge />
        // <Circle color="red" />
        // <CheckBox onChange={onChange} checked={check}>
        //   다음 약관에 모두 동의
        // </CheckBox>
      }
    </ThemeProvider>
  );
}

export default App;
