import { yupToFormErrors } from "formik";
import * as Yup from "yup";

const validations = Yup.object().shape({
    todo: Yup.string().required("can't be empty"),
});
export default validations;
