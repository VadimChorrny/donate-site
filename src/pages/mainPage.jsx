import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Table from "../components/table";
import axios from "axios";
import "../styles/main/mainPage.css";

export default function MainPage() {
    const [table, setTable] = useState([]);

    const options = {
        method: "GET",
        url: "https://localhost:44386/api/Table",
        params: {},
        headers: {},
    };

    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {
                setTable(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <div className="container">
            <Header />
            <div className="wrapper">
                <h1>That's main page</h1>
                {table.map((elem) => (
                    <Table
                        id={elem.id}
                        name={elem.name}
                        price={elem.price}
                        image={elem.image}
                        describe={elem.describe}
                    />
                ))}
            </div>
        </div>
    );
}
