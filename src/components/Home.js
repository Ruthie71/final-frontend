import Future from "./video/Future.mp4";

const Home = () => {
    return (
        <div className="vidStyle">
            <video
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%",
                    zIndex: "-1",
                }}
            >
                <source src={Future} type="video/mp4" />
            </video>
            <h1 style={{ fontSize: "60px", color: "whitesmoke" }}>
                WELCOME TO CV SOURCE
            </h1>

            <h3
                style={{
                    fontSize: "20px",
                    color: "whitesmoke",
                    padding: "10px",
                }}
            >
                A website designed to help you create a great tech cv fast,
                using proprietary AI technology.
            </h3>
        </div>
    );
};

export default Home;
