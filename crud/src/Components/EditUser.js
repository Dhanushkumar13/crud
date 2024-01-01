import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditUser = (props) => {

  const { editUser, users } = useContext(GlobalContext);
  
  const navigate = useNavigate();
  const { id: currentUserId } = useParams();

  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  })

  console.log(currentUserId)

  useEffect(() => {
    const userId = currentUserId;
    const foundUser = users.find(user => user.id === userId);

    if (foundUser) {
      setSelectedUser(foundUser);
    } else {
      // Handle the case when user is not found, e.g., redirect to an error page.
      navigate("/not-found");
    }
  }, [currentUserId, users, navigate]);

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    navigate("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={selectedUser.name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link style={{marginLeft:"10px"}}  to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
