function executorFunction(success)
{
  return function PromiseCallback(resolve, reject)
  {
    if (success)
    {
      resolve({status: 200, body: 'success'});
    }else{
      reject(new Error('ChymezyAPI is fake!'));
    }
  }
}

export default function ChymezyAPI(success)
{
  return new Promise(executorFunction(success));
}

export function getResponseFromAPI(success)
{
  return new Promise((resolve, reject) => {
    if (success){
      resolve({
        status: 201,
        body: 'chymezy!!!',
      });
    } else{
      reject(new Error('Fake API'));
    }
  });
}
