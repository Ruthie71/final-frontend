import Future from "./video/Future.mp4";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import step1 from './PNG/undraw_authentication_fsn5.png'
import step2 from './PNG/undraw_Personal_site_re_c4bp.png'
import step3 from './PNG/undraw_At_work_re_qotl.png'



const Home = () => {
    return (
        // <div className="vidStyle">
        //     <video
        //         autoPlay
        //         loop
        //         muted
        //         style={{
        //             position: "absolute",
        //             width: "100%",
        //             left: "50%",
        //             top: "50%",
        //             height: "100%",
        //             objectFit: "cover",
        //             transform: "translate(-50%, -50%",
        //             zIndex: "-1",
        //         }}
        //     >
        //         <source src={Future} type="video/mp4" />
        //     </video>
        //     <h1
        //         style={{
        //             fontSize: "80px",
        //             color: "whitesmoke",
        //             marginTop: "50px",
        //         }}
        //     >
        //         WELCOME TO CV SOURCE
        //     </h1>

        //     <h3
        //         style={{
        //             fontSize: "20px",
        //             color: "whitesmoke",
        //             padding: "10px",
        //         }}
        //     >
        //         A website designed to help you create a great tech cv fast,
        //         using proprietary AI technology.
        //     </h3>
        //     <h3
        //         style={{
        //             marginTop: "100px",
        //             fontSize: "30px",
        //             color: "green",
        //             padding: "10px",
        //         }}
        //     >
        //         Follow the three simple steps below and you will be on the road
        //         to creating the CV to help you land your dream job.
        //     </h3>
            // <Row
            //     style={{
            //         fontSize: "20px",
            //         marginTop: "50px",
            //         padding: "10px",
            //     }}
            // >
            //     <Col>
            //         <Card
            //             style={{
            //                 fontSize: "20px",
            //                 width: "30rem",
            //                 color: "blue",
            //             }}
            //         >
            //             <Card.Body>
            //                 <Card.Title>STEP ONE</Card.Title>
            //                 <Card.Text>
            //                     Sign up as a new user or sign in to create a
            //                     profile or amend an existing one.
            //                 </Card.Text>
            //             </Card.Body>
            //         </Card>
            //     </Col>
            //     <Col>
            //         <Card
            //             style={{
            //                 fontSize: "20px",
            //                 width: "30rem",
            //                 color: "green",
            //             }}
            //         >
            //             <Card.Body>
            //                 <Card.Title>STEP TWO</Card.Title>
            //                 <Card.Text>
            //                     Follow the simple steps to add information to
            //                     your profile by completing the contact, profile
            //                     info, education and work experience sections.
            //                 </Card.Text>
            //             </Card.Body>
            //         </Card>
            //     </Col>
            //     <Col>
            //         <Card
            //             style={{
            //                 fontSize: "20px",
            //                 width: "30rem",
            //                 color: "grey",
            //             }}
            //         >
            //             <Card.Body>
            //                 <Card.Title>STEP THREE</Card.Title>
            //                 <Card.Text>
            //                     All your information will be displayed within
            //                     your chosen template theme. You can then choose
            //                     to download a local copy or if you prefer send
            //                     your new CV straight to print.
            //                 </Card.Text>
            //             </Card.Body>
            //         </Card>
            //     </Col>
            // </Row>
            <Container>
            <Row className="d-flex flex-column justify-content-between align-items-center mt-3 mb-3">
            <Card.Text className="text-center mt-5 mb-5 welcome">
                WELCOME TO CV SOURCE
            </Card.Text>
            <Card.Text className="text-center">
                A website designed to help you create a great tech cv fast,
                using proprietary AI technology.
            </Card.Text>
            <Card.Text className="text-center mb-5">
                Follow the three simple steps below and you will be on the road
                to creating the CV to help you land your dream job.
            </Card.Text>

            </Row>
  <Row className="stepper">
    <Col xs={6} md={4} className="d-flex flex-column justify-content-between align-items-center mt-3 mb-3">
    <Card.Title className="number">1</Card.Title>
           
      <Image src={step1} className="stepimages" rounded />
      <Card.Text style={{maxWidth: "300px"}} className="text-center">
                  Sign up as a new user or sign in to create a
               profile or amend an existing one.
    </Card.Text>
    </Col>
    <Col xs={6} md={4} className="d-flex flex-column justify-content-between align-items-center mt-3 mb-3">
    <Card.Title className="number">2</Card.Title>
      <Image src={step2} className="stepimages" rounded />
      <Card.Text style={{maxWidth: "300px"}} className="text-center">
       Follow the simple steps to add information to
          your profile by completing the contact, profile
               info, education and work experience sections.
           </Card.Text>
    </Col>
    <Col xs={6} md={4} className="d-flex flex-column justify-content-between align-items-center mt-3 mb-3">
    <Card.Title className="number">3</Card.Title>
      <Image src={step3} className="stepimages" rounded />
      <Card.Text style={{maxWidth: "300px"}} className="text-center">
                 All your information will be displayed within
                  your chosen template theme. You can then choose
                to download a local copy or if you prefer send
              your new CV straight to print.
    </Card.Text>
    </Col>
  </Row>
</Container>
        //  </div>
    );
};

export default Home;
