export default function promiseMiddleware() {
  return next => action => {
    const { promise, type, ...rest } = action;
   
    if (!promise) {
      return next(action);
    }
   
    const [REQUEST, SUCCESS, FAILURE] = types;
    
    next({ ...rest, type: REQUEST });

    return promise
      .then(res => {
        next({ ...rest, res, type: SUCCESS });
        
        return true;
      })
      .catch(error => {
        next({ ...rest, error, type: FAILURE });
        
        // Another benefit is being able to log all failures here 
        console.log(error);
        return false;
      });
   };
}