import Future from "./video/Future.mp4";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            <h1
                style={{
                    fontSize: "80px",
                    color: "whitesmoke",
                    marginTop: "50px",
                }}
            >
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
            <h3
                style={{
                    marginTop: "100px",
                    fontSize: "30px",
                    color: "green",
                    padding: "10px",
                }}
            >
                Follow the three simple steps below and you will be on the road
                to creating the CV to help you land your dream job.
            </h3>
            <Row
                style={{
                    fontSize: "20px",
                    marginTop: "50px",
                    padding: "10px",
                }}
            >
                <Col>
                    <Card
                        style={{
                            fontSize: "20px",
                            width: "30rem",
                            color: "blue",
                        }}
                    >
                        <Card.Body>
                            <Card.Title>STEP ONE</Card.Title>
                            <Card.Text>
                                Sign up as a new user or sign in to create a
                                profile or amend an existing one.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            fontSize: "20px",
                            width: "30rem",
                            color: "green",
                        }}
                    >
                        <Card.Body>
                            <Card.Title>STEP TWO</Card.Title>
                            <Card.Text>
                                Follow the simple steps to add information to
                                your profile by completing the contact, profile
                                info, education and work experience sections.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            fontSize: "20px",
                            width: "30rem",
                            color: "grey",
                        }}
                    >
                        <Card.Body>
                            <Card.Title>STEP THREE</Card.Title>
                            <Card.Text>
                                All your information will be displayed within
                                your chosen template theme. You can then choose
                                to download a local copy or if you prefer send
                                your new CV straight to print.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
