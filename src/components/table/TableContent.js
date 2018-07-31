import React, {Component, Fragment} from 'react';

class TableContent extends Component {
    render() {
        let task = this.props.task;
        let row = task.map((item, index) =>
                <td key={index}>
                    {item}
                </td>
            );
        return (
            <Fragment>
                {row}
            </Fragment>
        )
    }
}
export default TableContent;