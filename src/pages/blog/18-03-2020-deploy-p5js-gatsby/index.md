---
path: "/blog/deploy-p5js-gatsby"
date: 2020-03-18T00:12:33.962Z
categories: p5.js react gatsby deploy
title: "p5.js를 react에서 사용하고 gatsby에 배포해보기"
---
## 사용할 라이브러리
- p5.js를 react에서 사용할 수 있는 라이브러리가 있다. 두가지 정도
  + react-p5-wrapper
  + react-p5

## gatsby 배포시 문제
- react-p5를 가지고 배포하려다가 실패해서 react-p5-wrapper 이용. (https://github.com/processing/p5.js/issues/3926)
- 이상한것은 react-p5를 꼭 설치해줘야 빌드 에러가 나지 않았다는점..
- 그리고 위의 링크대로 gatsby-node.js에서 웹펙 설정해줌.
- 그럼에도 불구하고 에러가나서 다음과 같이 처리해 줌
```
 {typeof window !== 'undefined' && <P5Wrapper sketch={Mover} />}
```

![forkyImageTest](../../../images/forky.png)
<img src="../../../images/forky.png" alt="forkyImageTest" width="200"/>

<center><img src="../../../images/forky.png" width="10" height="10" alt='forkyImageTest'></center>
