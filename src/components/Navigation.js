import CreateProfile from "./CreateProfile";
import LogIn from "./LogIn";
import AccountSettings from "./AccountSettings";
import Home from "./Home";
import NotFound from "./NotFound";
import ProfileInfo from "./Profile";

const Navigation = () => {
    return (
        <div>
            Navigation
            <CreateProfile />
            <LogIn />
            <AccountSettings />
            <Home />
            <NotFound />
            <ProfileInfo />
        </div>
    );
};

export default Navigation;
