//Some Practive React class base component

import React from 'react'

class Developer{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    getName(){
        return this.firstname + "  "+ this.lastname;
    }
}

const dev=new Developer("Dev",'Coder');
console.table(dev.getName())
export const RevistionDay = () => {
  return (
    <div>{dev.getName()}</div>
  )
}
