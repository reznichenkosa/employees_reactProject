import './app-filter.css'

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        return (
            <button key={name} 
                    name={name} 
                    className={'btn' + (props.filter === name ? ' btn-light' : '  btn-outline-light')} 
                    type="button" 
                    onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        );
    });
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;