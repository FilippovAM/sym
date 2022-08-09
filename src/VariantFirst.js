import React, { useEffect, useReducer } from "react";
import MyComponent, { CONTEXT_COUNTER, EVENT_LISTENER } from "./MyComponent";
import { Data,  } from '@symbiotejs/symbiote';

MyComponent.reg('my-component');

export const VariantFirst = () => {
    const buttonRef = React.useRef();
    const ctx = Data.getNamedCtx(CONTEXT_COUNTER);
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    
    useEffect(() => {
        // вызвать ререндер на mount чтобы получить значение контекста
        forceUpdate()
    }, [])
    
    const onClick = () => {
        ctx?.read('increment')();
        forceUpdate()
        buttonRef.current.dispatchEvent(new CustomEvent(EVENT_LISTENER, { bubbles: true }));
    }
    
    return (
        <div>
            <my-component>
                <h1>Value: {ctx?.read('count')}</h1>
                <button ref={buttonRef} onClick={onClick}>Click my!</button>
            </my-component>
        </div>
    );
}
