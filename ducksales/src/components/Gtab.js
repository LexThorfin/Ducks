import React from "react";
import Table from "@mui/material/Table";
import {
    TableContainer, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableRow,
} from "@mui/material";

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
            </ul>
            ) : null}
            {props.Data && props.Data.detail ? (
                <TableContainer style={{ maxHeight: props.Height }}>
                    <Table style={{ width: props.Width }} stickyHeader>
                        <TableHead key={props.tableHead + "TableHead"}>
                            <TableRow key={"01TableHeadRow"}>
                                {props.Data.TableHead.map((header) => {
                                    return <TableCell key={head}>{head.toUpperCase()}</TableCell>;
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody key={props.TName + "TableBody"}>
                            {props.Data.detail
                            ? props.Data.detail.map((dtl, idx) => {
                                return (
                                    <TableRow key={props.TName + idx + "TableRow"}>
                                        {Object.keys(dtl).map((key) => {
                                            return (
                                            <TableCell key={key + dtl[key]}>
                                                {dtl[key]}
                                            </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            }): null}
                        </TableBody>
                    </Table>
                </TableContainer>
            ): null}
        </>
    );
}