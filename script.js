
function copyPix(){

const pix=document.getElementById("pixKey").innerText;

navigator.clipboard.writeText(pix);

alert("Chave Pix copiada!");

}


function salvarCliente(){

const nome=document.getElementById("nome").value;

const signo=document.getElementById("signo").value;

const nascimento=document.getElementById("nascimento").value;

const consulta=document.getElementById("consulta").value;

const clientes=JSON.parse(localStorage.getItem("clientes")||"[]");

clientes.push({nome,signo,nascimento,consulta});

localStorage.setItem("clientes",JSON.stringify(clientes));

mostrarClientes();

}


function mostrarClientes(){

const lista=document.getElementById("listaClientes");

if(!lista)return;

const clientes=JSON.parse(localStorage.getItem("clientes")||"[]");

lista.innerHTML="";

clientes.forEach(c=>{

lista.innerHTML+=`
<div class="cliente-item">
<b>${c.nome}</b><br>
${c.signo}<br>
${c.consulta}
</div>`;

});

}

mostrarClientes();

function marcarConsulta(){

const data=document.getElementById("dataConsulta").value;
const hora=document.getElementById("horaConsulta").value;

if(!data){

alert("Escolha uma data.");

return;

}

const agendamentos=JSON.parse(localStorage.getItem("agendamentos")||"[]");

agendamentos.push({

data,
hora

});

localStorage.setItem("agendamentos",JSON.stringify(agendamentos));

document.getElementById("confirmacao").innerHTML=`
<div class="confirm-box">
✨ Consulta agendada para
<strong>${data}</strong>
às
<strong>${hora}</strong>.
</div>
`;

}
