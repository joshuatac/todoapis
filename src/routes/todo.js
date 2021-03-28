const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const { addTodo, getTodo } = require('../controllers/todo');

router.post('/todo/add', addTodo);
router.get('/todo/get', getTodo);


router.patch('/todo/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const updates = req.body;
		const options = { new: true };

		const result = await Todo.findByIdAndUpdate(id, updates, options);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
});

router.delete('/todo/:id', async (req, res) => {
	
	try {
		const id = req.params.id;
        const result = await Todo.findByIdAndDelete(id);
		console.log(result);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
});

module.exports = router;
