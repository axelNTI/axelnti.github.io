const express = require("express");
const path = require("path");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const app = express();
require("dotenv").config({
  path: path.join(__dirname, "..", ".env"),
});

const getAccessToken = async (code) => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://localhost:8888/callback", // Make sure this matches your app’s settings
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    console.error("Error fetching access token:", data);
    throw new Error(data.error || "Failed to get tokens");
  }

  // Return both access_token and refresh_token
  return {
    access_token: data.access_token,
    refresh_token: data.refresh_token, // This is the refresh token
  };
};

// Step 1: Get Authorization Code
app.get("/", (req, res) => {
  const params = new URLSearchParams({
    client_id: process.env.CLIENT_ID,
    response_type: "code",
    redirect_uri: "http://localhost:8888/callback",
    scope: "user-top-read user-read-recently-played", // Add the necessary scopes here
  });

  res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
});

// Step 2: Handle Callback and Request Tokens
app.get("/callback", async (req, res) => {
  const code = req.query.code;
  if (!code) return res.send("Authorization failed");

  try {
    const tokens = await getAccessToken(code);
    console.log("Access Token:", tokens.access_token);
    console.log("Refresh Token:", tokens.refresh_token); // Log the refresh token

    // Store the refresh token securely, e.g., in a database or session
    // Example: Store it in memory (not recommended for production)
    global.refreshToken = tokens.refresh_token;

    res.send("Tokens received, check console.");
  } catch (error) {
    console.error("Failed to get tokens:", error.message);
    res.send("Failed to get tokens");
  }
  server.close();
});

const server = app.listen(8888, () => {
  console.log("Server running at http://localhost:8888");
});
