import {reducer} from "./reducer";


test("reduce has to change value of state to opposit", () => {
    //data
    const stateForTest = {
        collapsed: false
    }
    // action
    const newState = reducer(stateForTest, {type:"TOGGEL-COLLAPSED"});
    // expection
    expect(newState.collapsed).toBe(true)

})

test("reduce has to show new error", () => {
    //data
    const stateForTest = {
        collapsed: false
    }
    // action
    // expection
    expect(()=>{
        reducer(stateForTest, {type:"TOGGEL-COLLAPSED"})
    }).toThrowError("Wrong action type")

})