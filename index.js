 const receivesAFunction =(callbackFunc) => {
   callbackFunc() 
   return callbackFunc
 }

 const returnsANamedFunction=() => {
    return returnsANamedFunction
 }

const returnsAnAnonymousFunction =() => {
    return () => {}
}

