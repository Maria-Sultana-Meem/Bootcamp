import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
    return (
        <div>
            <h2 className="4xl">Payment cancelled</h2>
            <Link to='/dashboard/myParcel' className='btn btn-primary text-black'>Try Again</Link>
        </div>
    );
};

export default PaymentCancel;