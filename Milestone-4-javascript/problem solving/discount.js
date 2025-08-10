function discountPrice(quantity){
    if (quantity<=100) {
        const total = quantity*100;
        return total
    }
    else if(quantity<=200){
        const total = quantity *90;
        return total;
    }
    else{
        const total = quantity*70;
        return total
    }
}
 console.log(discountPrice(101));
 
//  multi layer discount

 function layerDiscountTotal(quantity){
         const first100Price= 100;
         const second100Price = 90;
         const above200Price = 70;
         if (quantity<=100) {
            const total = quantity* first100Price;
            return total;
         }

         else if(quantity<=200){
               const first100Total = 100* first100Price;
               const remainQuantity = quantity -100;
               const remainTotal = remainQuantity * second100Price;
               const total = first100Total + remainTotal;
               return total
         }
         else{
            const first100Total = 100* first100Price;
            const second100Total = 100* second100Price;
            const remainQuantity = quantity-200;
            const remainTotal = remainQuantity*above200Price;
            const total = first100Total+ second100Total + remainTotal;
            return total
         }

 }
 console.log(layerDiscountTotal(100));
 