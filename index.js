const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="password confirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.post('/', (req, res) => {
    // get access to email, password, passwordConfirmation
    res.send('Account created!!!');
});

app.listen(3000, () => {
    console.log('Listening');
});