import React from "react";
import Table from "@mui/material/Table";
import {TableContainer, TableBody, TableCell, TableHead, TableRow,} from "@mui/material";

export default function Gtab(props) {
    return (
        <>
        {props.Data && props.Data.detail && props.Data.instructions ? (
            <ul 
              style={{
                display: "inline-Block",
                border: "1px solid #000",
                padding: "20px",
                textAlign: "left", 
                }} 
            >
                {props.Data.instructions.map((ins) => {
                    return (
                        <li style={{ fontSize:"12px", textAlign:"left" }}
                        key={inst + "li"}>
                        <pre>{inst}</pre>
                        </li>
                    );
                })}
            </ul> ) : null}
        </>
    )
}