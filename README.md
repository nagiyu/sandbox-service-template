# sandbox-service-template

[sandbox-platform](https://github.com/nagiyu/sandbox-platform) を参照するサービスの雛形。「Use this template」から新しいサービスを作る。

## 作った直後にやること

1. `package.json` の `name` をサービス名に変える
2. `CLAUDE.md` の「このサービスについて」を埋める
3. `npm install` で `package-lock.json` を作って commit する (GitHub Packages を読むため、手元では `read:packages` のトークンが要る)

## platform から受け取っているもの

| ファイル | 受け取っているもの |
|---|---|
| `.github/workflows/verify.yml` | reusable workflow `service-verify.yml@v1` |
| `tsconfig.json` | `@nagiyu/sandbox-tsconfig` の `base.json` |
| `package.json` | `@nagiyu/sandbox-common` |
| `renovate.json` | Renovate preset `renovate/default` |
| `.claude/settings.json` | Claude plugin `platform-rules` |
