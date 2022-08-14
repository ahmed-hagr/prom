import * as Yup from "yup";

export default Yup.object({
  title: Yup.string().required("Please enter a Title for your card"),
  description: Yup.string().required(
    "Please enter a description for your card"
  ),
});
