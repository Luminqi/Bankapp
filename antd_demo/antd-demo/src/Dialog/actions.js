import { SHOWMODAL, HIDEMODAL, UPDATECONTENT } from './actionTypes';

const showmodal = (title, progress, content) => ({
    type: SHOWMODAL,
    visible: true,
    title: title,
    progress: progress,
    content: content
});
const hidemodal = () => ({
    type: HIDEMODAL,
    visible: false
});
const updatecontent = (content) => ({
    type: UPDATECONTENT,
    content: content
});
// const updatecontent = (content) => {
//     console.log(content);
//     return {
//         type: UPDATECONTENT,
//         content: content
//     };
// };

export { showmodal, hidemodal, updatecontent };
