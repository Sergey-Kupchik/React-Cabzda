import React, {useState} from 'react';
import {v1} from "uuid";


export default {
    title: 'ReactMemo  Example',
};

type UsersPropType = {
    list: String[]
}


function UsersSecret(props: UsersPropType) {
    console.log("Users")
    return <>{props.list.map((n, i) => {
        return <div key={i}>{n}</div>
    })} </>
}

const Counter = React.memo(
    function Counter(props: { firstNumber: number }) {
        console.log("Counter")
        return <div>{props.firstNumber}</div>
    })


const Users = React.memo(UsersSecret)


export function Together() {
    console.log("Together")
    const [count, setCount] = useState<number>(0)
    const [usersList, setUsersList] = useState(["Ivan", "Kate", "Sergey"])

    const sum = () => {
        let newCount = count + 1;
        setCount(newCount);
    }
    const addList = () => {
        let newUsersList = [...usersList, "Kate " + v1()]
        setUsersList(newUsersList);
    }

    return <>
        <button onClick={sum}>+</button>
        <button onClick={addList}>add</button>
        <Counter firstNumber={count}/>
        <Users list={usersList}/>
    </>
}

// export const Test=()=>{return <Together/>}
