import styled from "styled-components";
import { WomanIcon } from "./WomanIcon"

export const Header = () => {

    return (
        <Container>
            <Icon>
                <WomanIcon />
            </Icon>
            <P> UK Bank Holidays</P>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    min-width: 100%;
`;

const Icon = styled.div`
   position: absolute;
   border-radius: 50%;
   background: rgb(238,174,202);
   background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
   width: 40rem;
   height: 40rem;
   z-index: 1;

`;

const P = styled.h1`
    font-size: 2rem;
    color: #000000;
    position: absolute;
    padding-left: 30rem;
    padding-top: 20rem;
    z-index: 2;
   
`;