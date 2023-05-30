import React from "react";
import Navbar from "../../components/Header/Navbar";
import Hero from "../../components/Main/Hero";
import Server from "../../components/Main/Server";
import { Helmet } from "react-helmet";
import Client from "../../components/Main/Client";
import Footer from "../../components/Footer";
import Table from "../../components/Main/Table";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Server />
        <Client />
        <Table />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
