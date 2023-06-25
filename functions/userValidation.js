//inisialize user
const user = {
  name: '',
  email: '',
  score: 0,
  level: 0,
};

//cheking for empty inputs and valid email
function isUserValid(name, email) {
  return name.trim() != '' &&
    email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/)
    ? true
    : false;
}

//manage error text
function createError(valid) {
  document.getElementById('userError').innerHTML = valid
    ? ''
    : 'Перевірте, чи поля заповнені, та правильність написання пошти';
}

//creating valid user
export function createUser() {
  //getting values of inputs
  const name = document.getElementById('userName').value;
  const email = document.getElementById('userEmail').value;

  //checking values
  let valid = isUserValid(name, email);

  //set values when validation is correct
  if (valid) {
    return { ...user, name, email };
  }
  //set error text
  createError(valid);
}
