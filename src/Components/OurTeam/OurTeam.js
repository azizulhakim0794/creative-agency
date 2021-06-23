import React from 'react';
import NavBar from '../CommonComponent/NavBar/NavBar.js';
import './OurTeam.css'
import customer1 from '../../images/customer-1.png'
import customer2 from '../../images/customer-2.png'
import customer3 from '../../images/customer-3.png'
import OurTeamMember from './OurTeamMember';
const ourTeamData = [
    {
        name: 'Abdullah Amir',
        work: 'Mobile & app designer, Web developer',
        details: 'Lorem ipsum dolor sit amet, Purus commodo ipsum duis laoreet maecenas. Feugiat',
        img: customer1,
        id: '01'
    },
    {
        name: 'Hasan Ali',
        work: 'Graphic designer',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat',
        img: customer2,
        id: '02'
    },
    {
        name: "Sakib Haydar",
        work: 'Web developer,SEO',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat',
        img: customer3,
        id: '03'
    },
]
const OurTeam = () => {
    return (
        <main className="">
            <div>
                <NavBar />

                <div className="text-center">
                    <div className="container">
                        <h3 className=" mt-3"> Meet our team Members</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium recusandae soluta dolorum, quas consequuntur animi, delectus, molestiae porro voluptate voluptatum vel rem. Dolor, possimus cum. Distinctio eligendi voluptates maiores laboriosam.Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Accusantium recusandae soluta dolorum, quas consequuntur animi, delectus,
                        molestiae porro voluptate voluptatum vel rem. Dolor, possimus cum. Distinctio eligendi voluptates maiores
                     laboriosam.</p>
                    </div>
                    <div className="main-bg pt-5 pl-5 pr-5">
                        <div className="container">
                            <div className="row mt-5">

                                {ourTeamData.map(data => <OurTeamMember data={data} key={data.id} />)}

                            </div>
                            <br/><br/>
                            <p className="text-center"><small>Copyright by Tamzid in {new Date().getFullYear()}</small></p><br/>
                        </div>

                    </div>


                </div>
            </div>
        </main>
    );
};

export default OurTeam;