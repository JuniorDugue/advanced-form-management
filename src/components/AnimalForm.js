import React from 'react'
import {withFormik, Form, Field} from "formik"; //import formik
import * as yup from "yup";


const AnimalForm = (errors, touched) => {
  // console.log(props)
  return (
    <Form>
      {touched.species && errors.species && <p className="error">{errors.species}</p>}
      <Field type="text" name="species" placeholder="Species" />

      {touched.age && errors.age && <p className="error">{errors.age}</p>}
      <Field type="number" name="age" placeholder="Age" />

      {touched.type && errors.type && <p className="error">{errors.type}</p>}
      <Field type="text" name="type" placeholder="Type" />

      {errors.diet && <p className="error">{errors.diet}</p>}
      <Field component="select" name="diet"> 
        <option value="" disabled>Select Diet:</option>
        <option value="carnivore">Carnivore</option>
        <option value="herbivore">Herbivore</option>
        <option value="omnivore">Omnivore</option>
      </Field>

      <label>
        <Field type="checkbox" name="vaccinations"/>
          <span>Vaccinations</span>
      </label>

      <Field component="textarea" name="notes" placeholder="Notes" />
      <button type="submit">Submit</button>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues: (values) => {
    return{
      species: values.species || "",
      age: values.age || "",
      type: values.type || "",
      // species: currentValuesFromOurForm.species || "",
      // age: currentValuesFromOurForm.age || "",
      diet: values.diet || "",
      vaccinations: values.vaccinations || false,
      notes: values.notes || "",
    }
  },
  validationSchema: yup.object().shape({
    species: yup.string().required(),
    age: yup.number().required().positive().integer().required,
    diet: yup.string().required(),
    vaccinations: yup.boolean().required()
  }),
  handleSubmit: (values) => {
    console.log(values)
  }
})(AnimalForm)
