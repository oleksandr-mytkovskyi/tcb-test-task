// Таблиці для юзерів

// Таблиця з паспортними даними юзарів 
interface UserPassword {
    userId: number, // по userId йде зв'язок з таблицею User
    uPasswordFirstName: string,
    uPasswordLastName: string,
    uPasswordSeria: string,
    uPasswordDataEnd: string,
}

// Таблиця всіх юзарів 
interface User {
    userId: number, // по userId йде зв'язок з таблицею конкретної поїздки Trip
    userStatus: number,
    userSex: string,
    userFirstName: string,
    userLastName: string,
    userSurName: string,
    userDataOfBorn: string,
    userPhone: number,
    userEmail: string,
    userIcon: string,
}

// Таблиця для автобусів

interface Bus {
    busId: number,
    busName: string,
    busSeatsCounter: number,
    driverId: number,
}

interface BusDrivers {
    driverId: number, // по driverId йде зв'язок з таблицею Bus
    driverFirstName: string,
    driverLastName: string,
    driverPhone: number,
}

// Таблиці для готелів

// Таблиця всіх готелів
interface Hotels {
    hotelId: number, // по hotelId йде зв'язок з таблицею конкретного готелю Hotel
    hotelName: string,
    hotelPhone: number,
    hotelAddPhone: number,
    hotelSeats: number,
    hotelRoom: number,
    hotelAdress: string,
    hotelManagerName: string,
}

// Таблиця всіх номерів
interface Room {
    hotelId: number, // по hotelId йде зв'язок з таблицею конкретного готелю Hotel
    roomId: number,
    roomName: string,
    roomSeats: number,
    roomPrice: number,
    roomTimeStart: string,
    roomTimeEnd: string,
}

// Таблиці поїздок

// Таблиця конкретної поїздки де показаний список всіх User поїздки
interface Trip {
    tripId: number, // по tripId йде зв'язок з таблицею всіх поїздок Trips
    userId: number, // по userId йде зв'язок з таблицею юзерів та інформацією про юзера
    busId: number,
    busSeatsNumber: number,
    hotelId: number,
    roomId: number, // по roomrId йде зв'язок з таблицею юзерів та інформацією про юзера
    tripPrice: number,
    totalPrice: number,
    userCost: number,
    isPayed: boolean,
}

// Таблиця всіх поїздок
interface Trips {
    tripId: number,
    tripName: string,
    busCounter: number, 
    hotelCounter: number,
    tripStart: string,
    tripEnd: string,
    tripPlaceAll: number,
    tripPlaceFree: number,
    totalPriceValue: number,
}

// для випадків коли в поїздці 2+ автобуса, або 2+ готеля виносимо ці сутності в окремі таблиці:

interface BusesInTrip {
    busId: number,  
    tripId: number,
}

interface HotelsInTrip {
    hotelId: number, 
    tripId: number,
}


