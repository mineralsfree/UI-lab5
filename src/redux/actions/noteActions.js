import {host} from "../../host";

const requestNote = () => {
  return {type: 'NOTES/FETCH_NOTES'}
};
const requestNoteSuccess = (data) => {
  return {type: 'NOTES/FETCH_SUCCEEDED', data: data}
};
const requestNoteError = () => {
  return {type: 'NOTES/FETCH_FAILED'};
};
export const fetchNote = (q, src) => {
  return (dispatch) => {
    dispatch(requestNote());
    let query = q? q:'q=it&';
    let source = src? src : '';
    let link = host + query + source + 'apiKey=8a64d50f1b56426b902b32643949dfad';
    fetch(link)
      .then(res => res.json())
      .then(
        data => dispatch(requestNoteSuccess(data)),
        err => dispatch(requestNoteError())
      )
  }
};

