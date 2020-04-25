import React, {Component} from 'react';

class ImportanceItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        return (event.props.item);
    };

    render() {
        return (
            <p onClick={(() => {
                this.props.updateCurrentFilter(this.handleClick(this));
            })}>{this.props.item}</p>
        )
    }
}
export default ImportanceItem;