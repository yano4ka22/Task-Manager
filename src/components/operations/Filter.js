import React, {Component} from 'react';
import "./operations.css"
import ImportanceItem from "./ImportanceItem"

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFilterActive: false
        };
        this.showHide = this.showHide.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount() {
        window.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        window.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event){
        if (this.isOutside(event)) {
            this.setState(() => ({
                isFilterActive: !this.state.isFilterActive
            }));
        }
    }

    isOutside(event) {
        return this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.isFilterActive;
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }


    showHide(){
        this.setState({
            isFilterActive: !this.state.isFilterActive
        });
    }

    render() {
        let importanceTemplate = this.props.importance.map((item, index) =>
            <div key={index}>
                <ImportanceItem item={item} updateCurrentFilter={this.props.updateCurrentFilter}/>
            </div>
        );
        return (
            <div className="filter" ref={this.setWrapperRef}>
                <div className="select-importance" onClick={(() => {this.showHide() })}>{this.props.filter}</div>
                {
                    this.state.isFilterActive &&
                        <div className="filter-value" >
                            {importanceTemplate}
                        </div>
                }
            </div>
        )
    }
}
export default Filter;