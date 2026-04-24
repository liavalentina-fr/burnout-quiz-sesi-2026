using System;

public class HelloWorld
{
    static int LerResposta()
    {
        int valor;
        while (true)
        {
            string entrada = Console.ReadLine();
            if (int.TryParse(entrada, out valor) && valor >= 1 && valor <= 7)
            {
                return valor;
            }
            Console.WriteLine("Entrada inválida! Digite um número entre 1 e 7:");
        }
    }

    public static void Main(string[] args)
    {
        int[] respostas = new int[20];
        string[] tipos = new string[20];
        int total = 0;

        Console.WriteLine("Pergunta 1: Sinto que tenho boas relações com meus colegas de trabalho.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[0] = LerResposta();
        tipos[0] = "pos";

        Console.WriteLine("Pergunta 2: Consigo manter contato com pessoas fora do meu trabalho com frequência.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[1] = LerResposta();
        tipos[1] = "pos";

        Console.WriteLine("Pergunta 3: Sinto que faço parte de um time coeso e colaborativo.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[2] = LerResposta();
        tipos[2] = "pos";

        Console.WriteLine("Pergunta 4: Tenho me sentido cada vez mais distante das pessoas ao meu redor.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[3] = LerResposta();
        tipos[3] = "neg";

        Console.WriteLine("Pergunta 5: Prefiro ficar sozinho do que interagir com colegas, mesmo em situações casuais.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[4] = LerResposta();
        tipos[4] = "neg";

        Console.WriteLine("Pergunta 6: Consigo encerrar meu expediente no horário previsto com regularidade.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[5] = LerResposta();
        tipos[5] = "pos";

        Console.WriteLine("Pergunta 7: Sinto que a quantidade de trabalho que recebo é compatível com minha carga horária.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[6] = LerResposta();
        tipos[6] = "pos";

        Console.WriteLine("Pergunta 8: Tenho controle sobre o meu tempo dentro do trabalho.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[7] = LerResposta();
        tipos[7] = "pos";

        Console.WriteLine("Pergunta 9: Trabalho frequentemente além do horário, mesmo sem necessidade real.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[8] = LerResposta();
        tipos[8] = "neg";

        Console.WriteLine("Pergunta 10: Sinto que, se não ficar além do horário, serei mal visto pela equipe ou chefia.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[9] = LerResposta();
        tipos[9] = "neg";

        Console.WriteLine("Pergunta 11: Faço pausas regulares ao longo do dia para descansar a mente.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[10] = LerResposta();
        tipos[10] = "pos";

        Console.WriteLine("Pergunta 12: Sinto que meu tempo de almoço é respeitado e não invadido por demandas.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[11] = LerResposta();
        tipos[11] = "pos";

        Console.WriteLine("Pergunta 13: Consigo me desligar do trabalho nos fins de semana e feriados.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[12] = LerResposta();
        tipos[12] = "pos";

        Console.WriteLine("Pergunta 14: Sinto culpa quando paro de trabalhar para descansar, mesmo brevemente.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[13] = LerResposta();
        tipos[13] = "neg";

        Console.WriteLine("Pergunta 15: Percebo que estou trabalhando mesmo durante momentos que deveriam ser de descanso.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[14] = LerResposta();
        tipos[14] = "neg";

        Console.WriteLine("Pergunta 16: Recebo retornos claros e construtivos sobre o meu desempenho.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[15] = LerResposta();
        tipos[15] = "pos";

        Console.WriteLine("Pergunta 17: Sinto que meu trabalho é reconhecido quando entrego bons resultados.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[16] = LerResposta();
        tipos[16] = "pos";

        Console.WriteLine("Pergunta 18: A comunicação com minha chefia é aberta e transparente.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[17] = LerResposta();
        tipos[17] = "pos";

        Console.WriteLine("Pergunta 19: Raramente recebo qualquer tipo de retorno sobre o que faço.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[18] = LerResposta();
        tipos[18] = "neg";

        Console.WriteLine("Pergunta 20: Sinto que as críticas que recebo são injustas ou mal explicadas.");
        Console.WriteLine("Concordo 7 6 5 4 3 2 1 Discordo");
        respostas[19] = LerResposta();
        tipos[19] = "neg";

        for (int i = 0; i < 20; i++)
        {
            int ponto = 0;

            switch (tipos[i])
            {
                case "pos":
                    ponto = respostas[i] - 1;
                    break;
                case "neg":
                    ponto = 7 - respostas[i];
                    break;
                default:
                    ponto = 0;
                    break;
            }

            total += ponto;
        }

        double resultado = ((double)total / 120) * 100;

        Console.WriteLine($"Resultado: {resultado:F2}%");

        if (resultado <= 25)
        {
            Console.WriteLine("Nível: Baixo risco de burnout");
        }
        else if (resultado <= 50)
        {
            Console.WriteLine("Nível: Risco moderado");
        }
        else if (resultado <= 75)
        {
            Console.WriteLine("Nível: Alto risco de burnout");
        }
        else
        {
            Console.WriteLine("Nível: Risco muito alto");
        }
    }
}
