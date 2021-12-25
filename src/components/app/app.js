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
                {name: 'Ivan Ivanov', salary: 1000, increase: true, like: true, id: 1},
                {name: 'Sergey Petrov', salary: 800, increase: false, like: false, id: 2},
                {name: 'Andrey Sidorov', salary: 5000, increase: true, like: false, id: 3},
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
            like: false,
            id: this.maxIndex++
        }

        if(name.length > 3 && salary > 0) {
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        }

        
    }

    onToogleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
            
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            
        //     return {
        //         data: newArr
        //     }
        // })

       this.setState(({data}) => ({
           data: data.map(item => {
               if(item.id === id) {
                   return {...item, [prop]: !item[prop]}
               }
               return item;
           })
       }))
    }

    // onToogleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
            
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            
        //     return {
        //         data: newArr
        //     }
        // })

    //    this.setState(({data}) => ({
    //        data: data.map(item => {
    //            if(item.id === id) {
    //                return {...item, increase: !item.increase}
    //            }
    //            return item;
    //        })
    //    }))
    // }

    // onToogleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id) {
    //                 return {...item, like: !item.like}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    render() {
        const length = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            
            <div className="app">
                <AppInfo length={length} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={this.state.data} onDelete={this.deleteItem} onToogleProp={this.onToogleProp} />
                <EmployeesAddForm onCreate={this.createItem}/>
            </div>
        );
    }
    
}

export default App;