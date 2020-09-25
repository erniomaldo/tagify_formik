import { Formik, Form } from 'formik';
import Tags from "@yaireo/tagify/dist/react.tagify";

const App = () => {
  const validate = val => {
    const errors = {};
    Object.keys(val).map(field => {
      if (val[field] === '') {
        errors[field] = 'Required';
      }
    })
    return errors;
  }
  return (
    <Formik
      initialValues={{
        keywords: '[{"value":"a"},{"value":"b"},{"value":"c"}]'
      }}
      validate={e => validate(e)}
    >
      {({ values, setFieldValue }) => (
        <Form style={{ width: "50%", margin: "20%" }}>
          <Tags
            value={values['keywords']}
            onChange={e => {
              setFieldValue('keywords', e.target.value)
            }}
          />
          Values: {values['keywords']}
        </Form>
      )}
    </Formik>
  );
}

export default App;