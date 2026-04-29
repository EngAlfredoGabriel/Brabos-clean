<Agendamento />
function Agendamento() {

  const enviarWhatsApp = (e) => {
    e.preventDefault();

    const nome = e.target.nome.value;
    const servico = e.target.servico.value;
    const data = e.target.data.value;
    const horario = e.target.horario.value;
    const endereco = e.target.endereco.value;
const mensagem = 
`Olá! 👋
Aqui é a equipe da *Brabos Clean* 🧼

📌 *Resumo do pedido:*
• Nome: ${nome}
• Serviço: ${servico}
• Data: ${data}
• Horário: ${horario}
• Local: ${endereco}

Sua solicitacao foi recebida com sucesso.✅
Em instantes nossa equipe irá confirmar seu atendimento.`;

    const url = `https://wa.me/5561992521659?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={enviarWhatsApp}>
      <input name="nome" placeholder="Seu nome" required />

      <select name="servico">
        <option value="Sofá">Sofá</option>
        <option value="Banco Automotivo">Banco Automotivo</option>
        <option value="Colchão">Colchão</option>
        <option value="Cadeira">Cadeira</option>
        <option value="Tapete">Tapete</option>
        <option value="Outros">Outros</option>
      </select>

      <input type="date" name="data" required />
      <select name="horario" required>
       <option value="">Selecione um horário</option>
        <option>08:00</option>
        <option>09:00</option>
        <option>10:00</option>
        <option>11:00</option>
        <option>12:00</option>
        <option>13:00</option>
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
        <option>17:00</option>
        <option>18:00</option>
      </select>
      <input 
        type="text" 
        name="endereco" 
        placeholder="Seu endereço (bairro ou cidade)" 
        required 
/>
      <button type="submit">Agendar</button>
    </form>
  );
}

export default Agendamento;