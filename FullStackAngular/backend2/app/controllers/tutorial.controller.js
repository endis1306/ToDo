const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.tytul) {
    res.status(400).send({
    message: "Zawartość nie może być pusta!"
    });
    return;
    }
    // Create a Tutorial
    const tutorial = {
    tytul: req.body.tytul,
    opis: req.body.opis,
    opublikowany: req.body.opublikowany ? req.body.opublikowany : false
    };
    // Save Tutorial in the database
    Tutorial.create(tutorial)
    .then(data => {
    res.send(data);
    })
    .catch(err => {
    res.status(500).send({
    message:
    err.message || "Podczas zapisywania wystąpił błąd."
    });
    });
    };
    
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const tytul = req.params.tytul;
    var condition = tytul ? { tytul: { [Op.like]: `%${tytul}%` } } : null;
    Tutorial.findAll({ where: condition })
    .then(data => {
    res.send(data);
    })
    .catch(err => {
    res.status(500).send({
    message:
    err.message || "Podczas odczytywania wystąpił błąd."
    });
    });
    };
    
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id || 0;
    Tutorial.findByPk(id)
    .then(data => {
    res.send(data);
    })
    .catch(err => {
    res.status(500).send({
    message: "Błąd szukania tutorialu o id=" + id
    });
    });
    };
    
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
const id = req.params.id;
Tutorial.update(req.body, {
where: { id: id }
})
.then(num => {
if (num == 1) {
res.send({
message: "Tutorial został zmieniony."
});
} else {
res.send({
message: `Nie mogę zmienić Tutorialu o id=${id}. Być może nie ma takiego
Tutorialu lub req.body jest puste!`
});
}
})
.catch(err => {
res.status(500).send({
message: "Błąd zmiany Tutorialu o id=" + id
});
}
);
}
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    console.log("ID otrzymane na backendzie:", req.params
    .id);
    const id = req.params.id;
    
    Tutorial.destroy({
    where: { id: id }
    })
    .then(num => {
    if (num == 1) {
    res.send({
    message: " Tutorial został usunięty!"
    });
    } else {
    res.send({
    message: `Nie mogę usunąć Tutorial o id=${id}. Może nie ma takiego Tutorialu!`
    });
    }
    })
    .catch(err => {
    res.status(500).send({
    message: "Nie mogę usunąć Tutorialu o id=" + id
    });
    });
    };
    
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
    where: {},
    truncate: false
    })
    .then(nums => {
    res.send({ message: `Tutoriale ${nums} zostały usunięte!` });
    })
    .catch(err => {
    res.status(500).send({
    message:
    err.message || "Podczas usuwania wystąpiły błędy."
    });
    });
    };
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { opublikowany: true } })
    .then(data => {
    res.send(data);
    })
    .catch(err => {
    res.status(500).send({
    message:
    err.message || "Podczas znajdowania Tutoriali wystąpiły błędy."
    });
    });
    };
