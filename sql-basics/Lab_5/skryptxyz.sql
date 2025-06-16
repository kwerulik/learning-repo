CREATE TABLE Asortyment(
 id integer primary key, 
 Nazwa varchar(20), 
 Opis varchar(20) default 'Nie wprowadzono', 
 Jednostka varchar(20),
 stawka decimal(2,0)
);


CREATE TABLE towary (
 id integer primary key, 
 typ_id integer,
 nazwa VARCHAR(20),
 Ilosc INTEGER, 
 Data_Przyjecia date default getdate(),
 netto decimal(7,2)
);


CREATE TABLE klienci(
 PESEL char(11) primary key,
 imie varchar(100),
 nazwisko varchar(100),
 data_ur date,
 data_wprow date default getdate() 
 );


create table dzialy(
 id integer primary key,
 nazwa varchar(10),
 opis varchar(100)
);


create table pracownicy(
 PESEL char(11) primary key,
 imie varchar(100),
 nazwisko varchar(100),
 dzial_id integer,
 data_zatr date default getdate(),
 kierownik char(11)
);

create table sprzedaz(
 id integer primary key,
 id_tow integer,
 ilosc integer,
 id_prac char(11),
 id_klienci char(11),
 data_zakupu date default getdate()
);
