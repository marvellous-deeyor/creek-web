import photo from "../component/assets/New idea.png"
import member from "../component/assets/ic_member.svg"
import notification from "../component/assets/ic_notification.svg"
const HomePage  = () => {
	return ( <div className="body">
        <div className="left_screen">

		<h1 className="title"> WELCOME <br />
			 TO THE{`<CREEK/>`}</h1>

			<p className="home_text">TechCreek is a habitat for the teeming <br />
			<br />
				population of youths making sense of their <br />
				<br />
				 lives with their digital skills and competencies, <br />
				 <br />
				 and actively involved in the development of <br />
				 <br />
				 the ‘new economy’ from Rivers State.</p>
				
				<div className="address">
				Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port Harcourt. Rivers <br />
				State, Nigeria. talk@techcreek.ng <br />
                 O9030003185, 09030003180
				</div>
				 </div>

		<div className="right__screen">
	
			<img src={photo} alt="creek" />
			<img className="notification_icon" src={notification} alt="" />
			<a href="/members"><img className="member_icon" src={member} alt="" /></a>
		</div>

	</div> );
}
 
export default  HomePage;










