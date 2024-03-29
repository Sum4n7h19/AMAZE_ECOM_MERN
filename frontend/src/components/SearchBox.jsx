import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import {FaSearch} from 'react-icons/fa'
import React from "react";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
        setKeyword('')
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex" >
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        className="mr-sm-2 ml-sm-5"
        placeholder="Search Products..."
      ></Form.Control>
      <Button type="submit" variant="outline-light" className="p-2 mx-2" >
        <FaSearch/>
      </Button>
    </Form>
  );
};

export default SearchBox;
