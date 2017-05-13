import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Cards extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Title title="Cards">A button indicates a possible user action</Title>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Full cards</h6>
						<p>Full cards contain an image, title, subtitle, description and a footer</p>
					</div>
					<div className="module collapsed">
						<div className="cards">
							<div className="card">
								<div className="header image">
									<img src="/images/365cons_pinata.jpg" alt="" />
								</div>
								<div className="content">
									<h6 className="header">
										Jessie
									</h6>
									<div className="sub">
										Sassy pi&ntilde;ata
									</div>
									<p>
										Please don&#39;t just friend me so you can hit me, I&#39;ll just hand over the candy, I swear.
									</p>
								</div>
								<div className="content footer">
									<div className="float-left">
										<i className="fa fa-users"></i>
										34 friends
									</div>
									<div className="float-right">
										Joined 2 days ago
									</div>
								</div>
							</div>
							<div className="card">
								<div className="header image">
									<img src="/images/365cons_cow.jpg" alt="" />
								</div>
								<div className="content">
									<h6 className="header">
										Wally
									</h6>
									<div className="sub">
										Happy cow
									</div>
									<p>
										Don&#39;t know why people are scared of me... I&#39;m just your typical friendly neighbour.
									</p>
								</div>
								<div className="content footer">
									<div className="float-left">
										<i className="fa fa-users"></i>
										6 friends
									</div>
									<div className="float-right">
										Joined 3 weeks ago
									</div>
								</div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Action cards</h6>
						<p>A card can be used to display information as well as list a call to action</p>
					</div>
					<div className="module collapsed">
						<div className="cards">
							<div className="card">
								<div className="content">
									<h6 className="header">
										Can&#39;t log in!
									</h6>
									<div className="sub">
										Created by Michelle
									</div>
									<p>
										There is an issue with logging in to my account. I have already tried resetting the password.
									</p>
								</div>
								<div className="content footer button">
									View issue
								</div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Basic cards</h6>
						<p>Basic cards are used to display simple information</p>
					</div>
					<div className="module collapsed">
						<div className="cards">
							<div className="card">
								<div className="content">
									<h6 className="header">
										Koi
									</h6>
									<div className="sub">
										Fish
									</div>
									<p>
										Koi or more specifically nishikigoi, are ornamental varieties of domesticated common carp that are kept for decorative purposes in outdoor koi ponds or water gardens.
									</p>
								</div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
				<div className="row example">
					<div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
						<h6>Fluid cards</h6>
						<p>Cards can also take up the width of the container by adding the <code>fluid</code> class</p>
					</div>
					<div className="module collapsed">
						<div className="cards">
							<div className="card fluid">
								<div className="content">
									<h6 className="header">
										Peafowl
									</h6>
									<a className="sub">
										https://en.wikipedia.org/wiki/Peafowl
									</a>
									<p>
										The Peafowl include two Asiatic bird species (the blue or Indian peafowl originally of India and Sri Lanka and the green peafowl of Myanmar, Indochina, and Java) and one African species (the Congo peafowl native only to the Congo Basin) of bird in the genera Pavo and Afropavo of the Phasianidae family, the pheasants and their allies, known for the male&#39;s piercing call and, among the Asiatic species, his extravagant eye-spotted tail covert feathers which he displays as part of a courtship ritual. The term peacock is properly reserved for the male; the female is known as a peahen, and the immature offspring are sometimes called peachicks.
									</p>
								</div>
							</div>
						</div>
						<div className="footer">
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Cards
