import React from 'react';

function Checkbox({ category }) {
    console.log(category)
    return (
        <>
            <h1>{category.attributes.title}</h1>
        </>
    );
}

export default Checkbox;