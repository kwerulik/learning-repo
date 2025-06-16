CREATE table Karata_Biblioteczna
(
	index_studenta 								INT 			PRIMARY KEY,
	Imie										VARCHAR(16),
  	nazwisko_studenta 							VARCHAR(32),
	Data_urodzenia_studenta 					DATE,
	Wypozyczone_ksiazki 						INT,
	Tytul_wypozyczonej_ksiazki 					VARCHAR(50)		NOT	NULL,
	Autor_ksiazki 								VARCHAR(50),
	Rok_wydania_wypozyczonej_ksiazki 			INT(9),
	Wydawnictwo_ksiazki 						VARCHAR(50),
	Numer_biblioteczny_wypozyczonej_książki 	INT				NOT NULL,
	Dzien_wypozyczenia_ksiazki 					DATE,
	Dziez_oddania_ksiazki 						DATE,
  	Data_wazności_karty_bibliotecznej			DATE			not NULL
);


CREATE TABLE SprzedazNieruchomosci (
    ID INT PRIMARY KEY,
    ImieNazwiskoKlienta VARCHAR(255) NOT NULL,
    AdresKlienta VARCHAR(255) NOT NULL,
    DataZakupu DATE NOT NULL,
    DataWprowadzenia DATE NOT NULL,
    CenaProponowana DECIMAL(10, 2) NOT NULL,
    CenaUzyskana DECIMAL(10, 2) NOT NULL,
    RodzajNieruchomosci VARCHAR(50) NOT NULL,
    AdresNieruchomosci VARCHAR(255) NOT NULL,
    OpisNieruchomosci TEXT
);

CREATE TABLE Pracownicy (
    ID_Pracownika INT PRIMARY KEY,
    Imie VARCHAR(50) NOT NULL,
    Nazwisko VARCHAR(50) NOT NULL,
    FormaZatrudnienia VARCHAR(30) NOT NULL,
    Wyksztalcenie VARCHAR(50),
    Pensja DECIMAL(10, 2) NOT NULL,
    Wydzial VARCHAR(50) NOT NULL
);