const users = [
    { id: 0, name: "Trude", age: 77 },
    { id: 1, name: "Simen", age: 85 },
    { id: 2, name: "Lars", age: 99 },
    { id: 3, name: "Ali", age: 34 },
    { id: 4, name: "Finn", age: 60 },
    { id: 5, name: "Kåre", age: 70 },
    { id: 6, name: "Hanne", age: 20 },
    { id: 7, name: "Åse", age: 21 },
    { id: 8, name: "Anne", age: 6 },
    { id: 9, name: "Amanda", age: 31 },
    { id: 10, name: "Morgan", age: 87 }
  ];

const searchInput = document.getElementById('name');
const filterInput = document.getElementById('age');
const filterButton = document.getElementById('filter');
const userUl = document.getElementById('users');

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;

  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const handleSearch = () => {
  const searchName = searchInput.value;
  if (searchName) {
    const searchResult = users.find(
      (user) => user.name.toLowerCase() === searchName.toLowerCase()
    );
    if (searchResult) {
      createTableUI([searchResult]);
    } else {
      userUl.innerHTML = `I denne listen er det dessverre ingen som heter ${searchName}.`; 
    }
  } else {
    createTableUI(users);
  }
};

const handleFilter = () => {
    const filterValue = filterInput.value;
    if (filterValue && Number(filterValue)) {
      const filterAnswer = users.filter((user) => user.age > filterValue);
      if (filterAnswer && filterAnswer.length > 0) {
        createTableUI(filterAnswer);
      } else {
        userUl.innerHTML = `I denne listen er det dessverre ingen over ${filterValue} år`;
      }
    } else {
      createTableUI(users);
    }
  };
  
  const main = () => {
    createTableUI(users);
  };
  
  main();
  

  searchInput.addEventListener('keyup', handleSearch);
  filterButton.addEventListener('click', handleFilter);