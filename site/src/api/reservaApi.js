import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function novaClick(nome, tel, data, hora, pessoas) {

    alert(nome);

    const resposta = await api.post('/reserva/nova', {
        nome : nome,
        tel : tel,
        data : data, 
        hora : hora,
        pessoas : pessoas
    })
    return resposta.data;
}

export async function listaPedentes() {
    const resposta = await api.get('/reserva/pendente');
    return resposta.data;
}