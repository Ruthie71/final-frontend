import PhotoUploader from "./PhotoUploader";
import PdfGenerator from "./PdfGenerator";

const ProfileSide = () => {
    return (
        <div>
            Profile side inc photo uploader and pdf expoerter
            <PhotoUploader />
            <PdfGenerator />
        </div>
    );
};

export default ProfileSide;
