import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from "../data/data";
import Ticker from 'react-ticker';
import './Datos.css';

const profile = data.profile;
const socialMediaList = data.SocialMedias;
const summaryDetails = data.summaryDetails;

const quotes = [
    '“We are convinced that liberty without socialism is privilege, injustice; and that socialism without liberty is slavery and brutality.”',
    '“Private capital tends to become concentrated in few hands, partly because of competition among the capitalists, and partly because technological development and the increasing division of labor encourage the formation of larger units of production at the expense of smaller ones. The result of these developments is an oligarchy of private capital the enormous power of which cannot be effectively checked even by a democratically organized political society. This is true since the members of legislative bodies are selected by political parties, largely financed or otherwise influenced by private capitalists who, for all practical purposes, separate the electorate from the legislature. The consequence is that the representatives of the people do not in fact sufficiently protect the interests of the underprivileged sections of the population. Moreover, under existing conditions, private capitalists inevitably control, directly or indirectly, the main sources of information (press, radio, education). It is thus extremely difficult, and indeed in most cases quite impossible, for the individual citizen to come to objective conclusions and to make intelligent use of his political rights.”',
    '“Freedom is always the freedom of the dissenter.”',
    '“Civil government, so far as it is instituted for the security of property, is in reality instituted for the defense of the rich against the poor, or of those who have some property against those who have none at all.”',
    '“For the recognition of private property has really harmed Individualism, and obscured it, by confusing a man with what he possesses.”',
    '“Everyone should be able to attend to his religious as well as his bodily needs without the police sticking their nose in.”',
    '“Philosophers have hitherto interpreted the world in various ways; the point, however, is to change it.”',
    '“Money is the alienated essence of man’s labor and life; and this alien essence dominates him as he worships it."',
  ]

  function rand(min, max) {
    var offset = min
    var range = (max - min) + 1
    var randomNumber = Math.floor(Math.random() * range) + offset
    return randomNumber
  } 

const Datos = () => {
    return (
        <div className="datos">
            {profile.map((p, index) => (
                <div key={index}>
                    {/*
                    <h2>{p.name}</h2>
                    <p className="p-0 m-0">{p.role}</p>
                    <h3>{p.email}</h3>
                    <p>{p.phone}</p>
                    <hr />
                    <h1>PROFESSIONAL SUMMARY</h1>
                    <p>{p.summary}</p>
                    
                    <ul className="hidden-xs">
                        {p.summaryDetails.map(sd => (
                            <li>{sd}</li>
                        ))}
                    </ul>
                     */}
                    <Ticker
                        offset="10%"
                        move={true}
                        >
                            {p.summaryDetails.map((s, index) => (
                                <h1 key={index}>{s[rand(0, s.length - 1)]}</h1>
                            ))}
                    </Ticker>
                </div>
            ))}
            {/* 
            <ul>
                {socialMediaList.map(s => (<li>{s}</li>))}
            </ul>
            <div>
                {
					data.Experiences.map((experience, i) => {
						return (
							<div key={i}>
								<div>
									<a href={experience.url}>
										<img src={experience.logo} alt={experience.companyName} />
									</a>
									<div>
										<div>
											<a href={experience.url}>{experience.companyName}</a>
										</div>
											{experience.roles.map(function (role, i) { 
												return <div key={i}>
													<h5>{role.title}</h5>
													<span>{role.startDate}</span>
													<span>{role.location}</span>
													<p>{role.description}</p>
												</div>
											})}
									</div>
								</div>
							</div>
						);
					})
				}
            </div>
            <div>
                {
                  data.Skills.map((skill) => {
                    return (
                      <div>
                        <h4>{skill.Area}</h4>
                        <ul>
                          {
                            skill.SkillSet.map((skillDetail) => {
                              return (
                                  <li>
                                    {skillDetail.Name}
                                  </li>
                              );
                            })
                          }
                        </ul>
                      </div>
                    );
                  })
                } 
            </div>
            */}
        </div>

    )
};

export default Datos;