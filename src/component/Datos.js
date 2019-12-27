import React from 'react';
import data from "../data/data"; 

const socialMediaList = data.SocialMedias;

const Datos = () => {
    return(
        <div>
            <h2>datos</h2>
            <p>si claro</p>
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
        </div>
        
    )
};

export default Datos;