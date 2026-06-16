# Nest CLI — Cheatsheet

Referência rápida para o workspace `nest-monorepo-workspace`.

## Comandos principais

| Comando | Descrição |
|---------|-----------|
| `nest new <nome>` | Cria projeto em standard mode |
| `nest generate app <nome>` | Cria app e ativa monorepo mode |
| `nest generate library <nome>` | Cria lib em `libs/` |
| `nest build [projeto]` | Compila app ou lib |
| `nest start [projeto]` | Compila e executa app |
| `nest generate module users` | Gera módulo no default project |
| `nest generate controller users` | Gera controller |
| `nest generate service users` | Gera service |
| `nest info` | Versões instaladas |

## Aliases

```bash
nest g app api        # nest generate app api
nest g lib shared     # nest generate library shared
nest g mo users       # nest generate module users
nest g co users       # nest generate controller users
nest g s users        # nest generate service users
```

## Opções úteis

| Flag | Efeito |
|------|--------|
| `--no-spec` | Não gera arquivos `.spec.ts` |
| `--project api` | Gera no projeto `api` em vez do default |
| `--flat` | Gera arquivos sem subpasta |
| `--dry-run` | Mostra o que seria criado sem escrever |

## Exemplos neste repo

```bash
# Build
nest build api
nest build gateway
nest build shared

# Dev
nest start api --watch
nest start gateway --watch

# Gerar feature na api
nest g module users --project api
nest g controller users --project api
```

## Links

- [Workspaces](https://docs.nestjs.com/cli/monorepo)
- [Libraries](https://docs.nestjs.com/cli/libraries)
