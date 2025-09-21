import bcrypt from 'bcrypt';
import express from 'express';
const app = express();

const password = 'password1';


app.use(express.json())

const users = [] 

app.post('/signup', async (req, res) => {
      const {username, password} = req.body
      const hash = await bcrypt.hash(password, 10)


      users.push({
        username, 
        password: hash
      })
      console.log(username)
      res.send('ok')
    })

    app.listen (8080, () => console.log('listening on port 8080' ))