import React from 'react';
import { List, Datagrid, TextField, Pagination,EditButton,Edit,SimpleForm,ReferenceInput,SelectInput,TextInput } from 'react-admin';

const PostPagination = props => <Pagination rowsPerPageOptions={[5, 10, 50, 100]} {...props} />;


export const SolutionList = props => (
    <List {...props}  pagination={<PostPagination/>}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="image" />
            <EditButton />
       
        </Datagrid>
    </List>
);


export const SolutionEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            
            <ReferenceInput source="id" reference="solutions">
                <SelectInput optionText="title" />
            </ReferenceInput>
           
            <TextInput source="title" />
            <TextInput source="image" />
           
            
        </SimpleForm>
    </Edit>
);


