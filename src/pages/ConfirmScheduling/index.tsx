import React from "react";
import { Container, Confirm, Text } from "./styles";
import SchedulingHeader from "../../components/SchedulingHeader";

const ConfirmScheduling: React.FC = () => {
    
    return(
        <Container>
            <SchedulingHeader />

            <Confirm>Anotado!</Confirm>
            <Text>Logo logo entraremos em contato com você para confirmar a data e horário do serviço.</Text>
        </Container>
    )
};

export default ConfirmScheduling;