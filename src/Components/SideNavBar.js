
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarContent,
    SidebarFooter
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import * as Icon from 'react-bootstrap-icons';

export default function SideBar() {
  // added styles 
  const styles = {
    sideBarHeight: {
      height: "100vh",
      color:"#000",
      position:"fixed"
    },
    sideBarFooter:{
      marginBottom:0
    }
  };

    return (
            <ProSidebar  style={styles.sideBarHeight}>
                <SidebarContent className="pro-sidebar">
                    <Menu iconShape="square">
                        <MenuItem>
                        <Icon.Basket2  style={{color:"#000"} } size={25}/>
                        <span class="menu-item" >Dashboard</span>
                        </MenuItem>
                        <MenuItem >
                          <Icon.Layers style={{color:"#000"} } size={25}/>
                        <span class="menu-item" >Inventory</span>
                          </MenuItem>
                        <MenuItem >
                        <Icon.Bag style={{color:"#000"} } size={25}/>
                        <span class="menu-item" >Orders</span>
                          </MenuItem>
                        <MenuItem >
                          <Icon.People style={{color:"#000"} } size={25}/>
                        <span class="menu-item" > Customers</span>
                          </MenuItem>
                        <MenuItem >
                          <Icon.FileEarmarkPdf style={{color:"#000"} } size={25}/>
                          <span class="menu-item" >Reports</span>
                          </MenuItem>
                        <MenuItem>
                          <Icon.Gear style={{color:"#000"} } size={25}/>
                          <span className="menu-item">Settings</span>
                        </MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
    )
}
