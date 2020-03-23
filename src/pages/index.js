import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return <Layout>
    <SEO title="Developer:: Soobing's Story" />
    <h1>박수빈</h1>
    <p>
      여행을 좋아하는 개발자입니다. 제가 좋아하는 말 중 하나가 Respect Diversity입니다.
      세상은 넓고 다양하다는 것을 알아갈 때마다 특정한 것이 우수한 것이 아니라 모두 가치 있고
      의미 있다는 것을 받아들이게 되는 것 같습니다.
    </p>
    <p>
      과거는 제 거울과도 같고 미래는 오늘을 사는 이유입니다. 그래서 현재, 오늘. 지금을 최선을 다하고
      후회 없이 보내고 싶습니다.
      좋은 사람들과 하고 싶은 일을 하며,
      사랑하는 사람들과 맛있는 음식을 먹고, 많이 보고 경험하며, 노력하고 성장하는! 오글오글 👀(?)
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/resume/">이력서</Link>
  </Layout>
}

export default IndexPage
