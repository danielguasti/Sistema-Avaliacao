# Trabalho De POO2 Sistema de avaliação inova

## Grupo: Marcos Daniel Guasti Machado, Vladimir Gama Batista e Yan Zumerle Rangel

### Explicação da UML:
### As classes "Aluno" e "Professor" possuem os atributos "nome" e "matricula" e implementam a interfaçe "Pessoa" com o metodo "criarAvaliacao()".
### A classe "Grupo" possui os atributos "nome" e "descricaoProjeto", além disso, "Grupo" tem dois relacionamento com a classe "Aluno". O relacionamento de liderança é de 1 para 1, ou seja, um aluno pode ser lider de um grupo e um grupo so pode ter um aluno como lider. O relacionamento chamado "grupo" é de 1 para muitos, no qual, um grupo é constituido de varios alunos.
### A classe "Avaliacao" posui os atributos "matriculaAvaliador", "coerencia", "apresentação", "ultilidadeSocial" e "futuro". Alem disso, possui relacionmento com a classe "Grupo" 1 para muitos, no qual, um grupo pode ter varias avaliaçoes.
