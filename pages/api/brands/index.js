// File: pages/api/brands.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/brands`);
    // Return data from the request
    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res.status(response.status).json({ message: 'An error occurred while fetching data' });
    }
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.message });
  }
}
