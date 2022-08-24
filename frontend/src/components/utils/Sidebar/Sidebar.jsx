import { SidebarStyled } from "./SidebarStyled";
import { Tabs, Tab} from '@mui/material';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';


const Sidebar = ({ value, handleChange, user }) => {



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
                    {user.isRecruiter && <Tab
                        icon={<SwipeUpIcon />}
                        value="swipe"
                        className="tab"
                        label="Swipe"
                        
                    />  }
                    <Tab
                        icon={<AccountCircleIcon />}
                        value="profile"
                        className="tab"
                        label="Profile"
                    />
                    {user.isRecruiter && <Tab
                        icon={<FavoriteIcon />}
                        value="matches"
                        className="tab"
                        label="Matches"
                    />}
                    <Tab
                        icon={<NotificationsIcon />}
                        value="notifications"
                        className="tab"
                        label="Notifications"
                    />
                    <Tab
                        icon={<ModeCommentIcon />}
                        value="chats"
                        className="tab"
                        label="Chats"
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