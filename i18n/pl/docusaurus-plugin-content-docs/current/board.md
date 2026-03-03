---
sidebar_label: 'Tablica'
---

# Tablica
Sercem programu 4ga Boards jest tablica. Widok tablicy jest głównym widokiem na którym spędzisz większość swojego czasu z programem.

W nowoutworzonym projekcie nie ma jeszcze żadnym tablic - aby je utworzyć należy kliknąć w przycisk "+ Dodaj tablicę" w prawym górnym roku albo na dole panelu bocznego.

![Widok pustej tablicy](/img/boardviewempty_pl.png)

Jeśli wchodzisz do już istniejącego i wypełnionego projektu będzie on wyglądał mniej więcej tak:

![Widok tablicy z otwartym projektem instruktażowym](/img/mainviewgettingstarted_pl.png)

Lub, w zależności od wybranej w ustawieniach osobistych opcji, otworzy się w widoku listy: 
![Tablica w widoku listy](/img/listview_pl.png)

Aktualnie otwarta tablica będzie podświetlona na panelu bocznym.

## Tworzenie nowej tablicy


Możesz mieć wiele tablic w projekcie - wystarczy że dodasz je klikając na przycisk `+ Dodaj tablicę` w prawym górnym rogu w widoku projektu, w dolnej części panelu bocznego bądź też w menu podręcznym projektu. Odpowiednie przyciski zostały zaznaczone na poniższym obrazku. 

![Umiejscowienie przycisków dodaj tablicę](/img/boardaddbutton_pl.png)

Otworzy się okienko w którym możesz nadać nazwę tablicy, użyć dostępnego szablonu list albo zaimportować dane z Trello w formacie .json. W przypadku opcji bezpośrednio z panelu bocznego będzie dostępna opcja wyboru projektu w którym nowa tablica ma się znaleźć (domyślnie jest to obecnie otwarty projekt).

![Menu tworzenia tablicy](/img/boardcreate_pl.png)

Obecnie możesz wybrać z dwóch dostępnych szablonów, szablon prosty:

![Prosty szablon tablicy](/img/boardsimple_pl.png)

oraz szablon kanban:

![Szablon tablicy Kanban](/img/boardkanban_pl.png)


## Dodatkowe opcje tablicy

Aby edytować bądź usunąć tablicę należy najechać na nią w panelu bocznym i kliknąć w ikonkę trzech kropek. Otworzy się menu podręczne z odpowiednimi opcjami. Tutaj możesz również eksportować swoją tablicę do pliku csv. Reorganizacja tablic w obrębie projektu jest możliwa poprzez przeciąganie strzałek znajdujących się na lewo od nazwy tablicy.

![Menu kontekstowe tablicy](/img/boardmenu_pl.png)

## Pasek zadań tablicy

Każda tablica posiada osobny pasek zadań, w którym (zaczynając od lewej) możemy:
1. Ustawić integrację z GitHub (ikonka GitHub),
2. Zobaczyć ilość kart po filtrowaniu,
3. Dodać członków do tablicy poprzez przycisk `+ Dodaj członka`, usunąć członka bądź zmienić jego uprawnienia po kliknięciu na jego ikonę,
4. Filtrowanie kart (więcej poniżej),
5. Zmienić widok (Widok tablicy/Widok listy)

## Filtrowanie tablicy

Filtrowanie tablicy to potężne narzędzie, które pozwala szybko znaleźć to, czego szukasz. Aby nawigacja była jeszcze szybsza, możesz wybrać odpowiednią opcję (wyjaśnioną poniżej), klikając ją lub używając skrótu klawiszowego, gdy jesteś w polu `Filtruj karty...`.

Możesz filtrować tablicę na różne sposoby:

1. `Aa`: Rozróżnianie wielkości liter (`Alt` + `C`): będzie filtrować z uwzględnieniem wielkości liter (Przykład: wpisanie „create” nie zwróci kart z tytułem „Create”)
2. `~`: Dowolne dopasowanie (`Alt` + `V`): „wyszukiwanie inkluzywne”; włącz tę opcję, aby wyświetlać karty, które spełniają dowolny z wybranych filtrów.
(Przykład: jeśli wybierzesz wielu członków, wyszukiwanie zwróci każdą kartę, która ma przypisanego przynajmniej jednego z wybranych członków. Jeśli opcja Dowolne dopasowanie jest wyłączona, pojawią się tylko karty, które mają przypisanych wszystkich wybranych członków.)
3. Filtrowanie według członków: Wybierz/Usuń członków, według których chcesz filtrować.
4. Filtrowanie według etykiet: Wybierz/Usuń etykiety, według których chcesz filtrować.
5. Filtrowanie według terminu wykonania: Wybierz termin wykonania do filtrowania: wyszukiwanie zwróci wszystkie karty z terminem przed wybraną datą; jeśli opcja `Pokaż karty tylko dla wybranego dnia` jest włączona, wyświetlone zostaną wyłącznie karty z *dokładnie* tym terminem. To wyszukiwanie zwraca również karty z odpowiednim terminem podzadań.

![Panel tablicy z opcjami filtrowania](/img/boardtoolbar_pl.png)

## Uprawnienia tablicy
Każdy użytkownik przypisany bądź zarządzający tablicą ma różne uprawnienia w zależności od roli:
- Moderator projektu: zarządza projektem i dodaje/usuwa członków.
- Edytor:  może tworzyć, edytować i usuwać karty,
- Komentator:  może obserwować zawartość tablicy i dodawać komentarze w kartach,
- Obserwujący: może obserwować zawartość tablicy.
