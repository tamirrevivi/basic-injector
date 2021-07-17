export interface InjectorParams {
    [key: string]: any;
}

export type Consturctor<T> = new (...args: any[]) => T;

export type Func<T> = (...args: any[]) => T;