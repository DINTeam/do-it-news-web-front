import Header from '../components/header';
import Logo from '../components/logo';
import Textfield from '../components/textfield';

const Home = () => {
  return (
    <div>
      <Header />
      <Logo size="medium" />
      <Textfield active label="아이디" />
    </div>
  );
};

export default Home;
