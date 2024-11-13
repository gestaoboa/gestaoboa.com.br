import React, { useState, useEffect  } from "react";
import { Container } from "./styles";
import { Helmet } from "react-helmet-async";
import SchedulingHeader from "../../components/SchedulingHeader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import { useNavigate } from "react-router-dom";

interface Service {
  id: number;
  name: string;
}


const Scheduling: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:8080/enterprises/services/1');
        if (!response.ok) {
          throw new Error('Erro ao buscar os serviços');
        }
        const data = await response.json();
        setServices(data); 
      } catch (error) {
        console.error('Erro ao buscar os serviços:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Agendamentos</title>
        <meta
          name="description"
          content="Você pode agendar seus horários com o Gestão Boa."
        />
      </Helmet>

      <SchedulingHeader />

      <div className="scheduling-form">
        <h2>Agendar um horário</h2>
        <input
          type="text"
          placeholder="Informe o seu nome completo*"
          className="form-input"
        />
        <input
          type="text"
          placeholder="Telefone/WhatsApp*"
          className="form-input"
        />

        <input
          type="text"
          placeholder="Email"
          className="form-input"
        />

        <h2>Serviços</h2>

        <select className="form-input">
          <option>Qual serviço você deseja?*</option>
          {services.map(service => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>

        <textarea name="" id=""  rows={7}>Fale um pouco mais sobre o que você deseja</textarea>

        <select className="form-input">
          <option>Qual a forma de pagamento?*</option>
          <option value="cash">Dinheiro Físico</option>
          <option value="pix">Pix</option>
          <option value="debit">Cartão de Débito</option>
          <option value="credit">Cartão de Crédito</option>
        </select>

        <label className="form-label">Dia e Hora do Agendamento</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
          placeholderText="Escolha uma data"
          dateFormat="dd/MM/yyyy"
          className="form-input"
          minDate={new Date()}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          timeCaption="Hora"
          placeholderText="Selecione a data e a hora"
        />

        <button className="confirm-button" onClick={() => navigate('/confirm')}>Confirmar Agendamento</button>
      </div>
    </Container>
  );
};

export default Scheduling;
