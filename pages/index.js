import Head from 'next/head';
import { theme } from '../src/theme';

/*
# CSS in JS
## Pros
- O próprio JS sinaliza erros de coisa de "tema" da sua aplicação e mudanças gerais
- Se o time (empresa) manja "menos" de CSS tem menos bugs

## Contra
- É mais um JavaScript rodando no navegador processando coisas concorrendo com tudo

*/

function Button({ children }) {
    return (
        <>
            <button id="botao_com_id_unico">
                {children}
            </button>
            <style jsx>{`
                button {
                    border: 1px solid darkgreen;
                    background-color: ${theme.colors.primary[500]};
                    /* background-color: red; */
                    padding: 8px 10px;
                    font-weight: bold;
                    font-family: 'Open Sans', sans-serif;
                }
            `}</style>
        </>
    )
}

export default function Home() {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
                <title>Home</title>
            </Head>
            Pedacinho de tela
            <Button>
                Botão novo
            </Button>

            <button id="botao_com_id_unico" className="button">
                Botão antigo
            </button>

            <style global jsx>{`
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                body {
                    font-family: 'Open Sans', sans-serif;
                }
                #botao_com_id_unico {
                    border: 1px solid red !important;
                }
            `}</style>
        </div>
    )
}