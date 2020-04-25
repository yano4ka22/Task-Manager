import React, {Component} from 'react';
import "./modal.css"
import Filter from "./Filter"
import InputMask from 'react-input-mask';
import ReactDOM from "react-dom";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: this.props.importance[0],
            valueMask: '',
            inputValueName: '',
            inputValueDescription: '',
        };
        this.updateCurrentFilter = this.updateCurrentFilter.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }

    onChange = (event) => {
        this.setState({
            valueMask: event.target.valueMask
        });
    };

    updateInputValueName(event){
        this.setState({
            inputValueName: event.target.value
        });
    }

    updateInputValueDescription(event){
        console.log(event.target.value);
        this.setState({
            inputValueDescription: event.target.value
        });
    }


    saveTask(){
        console.log("ref", ReactDOM.findDOMNode(this.refs.name.value));
    }

    updateCurrentFilter(item) {
        this.setState({
            filter: item
        });
    }

    render() {
        let className = this.props.isOpenModal ? "opened" : "closed";

        return (
            <div className={"modal " + className}>
                <div className="form-task">
                    {this.props.children}
                    <input
                        type="text"
                        placeholder="Название"
                        ref="name"
                        onChange={this.updateInputValueName.bind(this)}
                    />
                    <input
                        type="text"
                        placeholder="Описание"
                        onChange={this.updateInputValueDescription.bind(this)}
                    />
                    <Filter
                        filter={this.state.filter}
                        importance={this.props.importance}
                        updateCurrentFilter={this.updateCurrentFilter}
                    />
                    <InputMask mask="99-99-9999" maskChar={null} placeholder="Дата реализации" value={this.state.valueMask} onChange={this.onChange} />
                    <button className="modal-close-button left" onClick={this.saveTask}>Сохранить</button>
                    <button className="modal-close-button" onClick={this.props.showHide.bind(this, false)}>Закрыть</button>
                    <div className="clearfix" />
                </div>
            </div>
        )
    }
}
export default Modal;