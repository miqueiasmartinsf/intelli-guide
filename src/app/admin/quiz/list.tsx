import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const QuizList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="description" />
                <ReferenceField source="categoryId" reference="categories" />
                <TextField source="order" />
            </Datagrid>
        </List>
    );
};
