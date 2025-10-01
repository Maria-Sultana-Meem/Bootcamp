import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div className="overflow-x-auto w-[500px] mx-auto mt-10 rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
     
      {
        products.map((product,index)=><tr key={index}>
        <th>{index+1}</th>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
    );
};

export default ProductTable;