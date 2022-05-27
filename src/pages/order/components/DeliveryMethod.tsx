import { FC, useState } from "react";
import { useForm } from "react-hook-form";

interface deliveryMethodProps {
    deliveryName: string;
    id: number;
    price: number;
    register: any;
    errors: object;
}

const DeliveryMethod:FC<deliveryMethodProps> = (props: deliveryMethodProps) => {

    const [checked, setChecked] = useState(false);

    const [toggleErr, setToggleErr] = useState(true);

    const register = props.register


    
    

    return (
        <div>
            <div className="form__checkbox-group">
                <div className="checkbox">
                    <input onClick={() => setChecked(!checked)}
                        checked={checked}
                        id={`order-delivery-${props.id}`}
                        name="Order[delivery]" type="checkbox"
                        value={props.deliveryName}
                        className="checkbox__elem"
                        {...register("Order[delivery]", {
                            required: "Пожалуйста, выберите способ доставки"
                        }
                        )}
                    />

                    {/* {errors.Order && errors.Order.delivery && toggleErr? 
                        <div className="form__error-wrapper" style={{display: "block"}}>
                        <label id="Order[delivery]-error" className="form__error" htmlFor="Order[delivery]" >Пожалуйста, выберите способ доставки</label>
                        <span onClick={() => setToggleErr(!toggleErr)} className="form__error-hide"></span>
                    </div>: null  
                    } */}



                    <label htmlFor={`order-delivery-${props.id}`} className="checkbox__label form__label">{props.deliveryName}</label>
                </div>
                <div className="form__label">{props.price} руб.</div>
            </div>
        </div>
    )
}

export default DeliveryMethod;