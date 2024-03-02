const express = require('express');
const cacheMiddleware = require('./cacheMiddleware');
const generateData = require('./generateData'); 

const app = express();

app.use(cacheMiddleware);

app.get('/data', async (req, res, next) => { 
  const startTime = Date.now(); 

  try {
    const data = await generateData();
      res.json(data); 
      const processingTime = Date.now() - startTime;
      console.log(`GET /data processed in ${processingTime} ms`);
  } catch (error) {
    console.error('Error fetching data:', error);
    next(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
