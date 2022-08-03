
function ListProducts() {
    // List of products
    const Products = ['TV', 'CellPhone', 'Watch', 'Notebook', 'BoxMusic']

    alert('List of products: ' + Products)

    const insert = window.prompt('Enter the product you want to add to the list')

    //Enter the new Product
    let newProducts = Products.push(insert)
    alert('New List of products: ' + newProducts) 

    newProduct()

}

function newProduct() {
  
    let chosen = window.prompt('Do you want to add one more product to the product list? \n' +
                    '1 - Yes \n' +
                    '2 - No \n')

    switch(chosen){
        case'1':
        ListProducts()
        break;

        case'2':
        endProgram()
        break;

        default:
            alert('I don' + 't understand, sorry!')
            ListProducts()
            break;
    }

}

function endProgram(){
    alert('Closing Program...')
}

ListProducts()