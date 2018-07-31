import React, {Component, Fragment} from 'react';

class HeadersTable extends Component {
    render() {
        return (
            <Fragment>
                {this.props.header}
            </Fragment>
        )
    }
}
export default HeadersTable;