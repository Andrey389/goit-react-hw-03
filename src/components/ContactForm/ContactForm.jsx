import { Formik, Form, Field } from 'formik';

export default function ContactForm() {
  const handleSubmit = () => {};
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="">Name</label>
          <Field type="text" name="name" />
        </div>
        <div>
          <label htmlFor="">Number</label>
          <Field type="text" name="number" />
        </div>
        <button>Submit</button>
      </Form>
    </Formik>
  );
}
