import React from 'react'
import { names } from '../source/List';
class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName(firstName, lastName) {
        return firstName + " " + lastName;
    }
    getNames() {
        return this.firstName + " " + this.lastName;
    }
}
const dev = new Developer("prabhu", 'bind');
const WordClass = () => {
    return (
        <div>
            {names.map((item) => {
                    return (<div>{dev.getName(item.firstName, item.lastName)}</div>)
                })}
            { dev.getNames()}
            <h1>{display()}</h1>
        </div>

    )
}

const display=()=>{
    return(
        <>
            <h1>Hey bro</h1>
        </>
    )
}

export default WordClass