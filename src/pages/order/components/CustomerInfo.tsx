import styles from '../../styles/Order.module.css';
import { useForm } from 'react-hook-form';
import { useState, useEffect, FC } from 'react';
interface orderFormProps {
    register?: any;
    errors: any;
    dirtyFields: any;
    isValid: boolean;
    patternValue?: any;
    labelClass: string;
    formClass: string;
    htmlForName: string;
    type: string;
    text: string;
    required: string | boolean;
    patternMessage?:string;
}
const CustomerInfo:FC<orderFormProps> = (props:orderFormProps ) => {

    const register = props.register;
    const dirtyFields = props.dirtyFields;
    const errors = props.errors;

    const [toggleErr, setToggleErr] = useState(true);
    
    
    return (
        <>
        <div className="form__row">
            <div className={props.labelClass}>
                <label className={`${!dirtyFields[props.htmlForName]? "form__label": errors[props.htmlForName] ? "form__label form__label_invalid" : "form__label form__label_valid"}`} htmlFor={props.htmlForName}>
                    {props.text}</label>
            </div>
            <div className={props.formClass}>
                <input autoComplete="off" className={`${!dirtyFields[props.htmlForName]?"input": errors[props.htmlForName]?"input invalid":"input valid"}`} type={props.type}
                    {...register(props.htmlForName, {
                        required: props.required,
                        pattern: {
                            value: props.patternValue,
                            message: props.patternMessage
                        }
                    })}
                />
                {errors[props.htmlForName] && toggleErr ? <div className="form__error-wrapper">
                    <label className="form__error form__label_invalid" htmlFor={props.htmlForName}>
                        {errors?.[props.htmlForName] && <span>{errors?.[props.htmlForName]?.message || "Error"}</span>}
                    </label>
                    <span onClick={() => setToggleErr(!toggleErr)} className="form__error-hide"></span>
                </div> : null}
            </div>
        </div>
        </>
        
    )
}

export default CustomerInfo;