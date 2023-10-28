# 🐉 Trybers and Dragons 🐲

No universo de Trybers and Dragons - T&D, quase todos os seres que andam por essas terras pertencem a uma raça definida.

As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens dentro do jogo desde a sua criação, como os seus pontos de vida e a sua destreza. No entanto, existem seres bestiais denominados monstros que não possuem uma raça específica, mas podem lutar.

Alguns seres também possuem uma energia e, ao treinarem o uso da energia, passam a possuir um arquétipo. De modo geral, os arquétipos definem a vocação de uma personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em T&D, podemos citar guerreiro, mago e necromante.

Boa parte dos seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos. Em muitas ocasiões podem acontecer lutas entre personagens diversas, bem como entre personagens e monstros.

## Tecnologias e Técnicas Utilizadas

- **TypeScript**: A linguagem de programação utilizada para desenvolver o projeto, proporcionando tipagem estática e recursos modernos do JavaScript.

- **Programação Orientada a Objetos (POO)**: A abordagem de programação utilizada para estruturar o código em classes e objetos, refletindo os conceitos do mundo real.

- **Arquitetura SOLID**: Princípios de design de software que promovem código limpo, organizado e de fácil manutenção. Os princípios SOLID são:
  - **Single Responsibility Principle (SRP)**: Cada classe deve ter apenas uma razão para mudar.
  - **Open/Closed Principle (OCP)**: A classe deve estar aberta para extensão, mas fechada para modificação.
  - **Liskov Substitution Principle (LSP)**: Objetos de subtipos devem ser substituíveis pelos objetos de seus tipos base.
  - **Interface Segregation Principle (ISP)**: Muitas interfaces específicas são melhores do que uma única interface geral.
  - **Dependency Inversion Principle (DIP)**: Módulos de alto nível não devem depender de módulos de baixo nível, ambos devem depender de abstrações.

Essas técnicas e tecnologias foram fundamentais para criar um código robusto, flexível e fácil de manter no universo de Trybers and Dragons.

## Estrutura do Projeto

### Classes e Interfaces

1. **Race**
   - `src/Races/Race.ts`
   - Classe abstrata que define as características gerais de uma raça, como nome e destreza.

2. **Dwarf, Elf, Halfling, Orc**
   - `src/Races/Dwarf.ts`, `src/Races/Elf.ts`, `src/Races/Halfling.ts`, `src/Races/Orc.ts`
   - Classes que herdam de `Race` e representam raças específicas, definindo pontos de vida e outras características.

3. **Energy**
   - `src/Energy.ts`
   - Interface que define o tipo de energia (mana ou stamina) e a quantidade associada.

4. **Archetype**
   - `src/Archetypes/Archetype.ts`
   - Classe abstrata que define os arquétipos de personagens, como guerreiro, mago, etc.

5. **Mage, Necromancer, Warrior, Ranger**
   - `src/Archetypes/Mage.ts`, `src/Archetypes/Necromancer.ts`, `src/Archetypes/Warrior.ts`, `src/Archetypes/Ranger.ts`
   - Classes que herdam de `Archetype` e representam arquétipos específicos, com habilidades de ataque e custos de energia.

6. **Fighter**
   - `src/Fighter/Fighter.ts`
   - Interface que define os atributos e métodos comuns a todos os lutadores, como pontos de vida, força, defesa, etc.

7. **SimpleFighter**
   - `src/Fighter/SimpleFighter.ts`
   - Interface que define os atributos e métodos de lutadores simples, sem habilidades especiais.

8. **Character**
   - `src/Character.ts`
   - Classe que representa um personagem no universo de T&D, implementando a interface `Fighter`.

9. **Monster**
   - `src/Monster.ts`
   - Classe que representa um monstro no universo de T&D, implementando a interface `SimpleFighter`.

10. **PVP**
    - `src/Battle/PVP.ts`
    - Classe que herda de `Battle` e representa uma batalha entre dois personagens jogáveis (PvP).

### Diretórios

- `src/Races/`: Contém as classes relacionadas a raças.
- `src/Archetypes/`: Contém as classes relacionadas a arquétipos.
- `src/Fighter/`: Contém as interfaces e classes relacionadas a lutadores.
- `src/Battle/`: Contém a classe que representa uma batalha.

## Execução e Testes

### Com Docker (Recomendado)

1. Certifique-se de ter o Docker instalado em seu sistema.
2. Clone o repositório e navegue até o diretório raiz do projeto.
3. Execute o comando `docker-compose up -d` para inicializar o container trybers_and_dragons.
4. Para acessar o terminal interativo do container, utilize o comando `docker exec -it trybers_and_dragons bash`.
5. Para instalar as dependências (se houver), execute `npm install`.

⚠️ Todos os comandos do package.json devem ser executados dentro do container.

### Sem Docker

1. Certifique-se de ter o Node.js (versão 16) instalado em seu sistema.
2. Clone o repositório e navegue até o diretório raiz do projeto.
3. Execute `npm install` para instalar as dependências (se houver).

⚠️ Não execute o comando `npm audit fix`, pois pode gerar conflitos com o avaliador.

### Testes Automatizados

Note que os testes são fornecidos como um avaliador para o projeto e não foram desenvolvidos por mim. Eles são essenciais para verificar se o código atende aos requisitos especificados.

Para executar os testes, utilize o comando `npm test`.
