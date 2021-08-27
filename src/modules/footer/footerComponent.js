import React, { useState } from 'react'
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { history } from "../../managers/history";

export default function FooterComponent() {
    


    return (
        <div>
           
            {/* <div style={{ paddingTop: "10%" }}></div> */}
            {/* !+++++++++++++++++++++! */}
            {/* <div style={{border:"1px solid black"}}></div> */}
            <div className="blockdiv1" style={{backgroundColor:"black",color:"white"}}>
                <div>
                    Footer
                </div>
            </div>
        </div>
    )
}