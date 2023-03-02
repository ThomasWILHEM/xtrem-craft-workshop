# Code review

- La classe Bank contient des fonctions pour convertir de l'argent.
- Il y a aussi des fonctions qui permettent de modifier les taux de changes des devises.
- La classe Bank contient une map avec plusieurs devises (devise1 -> devise2) avec leux taux de changes respectifs.
- Il y a une fonction permettant d'ajouter une entrée à cette map, avec deux devises et le taux
- La classe MoneyCalculator contient des fonctions pour faire des opérations sur des devises;
- L'enum Currency est une classe qui contient le nom des devises.
- Au final, cette application permet d'éxecuter des opérations sur différentes devises, par exemple convertir un montant en EUR vers USD, mais aussi répertorier les taux de changes de certaines monnaies.

# Code review 2

#### MoneyCalculator 

- Dans les fonctions de la classe MoneyCalculator, le paramètre currency n'est pas utilisé
- Dans la classe MoneyCalculator, toutes les méthodes sont statiques
#### MissingExchangeRateError
- MissingExchangeRateError : attribut message inutilisé.
#### Bank
- Bank : les imports ne sont pas corrects + problèmes d'indentation dans la fonction Convert.
- 
