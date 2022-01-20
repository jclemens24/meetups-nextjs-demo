import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      const url =
        'mongodb+srv://jclemens24:qzpmQZPM24@cluster0.firnl.mongodb.net/meetups?retryWrites=true&w=majority';

      const client = await MongoClient.connect(url);
      const db = client.db();

      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);
      client.close();
      res.status(201).json({
        status: 'Success',
        data: result
      });
    } catch (error) {
      res.status(404).json({
        status: 'fail'
      });
      console.error(error.message);
    }
  }
}
