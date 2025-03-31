import React from "react";

//include images into your bundle
import {Navbar} from './navbar';
import {Jumbotron} from './Jumbotron';
import {Card} from './card';
import{Footer} from './footer';

//create your first component

const Home = () => {
	return (
		<>
			<div className="Navbar">
                <Navbar />
            </div>
            <div className="Container">
                <Jumbotron />
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div>
                <Footer />
            </div>
		</>
	);
};

export default Home;