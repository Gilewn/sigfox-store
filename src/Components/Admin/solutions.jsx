import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Pagination,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  useCreateController,
  
} from "react-admin";
import dataProvider from "./Adminpanel";



const PostPagination = (props) => (
  <Pagination rowsPerPageOptions={[5, 10, 50, 100]} {...props} />
);

const SolutionTitle = ({ record }) => {
  return <span>{record ? `${record.title}` : ""}</span>;
};


export const SolutionList = (props) => (
  <List {...props} pagination={<PostPagination />}>
    <Datagrid >
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="image" />
      <EditButton />
    </Datagrid>
  </List>
);

const changehandler = (event) => {
  let test = event.target.value;
  console.log(test);
};


export const SolutionEdit = (props) => (
  <Edit  title={<SolutionTitle/>} {...props}>
    <SimpleForm >
      <TextInput disabled source="id" />
      {/* <ReferenceInput source="id" reference="solutions">
        <SelectInput optionText="title" />
      </ReferenceInput> */}
      <TextInput source="title" />
      <TextInput source="image" />
      
    </SimpleForm>
  </Edit>
);

export const SolutionCreate = (props) => (
    <Create title={<SolutionTitle/>} {...props}>
    <SimpleForm >
      <TextInput disabled source="id" />
      {/* <ReferenceInput source="id" reference="solutions">
        <SelectInput optionText="title" />
      </ReferenceInput> */}
      <TextInput source="title" />
      <TextInput source="image" />
    </SimpleForm>
  </Create>
);