
import './employees-list-item.css';

const EmployeesListItem = (props) => {
    
    const {name, salary, onDelete, increase, like, onToggleProp} = props;

    let classNames = "list-group-item d-flex justify-content-between" + (increase ? ' increase' : '') + (like ? ' like' : '');
    return (
        <li className={classNames}>
            <span onClick={onToggleProp} data-toggle="like" className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-item-center">
                <button onClick={onToggleProp} data-toggle="increase" className="btn-cookie btn-sm" type="button">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onDelete} className="button btn-trash btn-sm" type="button">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    
}

export default EmployeesListItem;