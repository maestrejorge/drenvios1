async function getWelcome(req, res) {
    try {
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to NodeJS Challenge</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }
                .welcome-container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    text-align: left;
                    max-width: 600px;
                    width: 100%;
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #555;
                    line-height: 1.6;
                }
                strong {
                    font-weight: bold;
                }
                ul {
                    list-style-type: square;
                    padding-left: 20px;
                }
                /* Add more styling as needed */
            </style>
        </head>
        <body>
            <div class="welcome-container">
                <h1>NodeJS Challenge</h1>
                <p>This practical part of the interview is designed to assess your technical skills. There is no
                single correct answer to this test, but we highly value good performance, well-tested
                applications, strong logic for aggregations, and excellent clean code and creativity.
                The problem involves creating an API using Express for a sneakers store. You are required
                to implement two public routes:</p>
        
                <ol>
                    <li><strong>https://drenvios1.onrender.com/products:</strong> This route should return an array containing only the products that are currently in stock.</li>
                    <li><strong>https://drenvios1.onrender.com/price/{user_id}/{nombre_producto}:</strong> Some clients in this business have special pricing for certain brands. This route should return the special price for the given client and brand, if available. If the client doesn't have a special price for the brand, the route should return the base price.</li>
                </ol>
        
                <p>We wish you the best of luck!</p>
        
                <h2>Requirements</h2>
                
                <p><strong>Architecture:</strong></p>
                <p>We are interested in a good architectural pattern. You can choose any architecture, but it should be clear and easy to read. We will discuss it with you at the end. We appreciate if the architecture has all the layers for each pattern.</p>
            </div>
        </body>
        </html>      
        `);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getWelcome
};