import React, {useReducer, useState} from "react";

type ActionType = {
    type: string
}


const valueUAccordion = "TOGGEL-COLLAPSED";
export const action = {
    type: valueUAccordion
}

export type StateType = {
    collapsed: boolean
}

export const state={
    collapsed: false
}

export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case valueUAccordion:
            const copyOfState = {
                ...state,
                collapsed: !state.collapsed
            }
            return copyOfState;
        default:
            throw new Error("Wrong action type")
    }}
    export default ActionType;