import Header from '../components/header';
import Button from '../components/button';

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Hello world!</h1>
      <Button value="Login" size="large" onClick={() => console.log('hello')} />
    </div>
  );
};

export default Home;
