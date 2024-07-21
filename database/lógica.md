# Jogando com a Lógica

- **AND**

Se todas as expressões forem verdadeiras a expressão completa será verdadeira.

```sql
-- verdadeiro e verdadeiro, ambos devem ser True
SELECT * FROM tab WHERE x = a AND y = b 
```

```
(V) AND (V) = True
(V) AND (F) = False
(F) AND (V) = False
(F) AND (F) = False
```

#### X = A AND Y = B

|     | X   | Y   | Expr1 |     | Expr2 |     | Result |
| --- | --- | --- | ----- | --- | ----- | --- | ------ |
| 1   | A   | B   | A = A | T   | B = B | T   | TRUE   |
| 2   | C   | E   | A = C | F   | E = B | F   | FALSE  |
| 3   | D   | E   | D = A | F   | E = B | F   | FALSE  |
| 4   | A   | F   | A = A | T   | F = B | F   | FALSE  |
| 5   | A   | B   | A = A | T   | B = B | T   | TRUE   |
| 6   | F   | B   | F = A | F   | B = B | T   | FALSE  |
| 7   | G   | B   | G = A | F   | B = B | T   | FALSE  |
| 8   | A   | K   | A = A | T   | K = B | F   | FALSE  |
| 9   | Y   | L   | Y = A | F   | L = B | F   | FALSE  |
| 10  | A   | B   | A = A | T   | B = B | T   | TRUE   |
| 11  | C   | B   | C = A | F   | B = B | T   | FALSE  |

- **OR**

Se uma das expressões for verdadeira a expressão completa será verdadeira.

```sql
-- verdadeiro ou verdadeiro, só um deve ser True
SELECT * FROM tab WHERE x = a OR y = b
```

```
(V) OR (V) = True
(V) OR (F) = True
(F) OR (V) = True
(F) OR (F) = False
```

#### X = A OR Y = B

|     | X   | Y   | Expr1 |     | Expr2 |     | Result |
| --- | --- | --- | ----- | --- | ----- | --- | ------ |
| 1   | A   | B   | A = A | T   | B = B | T   | TRUE   |
| 2   | C   | E   | A = C | F   | E = B | F   | FALSE  |
| 3   | D   | E   | D = A | F   | E = B | F   | FALSE  |
| 4   | A   | F   | A = A | T   | F = B | F   | TRUE   |
| 5   | A   | B   | A = A | T   | B = B | T   | TRUE   |
| 6   | F   | B   | F = A | F   | B = B | T   | TRUE   |
| 7   | G   | B   | G = A | F   | B = B | T   | TRUE   |
| 8   | A   | K   | A = A | T   | K = B | F   | TRUE   |
| 9   | Y   | L   | Y = A | F   | L = B | F   | FALSE  |
| 10  | A   | B   | A = A | T   | B = B | T   | TRUE   |
| 11  | C   | B   | C = A | F   | B = B | T   | TRUE   |

- **NOT**

Inverte o resultado da consulta.

```sql
-- trará o oposto do condicional
SELECT * FROM tab WHERE NOT (x = a AND y = b)
SELECT * FROM tab WHERE NOT (x = a OR y = b)
```

```
(V) AND (V) = False
(V) AND (F) = True
(F) AND (V) = True
(F) AND (F) = True
```

```
(V) OR (V) = False
(V) OR (F) = False
(F) OR (V) = False
(F) OR (F) = True
```

#### NOT (X = A AND Y = B)

|     | X   | Y   | Expr1 |     | Expr2 |     | Result |
| --- | --- | --- | ----- | --- | ----- | --- | ------ |
| 1   | A   | B   | A = A | T   | B = B | T   | FALSE  |
| 2   | C   | E   | A = C | F   | E = B | F   | TRUE   |
| 3   | D   | E   | D = A | F   | E = B | F   | TRUE   |
| 4   | A   | F   | A = A | T   | F = B | F   | TRUE   |
| 5   | A   | B   | A = A | T   | B = B | T   | FALSE  |
| 6   | F   | B   | F = A | F   | B = B | T   | TRUE   |
| 7   | G   | B   | G = A | F   | B = B | T   | TRUE   |
| 8   | A   | K   | A = A | T   | K = B | F   | TRUE   |
| 9   | Y   | L   | Y = A | F   | L = B | F   | TRUE   |
| 10  | A   | B   | A = A | T   | B = B | T   | FALSE  |
| 11  | C   | B   | C = A | F   | B = B | T   | TRUE   |

#### NOT (X = A OR Y = B)

|     | X   | Y   | Expr1 |     | Expr2 |     | Result |
| --- | --- | --- | ----- | --- | ----- | --- | ------ |
| 1   | A   | B   | A = A | T   | B = B | T   | FALSE  |
| 2   | C   | E   | A = C | F   | E = B | F   | TRUE   |
| 3   | D   | E   | D = A | F   | E = B | F   | TRUE   |
| 4   | A   | F   | A = A | T   | F = B | F   | FALSE  |
| 5   | A   | B   | A = A | T   | B = B | T   | FALSE  |
| 6   | F   | B   | F = A | F   | B = B | T   | FALSE  |
| 7   | G   | B   | G = A | F   | B = B | T   | FALSE  |
| 8   | A   | K   | A = A | T   | K = B | F   | FALSE  |
| 9   | Y   | L   | Y = A | F   | L = B | F   | TRUE   |
| 10  | A   | B   | A = A | T   | B = B | T   | FALSE  |
| 11  | C   | B   | C = A | F   | B = B | T   | FALSE  |

#### X = A AND NOT (Y = B)

|     | X   | Y   | Expr1 |     | Expr2 |     | Result |
| --- | --- | --- | ----- | --- | ----- | --- | ------ |
| 1   | A   | B   | A = A | T   | B = B | T   | FALSE  |
| 2   | C   | E   | A = C | F   | E = B | F   | FALSE  |
| 3   | D   | E   | D = A | F   | E = B | F   | FALSE  |
| 4   | A   | F   | A = A | T   | F = B | F   | TRUE   |
| 5   | A   | B   | A = A | T   | B = B | T   | FALSE  |
| 6   | F   | B   | F = A | F   | B = B | T   | FALSE  |
| 7   | G   | B   | G = A | F   | B = B | T   | FALSE  |
| 8   | A   | K   | A = A | T   | K = B | F   | TRUE   |
| 9   | Y   | L   | Y = A | F   | L = B | F   | FALSE  |
| 10  | A   | B   | A = A | T   | B = B | T   | FALSE  |
| 11  | C   | B   | C = A | F   | B = B | T   | FALSE  |

```
((NOT (T AND F)) AND (T OR F)) OR F
((NOT (F)) AND (T)) OR F
(T AND T) OR F
T OR F
T
```

```
(NOT ((3 > 2) OR (4 >= 5)) AND (5 > 4) ) OR (9 > 0)
(NOT ((T) OR (F)) AND (T) ) OR (T)
(NOT (T) AND T) OR T
((F) AND T) OR T
(F) OR T
T
```