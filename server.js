// Import required libraries
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Initialize Express app
const app = express();
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Middleware to parse JSON requests

const baseUrl = "https://game-api.test.k-id.com/api/v1"

// Define the proxy endpoint for age gate check
app.post('/age-gate/check', async (req, res) => {
  try {
    // Forward the request payload from the client
    const requestBody = req.body;

    // Add the API key securely
    const API_KEY = process.env.KID_KEY; // Replace with your actual API key

    // Make the server-to-server call
    const response = await axios.post(
      `${baseUrl}/age-gate/check`,
      requestBody,
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Forward the API response to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors gracefully
    if (error.response) {
      // Errors from the API call
      res.status(error.response.status).json(error.response.data);
    } else {
      // Internal server errors
      console.error('Server error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

// Define the proxy endpoint for fetching age gate requirements
app.get('/age-gate/get-requirements', async (req, res) => {
  try {
    // Extract jurisdiction from query parameters
    const { jurisdiction } = req.query;

    if (!jurisdiction) {
      return res.status(400).json({ error: 'Jurisdiction is required' });
    }

    // Add the API key securely
    const API_KEY = process.env.KID_KEY; // Replace with your actual API key

    // Make the server-to-server call
    const response = await axios.get(
      `${baseUrl}/age-gate/get-requirements`,
      {
        params: { jurisdiction },
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Forward the API response to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors gracefully
    if (error.response) {
      // Errors from the API call
      res.status(error.response.status).json(error.response.data);
    } else {
      // Internal server errors
      console.error('Server error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

app.get('/age-gate/get-default-permissions', async (req, res) => {
    try {
      // Extract query parameters
      const { jurisdiction, dateOfBirth, age } = req.query;
  
      if (!jurisdiction) {
        return res.status(400).json({ error: 'Jurisdiction is required' });
      }
  
      if (!dateOfBirth && !age) {
        return res.status(400).json({ error: 'Either dateOfBirth or age is required' });
      }
  
      if (dateOfBirth && age) {
        return res.status(400).json({ error: 'Provide either dateOfBirth or age, not both' });
      }
  
      // Add the API key securely
      const API_KEY = process.env.KID_KEY; // Replace with your actual API key
  
      // Make the server-to-server call
      const response = await axios.get(
        `${baseUrl}/age-gate/get-default-permissions`,
        {
          params: { jurisdiction, dateOfBirth, age },
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Forward the API response to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors gracefully
      if (error.response) {
        // Errors from the API call
        res.status(error.response.status).json(error.response.data);
      } else {
        // Internal server errors
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
});

app.get('/session/get', async (req, res) => {
    try {
      // Extract query parameters
      const { sessionId, kuid, etag } = req.query;
  
      if (!sessionId) {
        return res.status(400).json({ error: 'sessionId is required' });
      }
  
      // Add the API key securely
      const API_KEY = process.env.KID_KEY; // Replace with your actual API key
  
      // Make the server-to-server call
      const response = await axios.get(
        `${baseUrl}/session/get`,
        {
          params: { sessionId, kuid, etag },
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Forward the API response to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors gracefully
      if (error.response) {
        // Errors from the API call
        res.status(error.response.status).json(error.response.data);
      } else {
        // Internal server errors
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
});

app.get('/challenge/get', async (req, res) => {
    try {
      // Extract query parameters
      const { challengeId } = req.query;
  
      if (!challengeId) {
        return res.status(400).json({ error: 'challengeId is required' });
      }
  
      // Add the API key securely
      const API_KEY = process.env.KID_KEY; // Replace with your actual API key
  
      // Make the server-to-server call
      const response = await axios.get(
        `${baseUrl}/challenge/get`,
        {
          params: { challengeId },
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Forward the API response to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors gracefully
      if (error.response) {
        // Errors from the API call
        res.status(error.response.status).json(error.response.data);
      } else {
        // Internal server errors
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
});

app.get('/challenge/get-status', async (req, res) => {
    try {
      // Extract query parameters
      const { challengeId } = req.query;
  
      if (!challengeId) {
        return res.status(400).json({ error: 'challengeId is required' });
      }
  
      // Add the API key securely
      const API_KEY = process.env.KID_KEY; // Replace with your actual API key
  
      // Make the server-to-server call
      const response = await axios.get(
        `${baseUrl}/challenge/get-status`,
        {
          params: { challengeId },
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Forward the API response to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors gracefully
      if (error.response) {
        // Errors from the API call
        res.status(error.response.status).json(error.response.data);
      } else {
        // Internal server errors
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
});

app.post('/challenge/send-email', async (req, res) => {
    try {
      // Extract request body
      const { challengeId, email } = req.body;
  
      if (!challengeId || !email) {
        return res.status(400).json({ error: 'challengeId and email are required' });
      }
  
      // Add the API key securely
      const API_KEY = process.env.KID_KEY; // Replace with your actual API key
  
      // Make the server-to-server call
      const response = await axios.post(
        `${baseUrl}/challenge/send-email`,
        { challengeId, email },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Forward the API response to the client
      res.status(response.status).send();
    } catch (error) {
      // Handle errors gracefully
      if (error.response) {
        // Errors from the API call
        res.status(error.response.status).json(error.response.data);
      } else {
        // Internal server errors
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
});

app.post('/age-verification/perform-age-appeal', async (req, res) => {
    try {
      // Extract request body
      const { jurisdiction, subject, criteria } = req.body;
  
      if (!jurisdiction || !subject || !criteria) {
        return res.status(400).json({ error: 'jurisdiction, subject, and criteria are required' });
      }
  
      // Add the API key securely
      const API_KEY = process.env.KID_KEY; // Replace with your actual API key
  
      // Make the server-to-server call
      const response = await axios.post(
        `${baseUrl}/age-verification/perform-age-appeal`,
        { jurisdiction, subject, criteria },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Forward the API response to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors gracefully
      if (error.response) {
        // Errors from the API call
        res.status(error.response.status).json(error.response.data);
      } else {
        // Internal server errors
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  });

// Start the server (Cloud Run entry point)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
