// const mongoose = require('mongoose');

// async function connectToDatabase() {
//   try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/hospital_app', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true})

//       .then(()=>{
//              console.log("mongodb connected");
        
//          })
     
//     console.log('Connected to the database');
//     // Additional code after successful connection
//   } catch (error) {
//     console.error('Error connecting to the database:', error.message);
//   }
// }

// connectToDatabase();

// const employeeSchema = new mongoose.Schema({
//   empId: String,
//   name: String,
//   position: String,
//   department: String,
//   file: String,
// });
// module.exports = mongoose.model('Employees', employeeSchema);

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   }

// });

// module.exports = mongoose.model('User', userSchema);
   





// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');


// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/hospital_app",{useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=>{
//     console.log("mongodb connected");

// })
// // User schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// // User model
// const User = mongoose.model('User', userSchema);

// // API route for creating a new user
// app.post('/users', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Create a new user instance
//     const newUser = new User({ name, email, password });

//     // Save the user to the database
//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error); 
//     res.status(500).json({ message: 'Failed to create user' });
//   }
// });

// app.post('/signin', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the user by email
//     const user = await User.findOne({ email });

//     // Check if user exists
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Compare the provided password with the hashed password
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (passwordMatch) {
//       // Generate a JWT token
//       const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });

//       res.json({ token });
//     } else {
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Signin failed' });
//   }
// });

// // Start the server
// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });





// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const mongoose = require('mongoose');
// // const cors=require('cors')

// // const app = express();

// // // Parse JSON bodies
// // app.use(bodyParser.json());
// // app.use(cors())



// // mongoose.connect("mongodb://127.0.0.1:27017/hospital_app",{useNewUrlParser:true,useUnifiedTopology:true})
// // .then(()=>{
// //     console.log("mongodb connected");

// // }).catch((e)=>{
// //     console.log(e);
// // })




// // const todoSchema = new mongoose.Schema({
// //   name: String,
// //   description:String,
// //   age:Number,
  
// // });

// // const Todo = mongoose.model('Todo', todoSchema);

// // // Routes
// // app.get('/api/employees', async (req, res) => {
// //   try {
// //     const todos = await Todo.find();
// //     res.json(todos);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // });

// // app.post('/api/employees', async (req, res) => {
// //   try {
// //     const { name,description,age  } = req.body;
// //     const todo = new Todo({ name, description,age });
// //     await todo.save();
// //     res.json(todo);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // });

// // app.put('/api/employees/:id', async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const { name,age, description} = req.body;
// //     const todo = await Todo.findByIdAndUpdate(id, { name,age,description }, { new: true });
// //     res.json(todo);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // });

// // app.delete('/api/employees/:id', async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     await Todo.findByIdAndRemove(id);
// //     res.json({ message: 'Todo deleted' });
// //   } catch (error) {
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // });

// // // Start the server
// // const port = 7000;
// // app.listen(port, () => console.log(`Server running on port ${port}`));
