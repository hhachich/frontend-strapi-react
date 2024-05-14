import React, { useContext, useEffect } from 'react';
import './Checkbox.css'
import StoreContext from '../hooks/storeContext';
import qs from 'qs';
function Checkbox({ category }) {

    const { setFilter, selectedCategories, setSelectedCategories } = useContext(StoreContext)

    useEffect(() => {
        const query = qs.stringify({
            filters: {
                categories: {
                    id: {
                        $in: selectedCategories
                    }
                }
            }
        }
        )
        console.log(query)
        setFilter(process.env.REACT_APP_API_URL + "/products?populate=*&" + query)
    }, [selectedCategories])

    const handleFilterCategory = (e) => {
        const selectedID = e.target.dataset.category;
        const isChecked = e.target.checked;
        setSelectedCategories(selectedCategories => {
            if (isChecked)
                return [...selectedCategories, selectedID]
            return selectedCategories.filter(id => id !== selectedID)
        })

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