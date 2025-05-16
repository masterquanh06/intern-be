const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const port = 3000;
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.post('/api/link', async (req, res) => {
    const { url } = req.body;
    try {
        const response = await axios.post('https://id.traodoisub.com/api.php', {
            link: url,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi gọi API Traodoisub' });
    }
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
