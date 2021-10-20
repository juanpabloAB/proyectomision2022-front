import * as React from "react";
import { login } from "../features/auth";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default (props) => {
  const dispatch = useDispatch();
  //const url = useSelector((state) => state.server.value);
  const search = window.location.search.substring(1);
  const data = JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  dispatch(login(data));
  return <div>bye</div>;
};
