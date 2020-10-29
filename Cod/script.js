function Calcular_Somatorio_Das_Cargas()
{
    var Distancia_Da_Barra = parseFloat(document.getElementById("D_Campo").value);
    var Tamanho_Bastao = parseFloat(document.getElementById("T_Barra").value);
    var Quantidade_Carga = parseFloat(document.getElementById("V_Carga").value);
    var Quantidade_Particulas = parseInt(document.getElementById("Q_Carga").value);
    var Medida_Coulomb = parseInt(document.getElementById("M_Coulomb").value);

    if (Medida_Coulomb == 1)
    {
        Quantidade_Carga = Quantidade_Carga*0.000000001
    }
    if (Medida_Coulomb == 2)
    {
        Quantidade_Carga = Quantidade_Carga*0.000001
    }
    
    var Raio = Distancia_Da_Barra;
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
    var Distancia_Da_Barra = parseFloat(document.getElementById("D_Campo_i").value);
    var Tamanho_Bastao = parseFloat(document.getElementById("T_Barra_i").value);
    var Quantidade_Carga = parseFloat(document.getElementById("V_Carga_i").value);
    var Medida_Coulomb = parseInt(document.getElementById("M_Coulomb_i").value);

    if (Medida_Coulomb == 1)
    {
        Quantidade_Carga = Quantidade_Carga*0.000000001
    }
    if (Medida_Coulomb == 2)
    {
        Quantidade_Carga = Quantidade_Carga*0.000001
    }

    var Const_Coulomb = 8990000000;
    var Resultado = (Const_Coulomb*Quantidade_Carga)/(Distancia_Da_Barra*(Tamanho_Bastao+Distancia_Da_Barra));

    alert(Resultado+" N/C");
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
