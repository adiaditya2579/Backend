const express = require('express');
const userModel = require('./models/user');
const postModel = require('./models/post');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/create', async (req, res) => {
  try {
    let newUser = await userModel.create({
      username: 'AdityaGupta',
      email: 'adiaditya2579@gmail.com',
      age: 23,
      posts: [] // Corrected the field name to 'posts'
    });
    res.send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});

app.get('/post/create', async (req, res) => {
  try {
    let post = await postModel.create({
      postData: 'hai kyse hai sabhi log',
      user: '66421ff60dc0e3c5c4afcf88'
    });

    // Find the user by ID
    let user = await userModel.findById('66421ff60dc0e3c5c4afcf88');

    // Push the post's ID into the user's posts array
    user.posts.push(post._id);

    // Save the user
    await user.save();

    res.send({
      post,
      user
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating post');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
