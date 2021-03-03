const db = require('../database/dbConfig')

module.exports = {
    findAll,
    findBy,
    findById,
    add,
    update,
    remove
};

function findAll() {
    return db("characters");
}

function findBy(filter) {
    return db("characters")
    .where(filter).first();
}

function findById(id) {
    return db("characters")
    .where({id}).first();
}

function add(character) {
    return db("characters")
    .insert(character, "id")
    .then(ids => findById(ids[0]));
}

function update(id, changes) {
    return db("characters")
    .where({id})
    .update(changes, '*')
}

function remove(id) {
    return db("characters")
    .where({id}).del()
}