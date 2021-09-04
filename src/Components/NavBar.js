import {Navbar as Bar, Nav, Container} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

export default function NavBar() {

    return (

            <Bar style={{backgroundColor:"#811434",positon:"relative"}} fixed="top" variant="dark">
                <Container>
                    <div class="navDisplay">
                    <Bar.Brand href="#home" style={{position:"absolute",left:"20px"}}>CORKOWL</Bar.Brand>
                    <FormControl style={{marginLeft:"160px",width:"500px"}} type="text" placeholder="Search" />
                    <Icon.Bell size={22} style={{position:"absolute",right:"240px",top:"14px"}} color="#fff"/>
                    <p style={{color:"white",position:"absolute",right:"80px",top:"14px"}}>Priyam Chhabra</p>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{borderRadius:"50%",width:"40px",height:"40px",right:"20px",position:"absolute"}}/>
                    </div>
                </Container>
            </Bar>

    )
}
