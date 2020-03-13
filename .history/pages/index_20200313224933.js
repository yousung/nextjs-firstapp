import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <title>Next JS First App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div>First App</div>
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>
  </div>
);

export default Home;
