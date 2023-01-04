import React from 'react'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: 'Redux',
    url: 'https://reactjs.org/',
    author: 'Miss Shivani Looser',
    num_comments: 2,
    points: 99,
    objectId: 1,
  }
]



// const numbers = [1, 4, 9, 16];

// const newNumbers = numbers.map(function (number) {
//   return number * 2;
// })
function Hero() {
  return (
    <div className="capitalize border-2 text-left">
      <h1 className='text-center'>My hacker stories</h1>
        {
          list.map((item)=>{
            return(
              <div className="bg-yellow-400 flex " key={item.objectId}>
                <span className="flex-1">
                  <a href={item.url}>{item.title}</a>
                </span>
                <span className="flex-1 mx-1">{item.num_comments}</span>
                <span className="flex-1 mx-1">{item.points}</span>
                <span className="flex-1 mx-1">{item.author}</span>
              </div>
            )
          })
        }


    </div>
  )
}

export default Hero