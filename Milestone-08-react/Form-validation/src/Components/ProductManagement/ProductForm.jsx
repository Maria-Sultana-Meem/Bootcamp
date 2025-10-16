import { useState } from "react";


const ProductForm = ({handleAddProduct}) => {
   const [error,setError]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
       
        const name=e.target.name.value
        const price=e.target.price.value
        const quantity=e.target.quantity.value

        if (name.length===0) {
            setError('please provide a product name')
            return
        }
        else if(price.length===0){
            setError('please provide a valid number')
            return
        }
        else{setError('')}
        const newProduct={
            name,
            price,
            quantity
        }
        // console.log(newProduct);
       
            handleAddProduct(newProduct)
      
    }
    return (
        <div className='border w-[400px] mx-auto p-6 rounded-lg mt-11'>
            <form onSubmit={handleSubmit}>
              <input  className='border rounded-xl p-2 w-full'  type="text" name="name" id=""  placeholder='name'/> <br /> <br />
              <input  className='border rounded-xl p-2 w-full' type="text" name="price" id=""  placeholder='price'/> <br /> <br />
              <input  className='border rounded-xl p-2 w-full'  type="text" name="quantity" id=""  placeholder='quantity'/> <br /> <br />
              
              <input className='btn w-full' type="submit" value="submit" />
            </form>
            <p className="text-red-700"><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;