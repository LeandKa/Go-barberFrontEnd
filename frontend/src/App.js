import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Global from './styles/Global';
import Routes from './routes';
import { Store } from './store';

function App() {
    return (
        <>
            <Store>
                <Global>
                    <>
                        <Routes />
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </>
                </Global>
            </Store>
        </>
    );
}

export default App;
