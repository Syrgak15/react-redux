import React from 'react';
import styles from '././MainPage.modules.css'
import Calculator from "../../components/Calculator";

const MainPage = () => {
    return (
        <div>
            <div className="main">
                <Calculator/>
            </div>
        </div>
    );
};

export default MainPage;