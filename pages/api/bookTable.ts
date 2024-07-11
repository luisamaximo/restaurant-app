import { NextApiRequest, NextApiResponse } from 'next'; //types from Next.js used to type the request and response objects.
import fs from 'fs'; //Node.js's file system module used to interact with the file system.
import path from 'path'; //Node.js's path module used to handle and transform file paths.

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const filePath = path.join(process.cwd(), 'bookings.txt');
    const bookingData = JSON.stringify(req.body);

    fs.appendFile(filePath, bookingData + '\n', (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(200).json({ message: 'Booking saved successfully' });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}