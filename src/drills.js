require('dotenv').config()
const knex = require('knex')
const ShoppingListService = require('./shopping-list-service')

const knexInstance = knex({
    client: 'pg',
    connection:process.env.DB_URL,
})

console.log(ShoppingListService.getAllItems())

/*function searchByName(searchTerm) {
    knexInstance
        .select('*')
        .from('shopping_list')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log('search by:', { searchTerm })
            console.log(result)
        })
}

searchByName('urger')

function paginateItems(pageNumber) {
    const itemsPerPage = 6
    const offset = itemsPerPage * (pageNumber - 1)
    knexInstance
        .select('*')
        .from('shopping_list')
        .limit(itemsPerPage)
        .offset(offset)
        .then(result => {
            console.log('Page:', { pageNumber })
            console.log(result)
        })
}

paginateItems(3)

function itemsAddedAfter(daysAgo) {
    knexInstance
        .select('*')
        .from('shopping_list')
        .where(
            'date_added',
            '>',
            knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
        )
        .then(result => {
            console.log('added after:', { daysAgo },' days ago')
            console.log(result)
        })
}

itemsAddedAfter(2)

function costPerCategory() {
    knexInstance
        .select('category')
        .sum('price as total')
        .from('shopping_list')
        .groupBy('category')
        .then(result => {
            console.log('cost per category:')
            console.log(result)
        })
}

costPerCategory()*/