const router = require('express').Router();

const { Film } = require('../../db');

// all records
router.get('/', async (req, res) => {
    const films = await Film.findAll();
    res.json(films);
});

// Single record
router.get('/:filmId', async (req, res) => {
    const film = await Film.findOne({ where: { id: req.params.filmId } });
    res.json(film); 
});

// Add Registro
router.post('/', async (req, res) => {
    const film = await Film.create(req.body);
    res.json(film);
});

// Update
router.put('/:filmId', async (req, res) => {
    await Film.update(req.body, {
        where: { id: req.params.filmId}
    });
    res.json({ success: 'Resgitro Update'});
});

// Delete
router.delete('/:filmId', async (req, res) => {
    await Film.destroy({
        where: { id: req.params.filmId}
    });
    res.json({ success: 'registro eliminado'});

});

module.exports = router;