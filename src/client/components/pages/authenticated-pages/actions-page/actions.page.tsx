import "./actions-page.scss";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { lazy, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Card from "reusable_components/card";
import Input from "reusable_components/input";
import Select from "reusable_components/select";
import { useStore } from "zustand";

import { storeAuth } from "../../../../config/auth/store/auth-store";
import { ModuleTypeData, validationSchema } from "./helpers/schema";

const Button = lazy(() => import("reusable_components/button"));

export default function ActionsPage() {
    const { authData, traxCredentials } = useStore(storeAuth);

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(validationSchema),
    });

    const { t } = useTranslation();

    useEffect(() => {
        axios.get(
            `${process.env.SERVER_HOST}:${process.env.PORT}/api/test-route/get-currency-info?currency=us&customerId=235342`
        );
    }, [authData, traxCredentials]);

    const click = (params: ModuleTypeData) => {
        // console.log(params.input1, params.input2);
        params;
    };

    const className = "ppsindexpage";

    return (
        <main className={className}>
            <Card
                className={`${className}__card`}
                body={
                    <form onSubmit={handleSubmit(click)}>
                        <div className={`${className}__inputscontainer`}>
                            <Input
                                {...register("input1")}
                                texterror={errors.input1?.message}
                                noinputcircle
                                label={"Input 1"}
                            />

                            <Input
                                {...register("input2")}
                                texterror={errors.input2?.message}
                                noinputcircle
                                label={"Input 2"}
                            />
                            <Input
                                {...register("input2")}
                                texterror={errors.input2?.message}
                                noinputcircle
                                label={"Input 2"}
                            />
                        </div>
                        <Button colorVariant={"darkblue"}>
                            {t("unauthenticated:home:buttonsubmit")}
                        </Button>
                        <Link to={`other-actions-page`}>Test page</Link>
                    </form>
                }
            ></Card>
        </main>
    );
}
