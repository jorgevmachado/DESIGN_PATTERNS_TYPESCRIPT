<div align="center">
    <h1>Design Patterns with Typescript</h1>
    <h3>São remedios para solucionar problemas recorrentes.</h3>
</div>

## Princípios da Programação
- **Princípio => LEI**  
- **Princípio da abstração => (P.O.O)**  
- **Don`t repeat yourself**  
- **SOLID => uncle BOB & MICHAEL FELDERS**

## SOLID
- **S => Single Responsability Principle**: Nunca deve haver mais de uma razão para uma classe mudar.
 
- **O => Open Closed Principle**: Aberto para extensão e fechado para modificação. "Alterar Código existente é perigoso".

- **L => Liskov Substitution Principle**: Se para cada objeto o1 do tipo S existe um objeto o2 do tipo T, tal que, para todos os programas P definidos em termos de T, o comportamento de P é inalterado quando o1 é substituído por o2 então S é um subtipo de T. "Uma classe derivada pode ser substituível por sua classe base".
 
- **I => Interface Segregation Principle**: Uma classe não deve ser forçada a implementar interfaces e métodos que não irá utilizar. "Muitas interfaces específicas são melhores do que uma interface única". "Classes não devem ser forçadas a depender de métodos que não usam".

- **D => Dependency Inversion Principle**: Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. "Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações". "Módulo de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações; Abstrações não devem depender de detalhes".

Resumo: 
- **SRP** => Unico Objeto.
- **OCP** => Ao extender de uma classe, essa classe se fecha para modificar.
- **LSP** => Uma classe filha deve funcionar igual ao pai.
- **ISP** => Se não uso não devo ser obrigado a usar.
- **DIP** => Pai não pode depender do filho.

## Design Patterns Category

 - **Creational Patterns**: "CRIACIONAL" São padrões de criação de objetos, que visam abstrair o processo de instanciação de objetos. "Trabalham com a criação de objetos flexiveis e reutilizaveis."
 SEE MORE: [Creational Patterns](01-CREATIONAL/README.md)

- **Structural Patterns**: "ESTRUTURAL" São padrões de composição de classes e objetos. "Definem como trabalhar com objetos e classes em estruturas maiores e complexas, e ainda assim flexiveis e eficientes".
  SEE MORE: [Structural Patterns](02-STRUCTURAL/README.md)

- **Behavioral Patterns**: "COMPORTAMENTAL" São padrões de comunicação entre objetos. "Trabalham com a comunicação eficiente e designam as responsabílidades comuns aos objetos".
  SEE MORE: [Behavioral Patterns](03-BEHAVIORAL/README.md)
