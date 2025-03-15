const { Router } = require('express');
const router = Router();

router.get('/tasks', (req, res) => {
    const tasks = [
        { id:1 , name: 'Task #1'},
        { id:2 , name: 'Task #2'},
        { id:3 , name: 'Task #3'}
    ]
    res.json( tasks )
});

module.exports = router;