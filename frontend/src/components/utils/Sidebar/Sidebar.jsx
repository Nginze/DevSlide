import { SidebarStyled } from "./SidebarStyled";
import { Tabs, Tab} from '@mui/material';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Sidebar = ({ value, handleChange }) => {



    return ( 
        <>
            <SidebarStyled>
            <div className="menu">
                <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        orientation="vertical"
                    >
                    <Tab
                        icon={<SwipeUpIcon />}
                        value="swipe"
                        className="tab"
                        label="Swipe"
                        
                    />  
                    <Tab
                        icon={<AccountCircleIcon />}
                        value="profile"
                        className="tab"
                        label="Profile"
                    />
                    <Tab
                        icon={<FavoriteIcon />}
                        value="matches"
                        className="tab"
                        label="Matches"
                    />
                    <Tab
                        icon={<NotificationsIcon />}
                        value="notifications"
                        className="tab"
                        label="Notifications"
                    />
                    <Tab
                        icon={<SettingsIcon />}
                        value="settings"
                        className="tab"
                        label="Settings "
                    />
                        
                </Tabs>
            </div>
            </SidebarStyled>
        </>
     );
}
 
export default Sidebar;