import React, { useContext } from 'react';
import './Checkbox.css'
import StoreContext from '../hooks/storeContext';
function Checkbox({ category }) {
    console.log(category)
    const { filter } = useContext(StoreContext)
    const handleFilterCategory = (e) => {
        console.log(e.target.checked)
    }
    return (
        <>
            <label className="toggler-wrapper style-1">
                <input type="checkbox" onChange={handleFilterCategory} />
                <div className="toggler-slider">
                    <div className="toggler-knob"></div>

                </div>
            </label>
            <div className="badge">{category.attributes.title}</div>
        </>
    );
}

export default Checkbox;