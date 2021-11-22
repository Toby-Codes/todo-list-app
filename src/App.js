import React from 'react';
import { Box } from '@chakra-ui/layout';
import './App.css';
import Todos from './components/Todos';
import TodoList from './components/TodoList';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

function App() {
    return (
        <Box className="app">
            <Header />
            <Main>
                <TodoList />
            </Main>
            <Footer>
                <Todos />
            </Footer>
        </Box>
    );
}

export default App;
