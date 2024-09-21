import React, { useEffect, useState } from "react";
import "./Card.css"

export default function Card(props) {

    return (
        <div className="div">
            <div className="wholeDiv">
                <div className="div1">
                    <h1 className="title">ID : {props._id}</h1>
                    {props.canWithdrawAnyTime ? <div className="type">Dynamic Deposit</div> : <div className="type">Fixed Deposit</div>}
                </div>
                <div className="text">Deposit Amount: {props.depositAmount} VTEST</div>
                <div className="text">Current Amount: {props.currentAmount} VTEST</div>
                <div className="text">Deposit Time: {props.depositTime} VTEST</div>

                {props.canWithdrawAnyTime ? (props.withdrawAmount ? <div className="text">Automatic withdraw Amount: {props.withdrawAmount} VTEST</div> : <div className="text">Automatic withdraw amount: --</div>) : <div className="text">Maturity Date: {props.maturityPeriod}</div>}
                {/* <Text>Deposit Time {props.depositTime}</Text> */}

                {/* {(props.canWithdrawAnyTime) ? <Text> Maturity period {props.maturityPeriod} </Text> : null} */}
                {/* {showChart ? <button className="button" onClick={handleclick}>Hide chart</button> : <button className="button" onClick={handleclick}>Show chart</button>} */}

                {/* <Button onClick={handleclick}>Show chart</Button> */}
                {/* {showChart && <Chart amountData={amountData} timeData={timeData} />} */}
            </div>

        </div>
    )
}