import "./currency-exchange-page.scss";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { lazy, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Card from "reusable_components/card";
import Input from "reusable_components/input";
import Select from "reusable_components/select";

import CurrencyExchangeHeader from "./currency-exchange-header";
import {
    optionSelect,
    transformCurrencyExchangeData,
} from "./helpers/get-currency-info";
import { ModuleTypeData, validationSchema } from "./helpers/schema";

const Button = lazy(() => import("reusable_components/button"));
export default function CurrencyExchangePage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(validationSchema),
    });
    const [currencyOutput, setCurrencyOutput] = useState("");
    const [exchangeRate, setExchangeRate] = useState("");
    const click = async (params: ModuleTypeData) => {
        try {
            const response = await axios.get(
                `${process.env.SERVER_HOST}:${process.env.PORT}/api/fca-route/get-currency-exchange?inputcurrency=${params?.selectinput}&outputcurrency=${params?.selectoutput}`
            );
            const [value] = Object.values(response.data?.data);
            setCurrencyOutput(
                transformCurrencyExchangeData(params?.currencyinput, value)
            );
            setExchangeRate(value.toFixed(2));
        } catch (error) {
            console.log(error);
        }
    };
    const className = "ppscurrencyexchangepage";
    return (
        <main className={className}>
            <Card
                className={`${className}__card`}
                body={
                    <form onSubmit={handleSubmit(click)}>
                        <div className={`${className}__inputscontainer`}>
                            <Controller
                                name="selectinput"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        className={`${className}__select`}
                                        id={field.name}
                                        texterror={errors.selectinput?.message}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e)}
                                        label={"Currency"}
                                        options={optionSelect}
                                    />
                                )}
                            />
                            <Input
                                {...register("currencyinput")}
                                texterror={errors.currencyinput?.message}
                                noinputcircle
                                autoFocus
                                type={"number"}
                                label={"Currency input"}
                            />
                            <Controller
                                name="selectoutput"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        className={`${className}__select`}
                                        id={field.name}
                                        texterror={errors.selectoutput?.message}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e)}
                                        label={"Currency"}
                                        options={optionSelect}
                                    />
                                )}
                            />
                            <Input
                                value={currencyOutput}
                                disabled
                                texterror={errors.currencyoutput?.message}
                                label={"Currency output"}
                            />
                        </div>

                        <Button
                            className={`${className}__submitbutton`}
                            type="submit"
                            colorVariant={"darkblue"}
                        >
                            <i>Submit</i>
                        </Button>
                        {exchangeRate != "" && (
                            <h1 className={`${className}__title`}>
                                Exchange Rate: {exchangeRate}
                            </h1>
                        )}
                    </form>
                }
            ></Card>
        </main>
    );
}
