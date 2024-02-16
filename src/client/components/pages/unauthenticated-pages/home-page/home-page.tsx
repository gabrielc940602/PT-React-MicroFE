import "./home-page.scss";

import { yupResolver } from "@hookform/resolvers/yup";
import { lazy, Suspense } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "reusable_components/button";
// import Card from "reusable_components/card";
import Input from "reusable_components/input";

// import Card from "reusable_components/card";
import { ModuleTypeData, validationSchema } from "./helpers/schema";

// const Button = lazy(() => import("reusable_components/button"));
const Card = lazy(() => import("reusable_components/card"));
// const Input = lazy(() => import("reusable_components/input"));

// const Select = lazy(() => import("reusable_components/select"));

export default function IndexPage() {
    // const [formData, setFormData] = useState<{ [key: string]: string }>({});

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

    const click = (params: ModuleTypeData) => {
        // console.log(params.input1, params.input2);
        params;
    };

    const className = "ppsindexpage";

    return (
        <main className={className}>
            <Suspense fallback={<div>loading</div>}>
                <Card
                    className={`${className}__card`}
                    body={
                        <form onSubmit={handleSubmit(click)}>
                            <div>
                                <div
                                    className={`${className}__inputscontainer`}
                                >
                                    <Input
                                        {...register("input1")}
                                        texterror={errors.input1?.message}
                                        noinputcircle
                                        label={t(
                                            "unauthenticated:home:firstfield"
                                        )}
                                    />

                                    <Input
                                        {...register("input2")}
                                        texterror={errors.input2?.message}
                                        noinputcircle
                                        label={t(
                                            "unauthenticated:home:secondfield"
                                        )}
                                    />
                                </div>

                                <Button colorVariant={"darkblue"}>
                                    {t("unauthenticated:home:buttonsubmit")}
                                </Button>
                            </div>
                            <Link to={`other-page-for-home`}>Test page</Link>
                        </form>
                    }
                ></Card>
            </Suspense>
        </main>
    );
}
