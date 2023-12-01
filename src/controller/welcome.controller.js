



async function getWelcome(req, res) {
    try {
        res.json()
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}