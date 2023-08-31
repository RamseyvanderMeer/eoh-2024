import Profile from '@/profile';
import Content from '@/content';

const COMMITTEE_HEADSHOTS = [
	{
        headshot: "assets/headshots/Mary.jpg",
        name: "Mary Ehmann",
        position: "Co-Director",
        major: "Chemical Engineering",
        year: "Senior"
    },
    {
        headshot: "assets/headshots/Riccelo.jpeg",
        name: "Riccelo Guidorizzi",
        position: "Co-Director",
        major: "Industrial Engineering",
        year: "Senior"
    },
    {
        headshot: "assets/headshots/Rohini.jpg",
        name: "Rohini Ramesh",
        position: "Director of Exhibits",
        major: "Aerospace Engineering",
        year: "Junior"
    },
    {
        headshot: "assets/headshots/Paymon.jpeg",
        name: "Paymon Sadat",
        position: "Director of Facilities and Equipment",
        major: "Bioengineering",
        year: "Junior"
    },
    {
        headshot: "assets/headshots/Bhavika.jpg",
        name: "Bhavika Kagathi",
        position: "Special Events Director",
        major: "Bioengineering",
        year: "Masters"
    },
    {
        headshot: "assets/headshots/Kavya.jpg",
        name: "Kavya Sudhir",
        position: "Special Events Director",
        major: "Bioengineering",
        year: "Senior"
    },
    {
        headshot: "assets/headshots/Alyssa.jpg",
        name: "Alyssa Huang",
        position: "Secretary/Treasurer",
        major: "Electrical Engineering",
        year: "Sophomore"
    },
    {
        headshot: "assets/headshots/Ramya.jpg",
        name: "Ramya Gandhi",
        position: "Startup Showcase Director",
        major: "Systems Engineering and Design",
        year: "Senior"
    },
    {
        headshot: "assets/headshots/Oviyan.jpeg",
        name: "Oviyan Rathi",
        position: "HSDC Director",
        major: "Industrial Engineering",
        year: "Sophomore"
    },
    {
        headshot: "assets/headshots/Elizabeth.jpeg",
        name: "Elizabeth Farah",
        position: "MSDC Director",
        major: "Industrial Engineering",
        year: "Sophomore"
    },
    {
        headshot: "assets/headshots/Saagar.jpeg",
        name: "Saagar Kolachina",
        position: "Director of Robotics",
        major: "Material Science and Engineering",
        year: "Junior"
    },
    {
        headshot: "assets/headshots/Shivaditya.jpeg",
        name: "Shivaditya Gohil",
        position: "Community Outreach Director",
        major: "Computer Engineering",
        year: "Sophomore"
    },
    {
        headshot: "assets/headshots/Victoria.jpeg",
        name: "Victoria Kindratenko",
        position: "Community Outreach Director",
        major: "Bioengineering",
        year: "Senior"
    },
    {
        headshot: "assets/headshots/Nikita.jpeg",
        name: "Nikita Pawar",
        position: "Director of Advancements",
        major: "Mechanical Engineering",
        year: "Junior"
    },
    {
        headshot: "assets/headshots/BlankProfile.png",
        name: "Kiran Kaur",
        position: "Director of Hospitality",
        major: "Industrial Engineering",
        year: "Junior"
    },
    {
        headshot: "assets/headshots/Jasmine.jpg",
        name: "Jasmine Varghese",
        position: "Director of Judging and Awards",
        major: "Bioengineering",
        year: "Senior"
    },
    {
        headshot: "assets/headshots/Anushka.jpg",
        name: "Anushka Desai",
        position: "External Marketing Director",
        major: "Bioengineering",
        year: "Senior"
    },
    {
        headshot: "assets/headshots/Arya.jpeg",
        name: "Arya Haria",
        position: "Junior External Marketing Director",
        major: "Mechanical Engineering",
        year: "Sophomore"
    },
    {
        headshot: "assets/headshots/Rachel.jpg",
        name: "Rachel Huang",
        position: "Director of Visitor Information",
        major: "Computer Science",
        year: "Sophomore"
    },
    {
        headshot: "assets/headshots/Shivani.jpeg",
        name: "Shivani Ramesh",
        position: "Senior Corporate Director",
        major: "Civil and Environmental Engineering",
        year: "Senior"
    },
    {
        headshot: "assets/headshots/Alice.jpg",
        name: "Alice Getmanchuk",
        position: "Director of Technology",
        major: "Computer Engineering",
        year: "Senior"
    },
    {
        headshot: "assets/headshots/Nakul.jpeg",
        name: "Nakul Iyer",
        position: "Director of Technology",
        major: "Computer Science",
        year: "Junior"
    },
    {
        headshot: "assets/headshots/Clara.jpeg",
        name: "Clara Lynk",
        position: "Director of Creative",
        major: "Bioengineering",
        year: "Senior"
    },
    {
        headshot: "assets/headshots/Abbie.jpeg",
        name: "Abbie Kim",
        position: "Junior Corporate Director",
        major: "Chemical Engineering",
        year: "Junior"
    },
    {
        headshot: "assets/headshots/Anushri.jpg",
        name: "Anushri Mittal",
        position: "Junior Corporate Director",
        major: "Computer Science",
        year: "Sophomore"
    },
    {
        headshot: "assets/headshots/Dylan.jpeg",
        name: "Dylan Hsu",
        position: "Junior Corporate Director",
        major: "Material Science and Engineering",
        year: "Senior"
    },
];
export default function MeetTheCommittee() {
	return (
		<div className="grid lg:grid-cols-5 grod-cols-2 gap-1">
			{COMMITTEE_HEADSHOTS.map((c) => <Profile {...c} key={c.name} />)}
		</div>
	);
}
