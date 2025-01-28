const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    /**
     * @TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */
    if (typeof name !== 'string' || typeof email !== 'string' || typeof joinYear !== 'number') {
      console.log('Invalid data format');
      return;
    }

    const newEmployee = {name, email, joinYear};

    employees.push(newEmployee);
  }
  
  addEmployee('reza','reza@email.com',2024);
  addEmployee('anon','anon@email.com',2025);
  
  console.log(employees);  

const greet = "Hello world";

export {greet};