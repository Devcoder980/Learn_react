
// with out object destructuring

// with nested object desturring

// const {
//     firsName,
//     pet:{
//         name,
//     },
// }=user;
// console.log(firsName+' '+ name)


const profile={
    firsName:'Dev',
    lastName:'coder',
};
const address={
    country:'index',
    city:'berlin',
    code:'102323',
};
const user={
    ...profile,
    gender:'male',
    ...address,
};
console.log(user)
