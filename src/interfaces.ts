import { ReactNode } from "react"

export interface Observers {
    [name: string | number]: Function
}

export interface Gps {
    lng: Number,
    lat: Number
}

export interface Props {
    children?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal;
}

export interface InputValue {
    value: string | [number, number],
    index: number
}