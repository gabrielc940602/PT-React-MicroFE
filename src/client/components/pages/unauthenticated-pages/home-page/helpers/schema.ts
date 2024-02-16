import * as yup from "yup";

export const validationSchema = yup.object().shape({
    input1: yup
        .string()
        .max(10, "Maximo 10 caracteres")
        .required("Este campo es requerido"),
    input2: yup
        .string()
        .max(3, "Maximo 3 caracteres")
        .required("Este campo es requerido"),
});

export type ModuleTypeData = yup.InferType<typeof validationSchema>;
