import { useParams } from "react-router-dom";

export default function OtherPageForOtherHomePage() {
    const { category } = useParams();

    return <main>Este es: {category}</main>;
}
