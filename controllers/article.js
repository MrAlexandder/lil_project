module.exports = (router) => {

    const routers = router();
    routers.get('/', (req, res) => {
        res.send('All articles');
    });

    routers.get('/:id', (req, res) => {
        res.send(`Article ${req.params.id}`);
    });

    return routers;
};
