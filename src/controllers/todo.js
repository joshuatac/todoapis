const Todo = require('../models/todo');


exports.addTodo = (req, res) => {
	const todoObj = {
		title: req.body.title,
		description: req.body.description,
	};

	const tod = new Todo(todoObj);
	tod.save((error, todo) => {
		if (error) return res.status(400).json({ error });
		if (todo) {
			return res.status(200).json({ todo });
		}
	});
};

exports.getTodo = (req, res) => {
    Todo.find({}).exec((error, todos) => {

        if (error) return res.status(400).json({ error });
        if(todos){
            res.status(200).json({ todos })
        }

    });
}



