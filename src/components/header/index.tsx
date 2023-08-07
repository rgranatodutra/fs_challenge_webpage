import StyledHeader from "./styles";
import { FaDesktop } from "react-icons/fa";

export default function Header() {
    return (
        <StyledHeader>
            <h1>
                <FaDesktop />
                Kenzie FullStack Challenge
            </h1>
        </StyledHeader>
    );
}