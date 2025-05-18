import React from 'react';

const SelectProIn = () => {
   const[SelectProIn, setSelectProIn] = React.useState({
        product: '',
        quantity: 0,
        price: 0,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectProIn({
            ...SelectProIn,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/productin', SelectProIn)
            .then((response) => {
                console.log('Product added successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
        // Handle form submission logic here
        console.log('Form submitted:', SelectProIn);
    }
    const handleReset = () => {
        setSelectProIn({
            product: '',
            quantity: 0,
            price: 0,
        });
     
    };
    return (
        <div>
            <h2>Select Pro Input</h2>
            <select>
                <option value="">Select a product</option>
                <option value="product1">Product 1</option>
                <option value="product2">Product 2</option>
                
            </select>
        </div>
    );
};

export default SelectProIn;
