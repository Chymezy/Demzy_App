import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// with map() formatting
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);

  return results.map(result => ({
    status: result.status,
    value: result.status === 'fulfilled' 
      ? result.value 
      : `${result.reason.name}: ${result.reason.message}`,
  }));
}

// without map
export async function handleProfileSignup2(firstName, lastName, fileName) {
  const userPromise1 = signUpUser(firstName, lastName).then((value) => ({
    status1: 'fulfilled',
    value1: value,
  }));
  const photoPromise1 = uploadPhoto(fileName).catch((error) => ({
    status1: 'rejected',
    value1: `${error.name}: ${error.message}`,
  }));
  const results1 = await Promise.allSettled([userPromise1, photoPromise1]);
  return results1;
}

// with timestamp
export async function handleProfileSignupWithTimestamp(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);
  
  const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);
  
  return results.map(result => ({
    status: result.status,
    value: result.status === 'fulfilled'
      ? result.value
      : `${result.reason.name}: ${result.reason.message}`,
    timestamp: new Date().toISOString() // Add a timestamp
  }));
}

// with renamed fields
export async function handleProfileSignupWithRenamedFields(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);
  
  const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);
  
  return results.map(result => ({
    resultStatus: result.status, // Rename status to resultStatus
    resultValue: result.status === 'fulfilled'
      ? result.value
      : `${result.reason.name}: ${result.reason.message}` // Rename value to resultValue
  }));
}

// Grouped by status
export async function handleProfileSignupGroupedByStatus(firstName, lastName, fileName) {
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPhotoPromise = uploadPhoto(fileName);
  
    const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);
  
    return {
      fulfilled: results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value),
      rejected: results
        .filter(result => result.status === 'rejected')
        .map(result => `${result.reason.name}: ${result.reason.message}`)
    };
  }

// Detailed error
export async function handleProfileSignupWithDetailedError(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);

  return results.map(result => ({
    status: result.status,
    value: result.status === 'fulfilled'
      ? result.value
      : { name: result.reason.name, message: result.reason.message, stack: result.reason.stack } // Detailed error object
  }));
}
