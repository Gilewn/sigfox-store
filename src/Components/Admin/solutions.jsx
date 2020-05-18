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
} from "react-admin";
import solutionUpdate from "./crudProvider";

const PostPagination = (props) => (
  <Pagination rowsPerPageOptions={[5, 10, 50, 100]} {...props} />
);

const SolutionTitle = ({ record }) => {
  return <span>{record ? `${record.title}` : ""}</span>;
};

export const SolutionList = (props) => (
  <List {...props} pagination={<PostPagination />}>
    <Datagrid rowClick="edit">
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
  <Edit title={<SolutionTitle />} {...props}>
    <SimpleForm onClick={(id) => solutionUpdate(props.id)}>
      <TextInput disabled source="id" />
      {/* <ReferenceInput source="id" reference="solutions">
        <SelectInput optionText="title" />
      </ReferenceInput> */}
      <TextInput onChange={changehandler} source="title" />
      <TextInput source="image" />
    </SimpleForm>
  </Edit>
);
