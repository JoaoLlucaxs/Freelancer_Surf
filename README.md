# Ensinando a configurar o TailwindCSS

- Primeiro vá no google e insira (Tailwind Vite) caso esteja utilizando ReactJs
- Em seu terminal no vsCode ou prompt de comando após estar dentro da pasta do projeto com( cd nome_da_pasta)
- npm install -D tailwindcss postcss autoprefixer ou yarn install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- Após isso irá criar automaticamente um arquivo em seu Vscode chamado (tailwind.confi.js) vá neste arquivo
- Insira-> export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

- Apóa isso crie um arquivo index.css (Na raiz do seu projeto)
- em index.css insira -> @tailwind base;
@tailwind components;
@tailwind utilities;

- Pronto, utilize os componentes a vontade , o index.css é uma configuração que deve estar na raiz do projeto para utilizar os componentes

  # Review do site
  <img src="https://github.com/JoaoLlucaxs/Sistema-Garcom-In-Node/assets/92184255/4dc8cb63-e0f2-40ea-a624-746470802acf"/>

- <p align="center">
  Feito com ❤️ por <a href="https://github.com/JoaoLlucaxs">João Lucas Queiroz (_o_softwaredev)</a>
</p>
