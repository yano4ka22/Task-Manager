import React, {Component} from 'react';
import HeadersTable from "./HeadersTable"
import TableContent from "./TableContent"
import "./style.css"

class TableTemplates extends Component {
    render() {
        let headers = this.props.headers,
            tasks = this.props.tasks;

        let headerTemplate = headers.map((item, index) =>
                <th key={index}>
                    <HeadersTable header={item}/>
                </th>
        ),
        taskTemplate = tasks.map((item, index) =>
            <tr key={index}>
                <TableContent task={item}/>
            </tr>
        );
        return (
            <table>
                <thead>
                <tr>
                    {headerTemplate}
                </tr>
                </thead>
                <tbody>
                    {taskTemplate}
                </tbody>
            </table>
        )
    }
}
export default TableTemplates;