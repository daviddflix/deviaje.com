import React from 'react';
import s from './PaymentDetail.module.css';

function PaymentDetail() {
    return (
        <div className={s.paymentGrid}>
            <div className={s.payment}>Payment detail</div>
            <div>
                <div className={s.flight}>
                    <div className={s.name}>Flight</div>
                    <div className={s.name}>aca va el precio USD</div>
                </div>
                <div className={s.flight}>
                    <div className={s.name}>Taxes and fees</div>
                    <div className={s.name}>aca van las taxes y las fees</div>
                </div>
                <div className={s.flight}>
                    <div className={s.total}>Total</div>
                    <div className={s.total}>aca van total</div>
                </div>
            </div>
        </div>
    );
}

export default PaymentDetail;