// import logo from './logo.svg';
import './App.css';
import {LoginForm} from './components/LoginForm';
import {SignUpForm} from './components/signUpForm';
import {Header} from './components/Header';
import {SearchBar} from './components/SearchBar';

function App() {
  return (
    <div className="MainBody">
      <Header />
      <SearchBar />
    {/* <LoginForm /> */}
    {/* <SignUpForm /> */}
    </div>
  );
}

export default App;
