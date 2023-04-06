// Fetch API

// // Task 1: Number of public repos, number of followers, userIDs for all of the followers
// fetch("https://api.github.com/users/JBRinghand2001")
// .then(response => response.json())
// .then(data => {
//     console.log(data.public_repos);
//     console.log(data.followers);
//     followersURL = data.followers_url;
//     fetch("https://api.github.com/users/JBRinghand2001/followers")
//     .then(response => response.json())
//     .then(data => {
//       const followerIds = [];
//       for (let i = 0; i < data.length; i++) {
//         followerIds.push(data[i].id);
//       }
//       console.log(followerIds);
//     });
//   });


// // Task 2 
// // 1. Total number of comments
// fetch(`https://jsonplaceholder.typicode.com/comments`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.length);
//   });

// // 2. Total number of photos
// fetch(`https://jsonplaceholder.typicode.com/photos`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.length);
//   });

// // 3. Name and email of each user
// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(user => {
//       console.log(user.name, user.email);
//     });
//   });

// // 4. Name and city of each user
// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(user => {
//       console.log(user.name, user.address.city);
//     });
//   });

// // 5. Total number of todos completed
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(response => response.json())
//   .then(data => {
//     let completedCount = 0;
//     for (let i = 0; i < data.length; i++) {
//       if (data[i].completed) {
//         completedCount++;
//       }
//     }
//     console.log(completedCount);
//   });

// // 6. Titles and IDs of all completed todos
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(response => response.json())
//   .then(data => {
//     for (let i = 0; i < data.length; i++) {
//       if (data[i].completed) {
//         console.log(data[i].id, data[i].title);
//       }
//     }
//   });

// // 7. Names and Titles of incompleted todos
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(todos_data => {

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => {
//         todos_data.filter(todo => todo.completed == false)
//           .forEach(todo => {
//             const user = data.find(user => user.id == todo.userId);
//             console.log(user.name, todo.title);
//           });
//       });

//   });

// // 8. User who owns 'quidem molestiae enim.'
// fetch('https://jsonplaceholder.typicode.com/albums')
//   .then(response => response.json())
//   .then(albums_data => {

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => {
//         const album = albums_data.find(album => album.title == 'quidem molestiae enim');
//         const user = data.find(user => user.id == album.userId);
//         console.log(user.name);
//       }); 

//   }); 