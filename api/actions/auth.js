export function login(req, res) {
    const credentials = req.body;
    if(credentials.userName==='admin@example.com' && credentials.password==='password'){
      res.json({
        userName: credentials.userName,
        role: 'ADMIN'
      });   
    }else{
      // just demonstration of server-side validation
      res.status('401').send({
        message : 'Invalid user/password',
        // userName - the same field name as used in form on client side
        validationErrors: { 
          userName : 'Aha, server-side validation error',
          password: 'Use another password'
        }
      });
    }
}


export function logout(req, res) {
    res.json({
      'userName': 'admin', 
      'role': 'ADMIN'
    });   
}