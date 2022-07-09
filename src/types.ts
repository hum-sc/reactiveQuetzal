export type SetObserverAction <Function> = ((id:string | number, callback:Function)=>void);

export type SetObservableStateAction<S> = ((data: S)=>void);

export type RemoveObserverAction <S> = ((id: S)=>void);