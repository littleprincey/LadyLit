exports.up = (knex, Promise) => {
  return knex.schema.createTable('books', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('author')
    table.integer('publication_date')
    table.string('description')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('books')
}
