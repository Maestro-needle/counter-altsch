import Counter from "./Counter";
import { Helmet } from "react-helmet-async";

function Greeting() {
  return (
    <div className="main-page">
      <Helmet>
        <title> Counter App</title>
        <meta name="description" content="Counter App" />
        <link rel="canonical" href="/" />
      </Helmet>
      <section className="intro-section">
        <div>
          <h2 className="greeting">Hi there!</h2>
          <h2 className="intro">My name is Yusuf Mariam</h2>
        </div>
        <p className="p1">Nice to have you here.</p>
        <p className="p2">here is my counter app i created using React.JS</p>
      </section>
      <Counter />
    </div>
  );
}

export default Greeting;
