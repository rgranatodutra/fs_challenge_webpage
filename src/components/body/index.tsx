import Main from "./main";
import Sidebar from "./sidebar";
import { StyledBody } from "./styles";

export default function Body() {
    return (
        <StyledBody>
            <Sidebar />
            <Main />
        </StyledBody>
    );
}