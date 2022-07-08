import { type } from "os";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Observers }from '../interfaces'
import { RemoveObserverAction, SetObservableStateAction, SetObserverAction } from '../types'
/**
 * 
 * @param {*} initialState 
 * @returns state, setState, addObserver, removeObserver
*/

export default function useObservableState<S>(initialState: S |(()=> S) ): [S, Dispatch<SetStateAction<S>>,SetObserverAction<Function>, RemoveObserverAction<string | number>]{
    const [state, setState] = useState<S>(initialState);
    const [observers, setObservers] = useState<Partial<Observers>>({});
    const update = () => {
        for(let [id, callback] of Object.entries(observers)){
            callback(state);
        }
    };
    
    const addObserver=  <SetObserverAction<Function>>((id:string | number, callback: Function)=>{
        let data = observers;
        data[id]=callback;
        setObservers(data);
        
    });

    const removeObservers =<RemoveObserverAction<string|number>>((id: string | number) => {
        let data = observers;
        delete data[id];
        setObservers(data);
    });

    useEffect(()=>{
        update();
    },[state])

    return [state, setState, addObserver, removeObservers]
}

/* export default function useObservableState(initialState) {

    const [state, setStatus] = useState('');
    const [observers, setObserver] = useState({})
   
    const setState = (value) => {
        let data = state
        data = 'hola'
        setStatus(data)
        console.log(state)
        for (const [id, observer] of Object.entries(observers)){
            observer(value);
        }
    }
    
    const addObserver = (id, func) => {
        let data = observers;
        data[id] = func;
        setObserver(data);
    }
    
    const removeObserver = (id) => {
        let data = observers;
        delete data[id];
        setObserver(data)
    }
    
    
    return [state, setState, addObserver, removeObserver];
}

export function useStateObserver(func){
    const observer = new StateObserver(func);
    
    return observer;
}
*/