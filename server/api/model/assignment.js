let mongoose = require('mongoose');

/*
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
*/
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let AssignmentsShema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    auteur: String, // Nom de l'élève
    matiere: String, // Matière
    prof: String, // Prof
    note: Number, // Note sur 20
    remarques: String, // Remarques sur l'assignment
});

AssignmentsShema.plugin(aggregatePaginate);

module.exports = mongoose.model('Assignment',AssignmentsShema)
