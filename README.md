# Portfólio — Documentação

Este projeto é um portfólio pessoal com estética técnica. Ele é dividido em seções (herói, projetos, laboratório, sobre e contato) e usa animações sutis para reforçar a narrativa.

## Estrutura do projeto

- `index.html`: metadados do site (título, descrição, Open Graph).
- `src/pages/Index.tsx`: composição das seções da landing page.
- `src/components/sections/`: conteúdo de cada seção (texto e dados).
- `src/components/NetworkCanvas.tsx`: fundo animado com conexões.
- `src/components/Navigation.tsx`: navegação fixa por âncoras.
- `src/index.css`: tokens de design, tipografia e animações.

## Onde editar o conteúdo

- Hero (texto principal e frases): `src/components/sections/HeroSection.tsx`
- Projetos (lista e métricas): `src/components/sections/ProjectsSection.tsx`
- Laboratório (experimentos): `src/components/sections/LabSection.tsx`
- Sobre (manifesto e ferramentas): `src/components/sections/AboutSection.tsx`
- Contato (email e links): `src/components/sections/ContactSection.tsx`

## Personalização rápida

- Título, descrição e autor: `index.html`
- Cores e tipografia: `src/index.css`
- Links de navegação: `src/components/Navigation.tsx`
- Fundo animado: `src/components/NetworkCanvas.tsx`

## Rodar localmente

```sh
npm install
npm run dev
```

## Build e preview

```sh
npm run build
npm run preview
```

## Checklist antes de publicar

- Atualizar email e links sociais em `src/components/sections/ContactSection.tsx`
- Revisar textos e métricas dos projetos em `src/components/sections/ProjectsSection.tsx`
- Ajustar metadados em `index.html`
