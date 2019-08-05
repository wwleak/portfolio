import React from "react"

import Layout from '../components/Layout';
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core";

const Wrapper = styled.main`
    margin: 0;
    padding: 0;
    height: 100%;
`;

const Main = styled.div`
  grid-area: main;
`;

const Foot = styled.div`
  grid-area: foot;
`;

export default () => {
  return (
    <Wrapper>
      <Global
        styles={css`
        body {
          background: #f2f2f2;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
        }
      `}
      />
      <Layout>
        <Main>
          <p>
            Hey everyone, i love building things, been programming seven years ago
            already as a fullstack developer but now i'm more biased to frontend.
            Also i have some experience building hybrid simple mobile apps.

            You can find below a link to my github repository where you can find
            practices and stuff i've done.
          </p>
        </Main>
        <Foot>
          <a href="https://github.com/wwleak">Github</a>
        </Foot>
      </Layout>
    </Wrapper>
  )
}
