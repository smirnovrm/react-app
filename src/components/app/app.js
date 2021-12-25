import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Ivan Ivanov', salary: 1000, increase: true, id: 1},
                {name: 'Sergey Petrov', salary: 800, increase: false, id: 2},
                {name: 'Andrey Sidorov', salary: 5000, increase: true, id: 3},
            ],            
        }

        this.maxIndex = 4;
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];

            return {
                data: data.filter(item => item.id !== id)
            };
        })
    }

    createItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxIndex++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={this.state.data} onDelete={this.deleteItem}/>
                <EmployeesAddForm onCreate={this.createItem}/>
            </div>
        );
    }
    
}

export default App;