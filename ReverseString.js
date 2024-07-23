const currentDate = () => new Date().toLocaleDateString('en-US');
const uniqueArr = (arr) => [...new Set(arr)];
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';