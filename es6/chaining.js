const company = {
    name: 'themeforest',
    since: '2010',
    location: 'New York',
    employees: ['mainuddin', 'kalam', 'malam'],
    contact: {
        phone: '+1-123-456-7890',
        email: 'admin@gmail.com',
        address: 'New York',
    },
    products: {
        html_template: {
            name: 'Khaowa dawa',
            price: '$50',
            description: 'This is a template for html',
        }
    }
}
console.log(company);

const {name, since, location, employees, contact, products} = company;
console.log(company.products?.mani?.sani);
console.log(company?.contact?.email);
