import moment from "moment";

const getCurrentTime = () => moment().format("YYYY-MM-DD-hh-mm-ss");
export default getCurrentTime;
