import { TiMinus } from "react-icons/ti";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a>მთავარი</a>
                </li>
                <li>
                    <a>მაღაზია</a>
                </li>
                <li>
                    <a>გვერდი</a>
                    <ul>
                        <li>
                            <a>
                                <p>
                                    <TiMinus />
                                </p>
                                ჩვენ შესახებ
                            </a>
                        </li>
                        <li>
                            <a>
                                <p>
                                    <TiMinus />
                                </p>
                                პოლიტიკა
                            </a>
                        </li>
                        <li>
                            <a>
                                <p>
                                    <TiMinus />
                                </p>
                                ხშირად დასმული კითხვები
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a>კონტაქტი</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
