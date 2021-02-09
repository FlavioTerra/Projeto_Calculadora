var aux = '';

function calcular (tipo, valor){
    if(tipo === 'acao')
    {
        if(valor === 'c')
        {
            document.getElementById('resultado').value = '';
            aux = '';
        }
        else if(valor === '=')
        {       
            if(aux != '')
            {
                alert('Erro: Expressão inválida');
            }
            else
            {
                if(document.getElementById('resultado').value != '')
                {
                    var expressao = eval(document.getElementById('resultado').value);
                    document.getElementById('resultado').value = expressao;
                }
            }
        }
        else
        {
            if(aux != '')
                alert('Erro: Expressão inválida');
            else
            {
                document.getElementById('resultado').value += valor;
                aux = document.getElementById('resultado').value;
            }
        }
    }
    else{
       document.getElementById('resultado').value += valor;
       aux = '';
    }
}