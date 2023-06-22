const response = require('./standardResponse');

const errorHandling = (msg, param, location = 'body') => [
  {
    msg,
    param,
    location,
  },
];

const errorResponse = (err, res) => {
  if (err.code === '23505' && err.detail.includes('email')) {
    const errRes = errorHandling('Email already exist', 'email');
    return response(res, 'Error', errRes, null, 400);
  }
  if (err.code === '23505' && err.detail.includes('username')) {
    const errRes = errorHandling('Username already exist', 'username');
    return response(res, 'Error', errRes, null, 400);
  }
  if (err.column === 'amount' && err.message.includes('not-null')) {
    const errRes = errorHandling('Amount can not be null', 'amount');
    return response(res, 'Error', errRes, null, 400);
  }
  if (err.code === '23503' && err.detail.includes('Key')) {
    const errRes = errorHandling('Recepient do not exist', 'repicient_id');
    return response(res, 'Error', errRes, null, 400);
  }
  if(err.code==='23503'&&err.detail.includes('profile')){
    const eres = errorHandling('ID still used in profile', 'id');
    return response(result, 'Error', null, eres, 400);
  }if(err.code==='23503'&&err.detail.includes('sender_id')){
    const eres = errorHandling('Id not found in tabel users', 'sender_id');
    return response(result, 'Error', null, eres, 400);
  }if(err.code==='23503'&&err.detail.includes('transfertype')){
    const eres = errorHandling('Id not found in tabel typeTransaction', 'transfertype');
    return response(result, 'Error', null, eres, 400);
  }if(err.code==='22P02'){
    const eres = errorHandling('Wrong Input or Empty', 'user_id');
    return response(result, 'Error', null, eres, 400);
  }
  return response(res, 'Error', null, null, 400);
};


module.exports = errorResponse;