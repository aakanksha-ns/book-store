import { connect } from "react-redux";
import ChapterApp from "../components/ChapterApp";


const mapStateToChapterApp = state => {
    return {
        currentStep: state.currentStep
    };
};

const ChapterStore = connect(
    mapStateToChapterApp,
    null
)(ChapterApp);

export default ChapterStore;