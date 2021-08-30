import ReactToPdf from "react-to-pdf";
import PdfTemplate from "./components/PdfTemplate";

const PdfGenerator = () => {
    return (
        <div>
            <PdfTemplate />
            <ReactToPdf>
                {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
            </ReactToPdf>
        </div>
    );
};

export default PdfGenerator;
