import { object, string, ref } from "yup";

const validations = object({
  email: string()
    .email("Geçerli bir email adresi girin.")
    .required("Bu alanın doldurulması zorunludur."),
  password: string()
    .min(5, "Lütfen en az 5 karakter giriniz.")
    .required("Bu alanın doldurulması zorunludur."),
  passwordConfirm: string()
    .oneOf([ref("password")], "Girdiğiniz paralolar eşleşmiyor.")
    .required("Bu alanın doldurulması zorunludur."),
});

export default validations;
