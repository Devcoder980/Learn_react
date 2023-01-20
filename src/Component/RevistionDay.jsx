import React from 'react'

const list = [
    {
        "_id": "UMJX3B72S28Q88V2",
        "name": "Loan Rivers",
        "dob": "2015-02-03",
        "telephone": "+40-0104-119-444",
        "score": 2.4,
        "email": "myrnadangelo3@limitation.com",
        "url": "https://www.kit.com",
        "description": "permalink continuously flame gratis plains ideas knew induction adjust due podcasts surrounded performance support childhood limited monte feel acceptable oriented",
        "verified": true,
        "salary": 10864
    },
    {
        "_id": "DEETNUGE1CCKQB4K",
        "name": "Inocencia Pinkerton",
        "dob": "2017-04-19",
        "telephone": "+48-4321-749-834",
        "score": 5.4,
        "email": "maciehogan@gmail.com",
        "url": "https://www.surveys.com",
        "description": "they alike white potatoes radius additionally nw attention expects partnerships assessment sponsored affiliation exports intent childrens automation cinema canvas youth",
        "verified": true,
        "salary": 32732
    }
]
export const RevistionDay = () => {
    return (
        <div>
            <List />
        </div>
    )
}
function List(){
    return list.map(function(item){
        return(
            <div key={item._id}>
                <span>
                   <b><a href={item.url}>{item.name}</a></b> 
                </span>
                <br />
                <span>{item.description}</span>
                <br />
                <span>{item.salary}</span>
                <hr />
            </div>
        )
    })
}