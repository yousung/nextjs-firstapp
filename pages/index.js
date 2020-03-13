import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <title>Next JS First App Test</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div>내용을 적는곳 자동 배포가 되는지 확인합니다.</div>
    </main>

    <footer>푸터</footer>
  </div>
);

export default Home;
