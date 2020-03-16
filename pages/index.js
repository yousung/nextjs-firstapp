import Head from "next/head";
import Menu from "../components/menu"

const Home = () => (
  <div className="container">
    <Head>
      <title>NextJs First App 자동 배포</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요" />
    </Head>

    <Menu />

    <main>
        <div>내용을 적는 곳입니다.</div>
        <div>내용을 적는 곳일까?</div>
        <div>내용을 적는 곳.</div>
    </main>

    <footer>푸터입니다 제대로된건지 확인하고 있습니다.</footer>
  </div>
);

export default Home;
