import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from 'react-admin'

export const QuizCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Title" />

        <TextInput
          source="description"
          validate={[required()]}
          label="description"
        />

        <ReferenceInput source="categoryId" reference="categories" />

        <NumberInput source="order" validate={[required()]} label="order" />
      </SimpleForm>
    </Create>
  )
}
