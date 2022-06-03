import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import tableService from "../../api/tables";
import "../../styles/main/tableInfo.css";

export default function TableInfo(props) {
    const { id } = useParams();
    console.log(id);
    const [data, setData] = useState("Null");

    useEffect(async () => {
        const response = await tableService.getTableById(id).then((res) => {
            return res.data;
        });
        console.log('response: ',response);
        setData(response);
    }, []);

    return (
        <div className="table-info__container">
            <Header />
            <div className="table-info__wrapper">
                <h2>Name: {data.name}</h2>
                <p>Descrybe: {data.describe}</p>
                <img src={data.image} alt="image" />
                <span>Price: {data.price}</span>
            </div>
        </div>
    );
}
