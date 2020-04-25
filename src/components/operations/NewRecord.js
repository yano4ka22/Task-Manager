import React, {Component} from 'react';

class NewRecord extends Component {

    render() {

        return (
            <div className="addition-unit">
                <div className="new-task" onClick={this.props.showHide.bind(this, true)}>Добавить новую запись</div>
            </div>
        )
    }
}
export default NewRecord;