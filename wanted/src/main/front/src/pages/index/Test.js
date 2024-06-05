import axios from 'axios';
import '../../Main.css';
import Sliders from "../../layout/Sliders";
import React from "react";

function selectData(){
    axios.post('/api/testData',["가","나","다"])
        .then(response=>{
            console.log(response);
        });
}

function movToTest(){
    axios.get('/api/login').then(response=>{
        console.log(response.data.url);

    })
}

function Main() {

    return (
        <div className="App">
            <Sliders></Sliders>
            <div>
                <button onClick={() => selectData()}>조회</button>
                <button onClick={() => movToTest()}>이동</button>
            </div>

        </div>

    );
}

export default Main;
