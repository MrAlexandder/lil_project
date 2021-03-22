module.exports = (router) => {

    const routers = router();
    routers.get('/', (req, res) => {
        res.send('All category');
    });

    routers.get('/:id', (req, res) => {
        res.send(`Category ${req.params.id}`);
    });

    return routers;
};
