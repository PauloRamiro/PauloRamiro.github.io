function Calcular_Somatorio_Das_Cargas()
{
    var Tamanho_Bastao = parseFloat(document.getElementById("T_Barra").value);
    var Quantidade_Carga = parseFloat(document.getElementById("V_Carga").value);
    var Quantidade_Particulas = parseInt(document.getElementById("Q_Carga").value);
    
    var Raio = 1;
    var Resultado = 0;
    var Const_Coulomb = 8990000000;
    var Calculo_Campo_Eletrico_da_Particula;
    var Carga_Por_Particula = Quantidade_Carga/Quantidade_Particulas;
    var Dist_Particulas_Bastão = Tamanho_Bastao/(Quantidade_Particulas+1);


    for(i=0; Quantidade_Particulas>i; i++)
    {
        Raio = Raio+Dist_Particulas_Bastão;
        Calculo_Campo_Eletrico_da_Particula = (Const_Coulomb*Carga_Por_Particula)/(Raio*Raio);
        Resultado = Resultado + Calculo_Campo_Eletrico_da_Particula;
    }

    alert(Resultado+" N/C");
}

function Calcular_Integral()
{
    var Tamanho_Bastao = parseFloat(document.getElementById("T_Barra").value);
    var Quantidade_Carga = parseFloat(document.getElementById("V_Carga").value);

    var Resultado = 0;
    var Const_Coulomb = 8990000000;
}

//_________________________________________OUTRAS FUNÇÔES________________________________________________
function Resolucao_a()
{
    var Quantidade_Carga = 0.000016;
    var Quantidade_Particulas = 1;
    
    var Resultado = 0;
    var Const_Coulomb = 8990000000;
    var Calculo_Campo_Eletrico_da_Particula;
    var Dist_Particulas_Bastão = [2];
    var Carga_Por_Particula = Quantidade_Carga/Quantidade_Particulas;

    for(i=0; Quantidade_Particulas>i; i++)
    {
        
        Calculo_Campo_Eletrico_da_Particula = (Const_Coulomb*Carga_Por_Particula)/(Dist_Particulas_Bastão[i]*Dist_Particulas_Bastão[i]);
        Resultado = Resultado + Calculo_Campo_Eletrico_da_Particula;
    }

    alert(Resultado+" N/C");
}

function Resolucao_b()
{
    var Quantidade_Carga = 0.000016;
    var Quantidade_Particulas = 2;
    
    var Resultado = 0;
    var Const_Coulomb = 8990000000;
    var Calculo_Campo_Eletrico_da_Particula;
    var Dist_Particulas_Bastão = [ 1.5, 2.5];
    var Carga_Por_Particula = Quantidade_Carga/Quantidade_Particulas;

    for(i=0; Quantidade_Particulas>i; i++)
    {
        Calculo_Campo_Eletrico_da_Particula = (Const_Coulomb*Carga_Por_Particula)/(Dist_Particulas_Bastão[i]*Dist_Particulas_Bastão[i]);
        Resultado = Resultado + Calculo_Campo_Eletrico_da_Particula;
    }

    alert(Resultado+" N/C");
}

function Resolucao_c()
{
    var Quantidade_Carga = 0.000016;
    var Quantidade_Particulas = 4;
    
    var Resultado = 0;
    var Const_Coulomb = 8990000000;
    var Calculo_Campo_Eletrico_da_Particula;
    var Dist_Particulas_Bastão = [1.25, 1.75, 2.25, 2.75];
    var Carga_Por_Particula = Quantidade_Carga/Quantidade_Particulas;

    for(i=0; Quantidade_Particulas>i; i++)
    {
        Calculo_Campo_Eletrico_da_Particula = (Const_Coulomb*Carga_Por_Particula)/(Dist_Particulas_Bastão[i]*Dist_Particulas_Bastão[i]);
        Resultado = Resultado + Calculo_Campo_Eletrico_da_Particula;
    }

    alert(Resultado+" N/C");
}
