import { Link } from "react-router-dom";

export default function OtherPageForHome() {
    const categories = [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
    ];
    return (
        <main>
            Other page for home no auth
            {categories.map((value) => (
                <Link to={value}>
                    <br /> {value}
                </Link>
            ))}
        </main>
    );
}
