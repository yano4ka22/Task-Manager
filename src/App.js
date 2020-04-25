import React, { Component } from 'react';
import './App.css';
import TableTemplates from "./components/table/TableTemplates"
import Filter from "./components/operations/Filter"
import NewRecord from "./components/operations/NewRecord"
import Modal from "./components/operations/Modal"
import ReactDOM from "react-dom";

let headers = [
    "Название", "Описание", "Важность", "Дата окончания", "Дата выполнения"
],
importance = ["Все", "Обычная", "Важная", "Очень важная"],
tasks = [
    ["1", "55555", "Обычная", "10-08-18", ""],
    ["2", "556458", "Важная", "10-08-18", ""]
];
class App extends Component {
    constructor(props) {
        super(props);
        let storedClicks = 0;

        if (localStorage.getItem('clicks')) {
            storedClicks = parseInt(localStorage.getItem('clicks'));
        }

        this.state = {
            clicks: storedClicks,
            filter: importance[0],
            isOpenModal: false
        };
        this.click = this.click.bind(this);
        this.updateCurrentFilter = this.updateCurrentFilter.bind(this);
        this.showHide = this.showHide.bind(this);
    }

    click() {
        let newclick = this.state.clicks + 1;
        this.setState({clicks: newclick});
        // Set it
        localStorage.setItem('clicks', newclick);
    }

    updateCurrentFilter(item) {
        this.setState({
            filter: item
        });
    }

    showHide(value){
        this.setState(state => state.isOpenModal === value ? null : ({
            isOpenModal: value
        }));
    }

  render() {
      return (
      <div className="wrapper">
          <h1>Список задач</h1>
          <NewRecord showHide={this.showHide}/>
          <Filter
              filter={this.state.filter}
              importance={importance}
              updateCurrentFilter={this.updateCurrentFilter}
          />
          <div className="clearfix" />
          <TableTemplates
              headers={headers}
              tasks={tasks}
          />
          <br/>
          <div>
              <button onClick={this.click}>Click me</button> Counter {this.state.clicks}
          </div>
          {
              (this.state.isOpenModal) &&
              <main>
                  {ReactDOM.createPortal(
                      <Modal
                          importance={importance}
                          showHide={this.showHide}
                          isOpenModal={this.state.isOpenModal}
                      >
                          <div className="h2">Создание новой записи</div>
                      </Modal>,
                      document.getElementById('portal')
                  )}
              </main>
          }

      </div>
    );
  }
}

export default App;
