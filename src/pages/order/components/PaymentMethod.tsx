import { FC, useState } from 'react';

interface paymentMethodProps {
    register: any;
    value: string;
    id: number;
    method: string;
}

const PaymentMethod: FC<paymentMethodProps> = (props: paymentMethodProps) => {

    const register = props.register

    return (
        <div className="radio">
            <input id={`order-payment-${props.id}`}
                name="Order[payment]" type="radio"
                value={props.value}
                {...register("Order[payment]", {
                    required: "Пожалуйста, выберите способ оплаты",
                })}
                className="radio__elem" />
            <label htmlFor={`order-payment-${props.id}`} className="form__label radio__label">{props.method}</label>
        </div>
    )
}

export default PaymentMethod;