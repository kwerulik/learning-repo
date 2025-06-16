// //Import modułu(ów)
// const expess = require("experss")

// // Definicja interfejsu
// interface User {
//   readonly id: number;
//   name: string;
//   email: string; 
//   isActive: boolean;
// }

// // Przykładowe dane użytkowników (tablica obiektów)
// const myUsers: User = {id: 1, name: 'Alice', email: 'alice@example.com', isActive: true};

// // Funkcja pobierająca użytkownika po ID
// function getUserById(myUsers.id) {
//   return myUsers.find(myUsers => myUsers.id === id);
// }
// // Funkcja zwracająca wszystkich użytkowników
// function getAllUsers(){
//   return myUsers;
// }

// // Tworzenie aplikacji Express
// const app: Application = express(); 


// const PORT = 3000;
// // Middleware 
// app.use(express.json());


// // Endpointy
// app.get('/users', (req, res) => {
//   res.json(getAllUsers());
// });

// app.get('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const user = getUserById(id);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).send({ error: 'User not found' });
//   }
// });

// app.get('/users/:id/isActive', (req, res) => {
//   const id = parseInt(req.params.id);
//   const isActive = getIsActiveById(id);
//   if (isActive !== undefined) {
//     res.json({ id, isActive });
//   } else {
//     res.status(404).send({ error: 'User not found' });
//   }
// });

// // Uruchomienie serwera

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

 





