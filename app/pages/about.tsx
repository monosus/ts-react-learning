import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <h1 css={helloStyle}>Hello</h1>
      <Button >hoge</Button>
    </>
  );
};

const helloStyle = css({
  color: 'red'
});

const Button = styled.button`
  color: turquoise;
`

// 以下のような書き方でもOK
// const helloStyle = css`
//   color: red;
// `

export default Home;