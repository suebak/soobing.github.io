import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
const Contents = styled.div`
  & > h1 {
    font-size: 24px;
    margin-bottom: 14px;
    color: #f76333;
  }
  & > div {
    margin-left: 20px;
    & > h2 {
      font-size: 18px;
      margin-bottom: 8px;
      & > span {
        font-weight: normal;
        font-size: 14px;
      }
    }
    & > h3 {
      font-size: 14px;
      margin-bottom: 12px;
    }
    & > p {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
  
`
const Wrapper = styled.div`
  & > ${Contents} + ${Contents} {
    margin-top: 40px;
  }
`
const ResumePage = () => (
  <Layout>
    <SEO title="Resume :: Soobing's Story" />
    <Wrapper>
      <Contents>
        <h1>SKILLS</h1>
        <div>
          <p><b>Frontend</b> React, Next, Gatsby, Redux-saga, CSS-in-JS, Electron</p>
          <p><b>Backend</b> Node.js</p>
          <p><b>License</b> 정보처리기사</p>
          <p><b>OPIC</b> IM3</p>
        </div>
      </Contents>
      <Contents>
        <h1>OPEN SOURCE</h1>
        <div>
          <h2>Mocha</h2>
          <p>- [PR] [mereged] 테스트 코드에서 함수 목적과 다르게 사용하는 코드 리팩토링 [링크]</p>
          <p>- [Issue Report] [open] 특정 환경에서 모카 테스트 실패하는 이슈 [링크]</p>
        </div>
        <div>
          <h2>Storybook</h2>
          <p>- [Issue Report] [closed] knobs에서 삼항연산자를 사용할 경우 화면 업데이트를 하지 않는 이슈 [링크]</p>
        </div>
        <div>
          <h2>Gatsby</h2>
          <p>- [PR][mearged] Unused variable and wrong propTypes [링크]</p>
        </div>
      </Contents>
      <Contents>
        <h1>EXPERIENCE</h1>
        <div>
          <h2>Sweet Spot <span>2019.02 ~ 현재</span></h2>
          <h3>Front-end Engineer / 연구원</h3>
          <p>- SweetSpot 공간 중개 플랫폼 FO/BO 개발 [링크]</p>
          <p>- Sweetspot Members 서비스 개발 [링크]</p>
        </div>
        <div style={{ marginTop: '30px' }}>
          <h2>Osstem Implant <span>2016.11 ~ 2019.01</span></h2>
          <h3>3D CT Viewer Developer / 사원</h3>
          <p>- One3D 제품 개발 [링크]</p>
          <p>- OneClinic3D 제품 개발 [링크]</p>
        </div>
      </Contents>
    </Wrapper>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ResumePage
