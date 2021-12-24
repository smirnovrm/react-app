import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employee-list.css';

const EmployeesList = () => {
    return (
        <ul className='app-list list-group'>
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    );
};

export default EmployeesList;