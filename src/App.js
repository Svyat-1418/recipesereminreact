import './App.css';
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {GiKnifeFork} from "react-icons/gi";


function App() {
    return (
        <>
            <Nav>
                <GiKnifeFork/>
                <Logo to={'/'}>Меню</Logo>
            </Nav>
            <div className='wrapper'>
                <Search/>
                <Category/>
                <Pages/>
            </div>
        </>
    );
}

export default App;


const Logo = styled(Link)`

  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  cursor: pointer;
`
const Nav = styled.div`
  margin-left: 5%;
  padding: 2rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;


  svg {
    font-size: 2rem;
  }

`