import React, { useContext } from 'react';
import './Checkbox.css'
import StoreContext from '../hooks/storeContext';
function Checkbox({ category }) {
    const { setFilter } = useContext(StoreContext)
    const handleFilterCategory = (e) => {
        setFilter(e.target.dataset.category)
    }
    return (
        <>
            <label className="toggler-wrapper style-1">
                <input type="checkbox" data-category={category.id} onChange={handleFilterCategory} />
                <div className="toggler-slider">
                    <div className="toggler-knob"></div>
                </div>
            </label>
            <div className="badge">{category.attributes.title}</div>
        </>
    );
}

export default Checkbox;