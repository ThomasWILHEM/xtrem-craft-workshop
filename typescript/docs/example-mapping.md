- **Story 1: Define Pivot Currency**
```gherkin
As a Foreign Exchange Expert
I want to be able to define a Pivot Currency
So that I can express exchange rates based on it
```

### Il ne doit y avoir qu'une seule monnaie pivot

---
> Que ce passe t-il quand on met en place une monnaie pivot ?

#### Mise en place de monnaie pivot

```gherkin
Given a currency
When we choose the currency
Then exchange rates are defined by the currency
```



---

- **Story 2: Add an exchange rate**
```gherkin
As a Foreign Exchange Expert
I want to add/update exchange rates by specifying: a multiplier rate and a currency
So they can be used to evaluate client portfolios
```
### Le multiplier doit être supérieur à 0

---
> Que ce passe t-il quand on ajoute un taux de change avec un multiplier égal à 0 ?

#### Erreur en cas de multiplier nul

```gherkin
Given a null (=0) multiplier and a currency
When I want to add a multiplier
Then I receive an error explaining that the multiplier is equal to 0
```
 ----

> Que ce passe t-il quand on modifie un taux de change et qu'on met un multiplier égal à 0 ?

#### Erreur en cas de multiplier nul

```gherkin
Given a null (=0) multiplier and a currency
When I want to modify a exchange rate by changing the multipier to 0
Then I receive an error explaining that the multiplier is equal to 0
```

 ----

> Que ce passe t-il quand on ajout un taux de change ?

#### Possibilité d'ajouter un taux de change

```gherkin
Given a multiplier rate superior to 0 and currency
When I add an exchange rate
Then a new exchange rate is available
```

 ----

- **Story 3: Convert a Money**
```gherkin
As a Bank Consumer
I want to convert a given amount in currency into another currency
So it can be used to evaluate client portfolios
```
----

### La conversion doit se faire entre deux monnaies différentes

----

> Que ce passe t-il quand on convertie des EUR en USD ?

#### Convertir des EUR en USD

```gherkin
Given a bank with a EUR pivot currency
When I convert 10 EUR to USD
Then I receive the amount of EUR in USD
```


 ----
> Que ce passe t-il quand on convertie des USD en EUR ?

#### Convertir des USD en EUR

```gherkin
Given a bank with a USD pivot currency
When I convert 10 USD to EUR
Then I receive the amount of USD in EUR
```

 ----
> Que ce passe t-il quand on convertie des EUR en EUR ?

#### Convertir des EUR en EUR

```gherkin
Given a bank with a EUR pivot currency
When I convert 10 EUR to EUR
Then I receive an error explaining that I am converting EUR with EUR
```