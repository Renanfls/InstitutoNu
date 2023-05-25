## Executando JavaScript:
- Extensão Node Exec(F8)
- Navegador(F12)
- Terminal
    - Digite "node" + enter
    ```
    {
        console.log("Olá");
        var a = 10;
        console.log(a);
    }
    ```
    - Digite "node" + nome do arquivo

## Execução de TypeScript:
- Extensão Code runner
    - Vá em configurações > Settings > code-runner > Executor Map > Edit
    - Executar o projeto(Aperte o play no canto superior direito)

Caso apareça `'ts-node' não é reconhecido como um comando interno ou externo, um programa operável ou um arquivo em lotes.` ao executar o projeto. Execute no terminal: `npm install -g ts-node`