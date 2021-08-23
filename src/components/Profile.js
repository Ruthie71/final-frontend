import TabSytem from "./TabSystem";
import ProfileSide from "./ProfileSide";
import ContactInfo from "./ContactInfo";

const Profile = () => {
    return (
        <div>
            Profile info
            <TabSytem />
            <ContactInfo />
            <ProfileSide />
        </div>
    );
};

export default Profile;
