import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import SignIn from './components/sign-in/sign-in.component';
import Home from './routes/home/home.component';

const Shop = () => {
  return <h1>fsdf</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
