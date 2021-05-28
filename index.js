// Add your code here
function submitData(userName, userEmail) {
  const formData = {
    name: userName,
    email: userEmail
  };

  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  };

  const userURL = 'http://localhost:3000/users'

  return fetch(userURL, configObj).
  then(r => r.json()).
  then(data => {
    const userID = document.createElement('p');
    userID.innerHTML = data['id'];
    document.body.append(userID);
  }).
  catch(function(error) {
    const errorAlert = document.createElement('h3');
    errorAlert.innerHTML = `${error.message}`;
    document.body.append(errorAlert);
  });
}