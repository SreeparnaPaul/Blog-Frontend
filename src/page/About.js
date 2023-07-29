import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import about from "../assets/about.jpg"
import loginImage from "../assets/login.jpg"
function About() {
  return (
    <div style={{ backgroundImage: `url(${loginImage})`, backgroundRepeat: "no-repeat", minHeight: "90vh", backgroundSize: "cover", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div className='container' >
      <h2 style={{color:"#525050"}}>"Welcome to BlogiFy: Exploring the World Through Five Engaging Categories"</h2>
      <Card sx={{ minWidth: 400, backgroundImage: `url(${about})`, color: 'white',marginTop:2 }}>
        <CardContent>
          <Typography variant="body2" sx={{ fontStyle: 'italic', fontSize: 20, marginBottom: 2 }}>
            Welcome to BlogiFy, your one-stop destination for diverse and captivating content that covers an array of topics.
            With our five distinct categories—Health, Politics, Science, Food, and Travel—our aim is to provide you with insightful articles that both inform and inspire.
            Whether you're seeking advice on leading a healthier lifestyle, staying up-to-date with the latest political developments, delving into fascinating scientific discoveries,
            exploring delectable cuisines, or embarking on exciting travel journeys, Blogify has something for everyone. Let's dive into the captivating world of ideas and knowledge!
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic', fontSize: 20 }}>
            At Blogify, we believe in the power of knowledge and exploration.
            Through our diverse categories—Health, Politics, Science, Food, and Travel—we aim to broaden your horizons and spark your curiosity.
            Join us on this enriching journey as we delve into the depths of various subjects and embrace the wonders of the world.
            We hope that Blogify becomes your go-to source for meaningful insights, delightful experiences, and a sense of community.
            If you have any suggestions or topics you'd like us to cover, feel free to reach out. Happy reading and exploring!
          </Typography>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}

export default About;
