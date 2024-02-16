import * as yup from "yup";

export const validationSchema = yup.object().shape({
    currencyinput: yup
        .string()
        .min(2, "Mínimo 2 caracteres")
        .required("Este campo es requerido"),
    selectinput: yup.string().required("Este campo es requerido"),
    selectoutput: yup.string().required("Este campo es requerido"),
});

export type ModuleTypeData = yup.InferType<typeof validationSchema>;
