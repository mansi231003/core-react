import React from "react";
import "./Table.css"

 function Table(props){
    console.log(props)
    return(
        <>
        <div >
        <table className="table-border">
            <thead >
            <tr className="table-heading">
                <th className="items">Item</th>
                <th className="items">Amount</th>
                <th className="items">Spend Date</th>
                <th className="items">Category</th>
            </tr>
            </thead>
            <tbody className="table-body">
                {props.items.map(item=>(
                    <tr key={item.id}>
                        <td className="items">{item.name}</td>
                        <td className="items">{item.amount}</td>
                        <td className="items">{item.spendDate}</td>
                        <td className="items">{item.category}</td>

                    </tr>
                ))}

            </tbody>
        </table>
        </div>
        </>
    )

}

class DataTable extends React.Component{
render(){
    return(
        <>
          <div>
        <table className="table-border">
            <thead>
            <tr className="table-heading">
                <th className="items">Item</th>
                <th className="items">Amount</th>
                <th className="items">Spend Date</th>
                <th className="items">Category</th>
            </tr>
            </thead>
            <tbody className="table-body">
                {this.props.items.map(item=>(
                    <tr key={item.id}>
                        <td className="items">{item.name}</td>
                        <td className="items">{item.amount}</td>
                        <td className="items">{item.spendDate}</td>
                        <td className="items">{item.category}</td>

                    </tr>
                ))}

            </tbody>
        </table>
        </div>
        </>
    )
}
}

export {Table,DataTable};