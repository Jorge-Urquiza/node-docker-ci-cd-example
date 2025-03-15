const request = require('supertest');
const app = require('../src/app');

describe('GET /tasks', () => {
    it('should return a list of tasks', async () => {
        const response = await request(app).get('/tasks');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty('id'); 
        expect(response.body[0]).toHaveProperty('name');
    });

    it('should return the correct task structure', async () => {
        const response = await request(app).get('/tasks');
        const task = response.body[0];

        expect(task).toEqual({
            id: expect.any(Number),
            name: expect.any(String),
        });
    });

    it('should return the correct tasks', async () => {
        const response = await request(app).get('/tasks');
        expect(response.body).toEqual([
            { id: 1, name: 'Task #1' },
            { id: 2, name: 'Task #2' },
            { id: 3, name: 'Task #3' }
        ]);
    });
});