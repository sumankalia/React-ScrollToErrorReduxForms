import React from "react";
import { email, required } from "redux-form-validators";
import { Field, Form, reduxForm } from "redux-form";
import { connect } from "react-redux";
import "./ScrollForm.css";
import { scrollIntoViewHelper } from "../helpers/scrollIntoViewHelper";

const genderOptions = [
  {
    text: "Male",
    value: "Male",
  },
  {
    text: "Female",
    value: "Female",
  },
  {
    text: "Other",
    value: "Other",
  },
];

const TextField = (props) => {
  const { meta = {} } = props;
  const inputProps = {
    type: props.type || "text",
    className: props.className,
    name: props.input.name,
    id: props.input.name,
    readOnly: props.readOnly,
    autoFocus: props.autoFocus,
    autoComplete: props.autoComplete,
    placeholder: props.placeholder,
    maxLength: props.maxLength,
    value: meta.uncontrolled ? undefined : props.input.value,
    defaultValue: meta.uncontrolled ? props.defaultValue : undefined,
    onChange: props.input.onChange,
    onKeyUp: props.onKeyUp,
    onBlur: props.onBlur,
    step: props.step || "",
    min: props.min || "",
  };

  return (
    <React.Fragment>
      <div
        name={`position-${props.input.name}`}
        className={`position-${props.input.name}`}
      >
        <input {...inputProps} {...props} onBlur={props.onBlurHandler} />
        {meta.touched && meta.error ? (
          <div style={{ color: "red" }}>{`This field  ${meta.error}`}</div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

const Radio = (props) => {
  return (
    <div className="col">
      <React.Fragment>
        <div>
          <input {...props.input} id={props.label} type={"radio"} />
          <label className="ml-2" htmlFor={props.label}>
            {props.label}
          </label>
        </div>
      </React.Fragment>
    </div>
  );
};

const ScrollForm = ({ handleSubmit, form }) => {
  return (
    <div class="card" style={{ width: "1100px", margin: "40px auto" }}>
      <div class="card-body">
        <Form onSubmit={handleSubmit}>
          <h3 style={{ textAlign: "center" }}>Scroll Form</h3>
          <br />
          <div className="form_field">
            <label class="form-label"> First Name</label>
            <Field
              className="form-control"
              name="firstName"
              component={TextField}
              type="text"
              validate={[required()]}
            />
          </div>
          <div className="form_field">
            <label class="form-label"> Last Name</label>
            <Field
              className="form-control"
              name="lastName"
              component={TextField}
              type="text"
              validate={[required()]}
            />
          </div>
          <div className="form_field">
            <label className="title">Gender</label>
            <div className="field-input form-group row">
              {genderOptions.map((element) => {
                return (
                  <Field
                    name="gender"
                    component={Radio}
                    type="radio"
                    value={element.value}
                    validate={[required()]}
                    label={element.text}
                    className={`radio-inline`}
                  />
                );
              })}
              <p style={{ fontSize: "12px", color: "red " }}>
                {form &&
                  form.ScrollForm &&
                  form.ScrollForm.syncErrors &&
                  form.ScrollForm.syncErrors.gender &&
                  `This field is ${form.ScrollForm.syncErrors.gender}`}
              </p>
            </div>
          </div>
          <div className="form_field">
            <label class="form-label"> Email</label>
            <Field
              className="form-control"
              name="email"
              component={TextField}
              type="email"
              validate={[required(), email()]}
            />
          </div>
          <div className="form_field">
            <label class="form-label"> Password</label>
            <Field
              className="form-control"
              name="password"
              component={TextField}
              type="password"
              validate={[required()]}
            />
          </div>
          <div className="form_field">
            <label class="form-label"> Additional Field 1</label>
            <Field
              className="form-control"
              name="add_field_1"
              component={TextField}
              type="text"
              validate={[required()]}
            />
          </div>
          <div className="form_field">
            <label class="form-label"> Additional Field 2</label>
            <Field
              className="form-control"
              name="add_field_2"
              component={TextField}
              type="text"
              validate={[required()]}
            />
          </div>
          <div className="form_field">
            <label class="form-label"> Additional Field 3</label>
            <Field
              className="form-control"
              name="add_field_3"
              component={TextField}
              type="text"
              validate={[required()]}
            />
          </div>
          <div className="form_field">
            <label class="form-label"> Additional Field 4</label>
            <Field
              className="form-control"
              name="add_field_4"
              component={TextField}
              type="text"
              validate={[required()]}
            />
          </div>
          <div className="form_field">
            <label class="form-label"> Additional Field 5</label>
            <Field
              className="form-control"
              name="add_field_5"
              component={TextField}
              type="text"
              validate={[required()]}
            />
          </div>
          <div className="form_field">
            <label class="form-label"> Additional Field 6</label>
            <Field
              className="form-control"
              name="add_field_6"
              component={TextField}
              type="text"
              validate={[required()]}
            />
          </div>
          <div className="form_field">
            <label class="form-label"> Additional Field 7</label>
            <Field
              className="form-control"
              name="add_field_7"
              component={TextField}
              type="text"
              validate={[required()]}
            />
          </div>
          <div className="form_field">
            <label class="form-label"> Additional Field 8</label>
            <Field
              className="form-control"
              name="add_field_8"
              component={TextField}
              type="text"
              validate={[required()]}
            />
          </div>
          <div className="form_field">
            <label class="form-label"> Additional Field 9</label>
            <Field
              className="form-control"
              name="add_field_9"
              component={TextField}
              type="text"
              validate={[required()]}
            />
          </div>
          <div className="form_field">
            <label class="form-label"> Additional Field 10</label>
            <Field
              className="form-control"
              name="add_field_10"
              component={TextField}
              type="text"
              validate={[required()]}
            />
          </div>

          <div>
            <button className="btn btn-primary mt-2">Submit</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  form: state.form,
});

export default reduxForm({
  form: "ScrollForm",
  enableReinitialize: true,
  onSubmitFail: (errors) => scrollIntoViewHelper(errors),
})(connect(mapStateToProps)(ScrollForm));
