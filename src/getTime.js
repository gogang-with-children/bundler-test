import moment from "moment";

const getCurrentTime = () => moment().format("YYYY년 MM시 DD일 hh시 mm분 ss초");
export default getCurrentTime;
