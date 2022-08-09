import { BaseComponent } from "@symbiotejs/symbiote";
import { Data } from '@symbiotejs/symbiote';

export const EVENT_LISTENER = 'EventListener';
export const CONTEXT_COUNTER = 'counter'

export default class MyComponent extends BaseComponent {
    init$ = {
        [`${CONTEXT_COUNTER}/count`]: 0,
        [`${CONTEXT_COUNTER}/increment`]: () => {
            const ctx = Data.getNamedCtx(CONTEXT_COUNTER);
            let count = ctx.read('count');
            ctx.pub('count', ++count);
        },
    }
    
    initCallback() {
        this.addEventListener(EVENT_LISTENER, (...e) => {
            console.log('e', e)
        })
    }
}
