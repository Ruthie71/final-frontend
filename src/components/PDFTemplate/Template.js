import { useContext, useState } from "react";
import { Document, PDFViewer } from "@react-pdf/renderer";
import Resume from "./Resume";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FormikContext } from "../../context/FormikState";

const Template = () => {
    const [theme, setTheme] = useState("blue");
    const {
        user,
        firstname,
        lastname,
        address,
        contact,
        details,
        personalskills,
        personalstatement,
        photo,
        education,
        languages,
        work,
        techskills,
    } = useContext(FormikContext);

    return (
        <>
            <PDFViewer>
                <Document
                    author="Luke Skywalker"
                    keywords="awesome, resume, start wars"
                    subject="The resume of Luke Skywalker"
                    title="Resume"
                >
                    <Resume
                        size="A4"
                        theme={theme}
                        firstname={firstname}
                        lastname={lastname}
                        contact={contact}
                        photo={photo}
                    />
                </Document>
            </PDFViewer>
            <div>
                <Button variant="danger" onClick={() => setTheme("red")}>
                    R
                </Button>
                <Button variant="success" onClick={() => setTheme("green")}>
                    G
                </Button>
                <Button variant="info" onClick={() => setTheme("blue")}>
                    B
                </Button>
            </div>
        </>
    );
};

export default Template;
