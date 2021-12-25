import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employee-list.css';

const EmployeesList = ({data, onDelete,onToogleProp}) => {
    
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToogleProp={(e) => onToogleProp(id, e.currentTarget.getAttribute('data-prop'))}
                />
        );
    });    

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    );
};

export default EmployeesList;