import {
    Edit,
    NumberInput,
    ReferenceInput,
    required,
    SimpleForm,
    TextInput,
} from "react-admin";

export const QuizEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <NumberInput source="id" validate={[required()]} label="id" />

                <TextInput
                    source="title"
                    validate={[required()]}
                    label="Title"
                />

                <TextInput
                    source="description"
                    validate={[required()]}
                    label="description"
                />

                <ReferenceInput source="categoryId" reference="categories" />
                <NumberInput
                    source="order"
                    validate={[required()]}
                    label="order"
                />
            </SimpleForm>
        </Edit>
    );
};
