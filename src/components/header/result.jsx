import { formatter } from "../../util/investment";

function createData (result) {
    let rows = [];
    let invValue=result[1][0];
    let interest = 0;
    for (let i=1;i<=result[1][3];i++){
        rows.push(createRow(i,invValue,interest, result[1]))
        interest += (invValue*((+result[1][2]/100)));
        invValue = (invValue*(1+(+result[1][2]/100))) + +result[1][1];
    }
    return rows;
}

function createRow (year, invValue, interest, data) {
    return (
        <tr key={year}>
            <td>{year}</td>
            <td>{formatter.format((invValue*(1+(+data[2]/100))) + +data[1])}</td>
            <td>{formatter.format(invValue*((+data[2]/100)))}</td>
            <td>{formatter.format((invValue*((+data[2]/100)))+interest)}</td>
            <td>{formatter.format((year*+data[1])+ +data[0])}</td>
        </tr>
    );
}

function createTable (result) {
    
    return (
        <>
            <thead>
                <tr>
                    {result[0].map((name) => <th key={name}>{name}</th>)}
                </tr>
            </thead>
            <tbody>
                {createData(result)}
            </tbody>
        </>
    );
}

export default function Result ({value}) {

    let RESULT = [
        ["Year", "Investment value", "Interest (Year)", "Total Interest", "Invested Capital"],
        [value[0],value[1],value[2],value[3]]
    ];

    return (
        <table id="result">
            {createTable(RESULT)}
        </table>
    );
}
