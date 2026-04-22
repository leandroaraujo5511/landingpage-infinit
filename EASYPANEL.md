# Deploy no EasyPanel (VPS)

Este projeto gera arquivos estáticos com Vite e serve com **Nginx** no container (porta **80**).

## No EasyPanel

1. Crie um serviço do tipo **App** (ou **Docker**) apontando para este repositório.
2. **Build**: use o `Dockerfile` na raiz do projeto (padrão).
3. **Porta do container**: `80` (deve bater com o `EXPOSE` do Dockerfile).
4. Ative **HTTPS** no domínio pelo painel (proxy reverso em cima do container).

## Variáveis de ambiente

Não é obrigatório para esta landing. Se no futuro usar `import.meta.env.VITE_*`, defina-as no EasyPanel antes do build ou ajuste o Dockerfile para `ARG`/`ENV` antes de `npm run build`.

## Teste local

```bash
docker compose up --build
```

Abra `http://localhost:8080`.

## Build manual da imagem

```bash
docker build -t infinit-landing:latest .
docker run --rm -p 8080:80 infinit-landing:latest
```
