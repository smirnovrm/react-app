import {Component} from 'react';
import './app-filter.css';
class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'none'
        };
    }

    onUpdateFilter = (e) => {       
        const filter = e.target.getAttribute('data-filter');
        this.setState({filter: filter});
        this.props.onUpdateFilter(filter);
    }

    render() {
        const {filter} = this.state;
        return (
            <div className="btn-group" onClick={this.onUpdateFilter}>
                <button 
                    className={filter === 'none' ? 'btn btn-light' : 'btn btn-outline-light'}
                    type="button"
                    data-filter='none'>
                    Все сотрудники
                </button>
                <button 
                    className={filter === 'like' ? 'btn btn-light' : 'btn btn-outline-light'}
                    type="button"
                    data-filter='like'>
                    На повышение
                </button>
                <button 
                    className={filter === 'salary' ? 'btn btn-light' : 'btn btn-outline-light'}
                    type="button"
                    data-filter='salary'>
                    З/П выше 1000$
                </button>
            </div>
        );
    }    
};

export default AppFilter;