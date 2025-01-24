---
sidebar_label: 'Tablica'
---

# Tablica
Sercem programu 4ga Boards jest tablica. Widok tablicy jest głównym widokiem na którym spędzisz większość swojego czasu z programem.

W nowoutworzonym projekcie nie ma jeszcze żadnym tablic - aby je utworzyć należy kliknąć w przycisk "+ Dodaj tablicę" w prawym górnym roku albo na dole panelu bocznego.

![Widok pustej tablicy](/img/boardviewempty_pl.png)

Jeśli wchodzisz do już istniejącego i wypełnionego projektu będzie on wyglądał mniej więcej tak:

![Widok tablicy z otwartym projektem instruktażowym](/img/mainviewgettingstarted_pl.png)

Aktualnie otwarta tablica będzie podświetlona na panelu bocznym.

## Tworzenie nowej tablicy


Możesz mieć wiele tablic w projekcie - wystarczy że dodasz je klikając na przycisk "+ Dodaj tablicę" w prawym górnym rogu w widoku projektu, w dolnej części panelu bocznego bądź też w menu podręcznym projektu. Odpowiednie przyciski zostały zaznaczone na poniższym obrazku. 

![Umiejscowienie przycisków dodaj tablicę](/img/boardaddbutton_pl.png)

Otworzy się okienko w którym możesz nadać nazwę tablicy, użyć dostępnego szablonu list albo zaimportować dane z Trello w formacie .json. W przypadku opcji bezpośrednio z panelu bocznego będzie dostępna opcja wyboru projektu w którym nowa tablica ma się znaleźć (domyślnie jest to obecnie otwarty projekt).

![Menu tworzenia tablicy](/img/boardcreate_pl.png)

Obecnie możesz wybrać z dwóch dostępnych szablonów, szablon prosty:

![Prosty szablon tablicy](/img/boardsimple_pl.png)

oraz szablon kanban:

![Szablon tablicy Kanban](/img/boardkanban_pl.png)


## Dodatkowe opcje tablicy

Aby edytować bądź usunąć tablicę należy najechać na nią w panelu bocznym i kliknąć w ikonkę trzech kropek. Otworzy się menu podręczne z odpowiednimi opcjami. Reorganizacja tablic w obrębie projektu jest możliwa poprzez przeciąganie strzałek znajdujących się na lewo od nazwy tablicy.

![Menu kontekstowe tablicy](/img/boardmenu_pl.png)


Każda tablica posiada osobny panel z ustawieniami, w którym (zaczynając od lewej) możemy:
1. Zobaczyć ilość kart po filtrowaniu (ilość kart odfiltrowanych z ilości wszystkich kart).
2. Dodać lub usunąć członków (jeśli jesteśmy administratorami albo moderatorami projektu)
3. Filtrować istniejące karty po przypisanych do nich użytkownikach.
4. Filtrować istniejące karty po przypisanych do nich tagach. W tym miejscu można także tworzyć, edytować i usuwać tagi.
5. Zarządzać integracją z GitHubem (w trakcie implementacji)

![Panel tablicy z opcjami filtrowania](/img/boardfilters_pl.png)

## Uprawnienia tablicy
Każdy użytkownik przypisany bądź zarządzający tablicą ma różne uprawnienia w zależności od roli:
- Moderator projektu: zarządza projektem i dodaje/usuwa członków.
- Edytor:  może tworzyć, edytować i usuwać karty,
- Komentator:  może obserwować zawartość tablicy i dodawać komentarze w kartach,
- Obserwujący: może obserwować zawartość tablicy.
