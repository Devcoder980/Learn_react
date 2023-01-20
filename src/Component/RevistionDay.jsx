import { list } from 'postcss'
import React from 'react'

// const avenger=['Iron Man','captain American', 'Hulk','Thor','HawkEye'];
const avenger=[
    {
        id:1,
        name:'Iron Man'
    },
    {
        id:2,
        name:'capitain America'
    },
    {
        id:3,
        name:'Harsh'
    },
    {
        id:4,
        name:'Devendra'
    },
    {
        id:5,
        name:'Akhilesh'
    }

];
// let aven=avenger.map(ave=><li>{ave}</li>)

const a=avenger.map((ave)=>{
    console.log(ave.name)
    return <li key={ave.id}>ave.name</li>
})
console.table(a)
const avens=avenger.map(ave=>(<li key={ave.id}>{ave.name}</li>) )

console.table(avens)

export const RevistionDay = () => {
  return (
    <div>
        <h1 className="text-center">My Avenger LIst</h1>
        {/* <ul className="bg-blue-500 text-white text-3xl">
            {avenger.map(avenger=><li>{avenger}</li>)}
        </ul>
        <ul>
            {aven}
        </ul> */}

        <ul>
            {avens}
        </ul>

        <p>
            {avenger.map(function(item){
                return <div>{item.name}</div>
            })}
        </p>
    </div>
  )
}
