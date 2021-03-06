import * as moment from 'moment';

// enum
enum TypeAsc {
    Belier = 1,
    Taureau = 2,
    Gemaux = 3,
    Cancer = 4,
    Lion = 5,
    Vierge = 6,
    Balance = 7,
    Scorpion = 8,
    Sagittaire = 9,
    Capricorne = 10,
    Verseau = 11,
    Poisson = 12,
    Inconnu = 0
}

type MoisJoursSigneHeure = {
    mois: number,
    jourDebut: number,
    jourFin: number,
    signe: SigneHeure[]
}

type SigneHeure = {
    signe: TypeAsc,
    heureDebut: string,
    heureFin: string,
};

type AscRetour = {
    signe: string,
    signeTypeAsc: TypeAsc,
    degre: number
}

let data = [{
    mois: 1,
    jourDebut: 1,
    jourFin: 10,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '11:00',
        heureFin: '11:59'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '12:00',
        heureFin: '13:19'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '13:20',
        heureFin: '14:59'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '15:00',
        heureFin: '17:39'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '17:40',
        heureFin: '20:19'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '20:20',
        heureFin: '22:59'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '23:00',
        heureFin: '01:39'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '01:40',
        heureFin: '04:19'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '04:20',
        heureFin: '06:49'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '06:50',
        heureFin: '08:39'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '08:40',
        heureFin: '09:59'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '10:00',
        heureFin: '10:59'
    }] 
}, {
    mois: 1,
    jourDebut: 11,
    jourFin: 20,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '10:20',
        heureFin: '11:19'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '11:20',
        heureFin: '12:39'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '12:40',
        heureFin: '13:29'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '14:30',
        heureFin: '16:59'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '17:00',
        heureFin: '19:39'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '19:40',
        heureFin: '22:19'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '22:20',
        heureFin: '00:59'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '01:00',
        heureFin: '03:39'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '03:40',
        heureFin: '05:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '06:00',
        heureFin: '07:59'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '08:00',
        heureFin: '09:19'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '09:20',
        heureFin: '10:19'
    }] 
}, {
    mois: 1,
    jourDebut: 21,
    jourFin: 31,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '09:40',
        heureFin: '10:29'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '10:30',
        heureFin: '11:59'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '12:00',
        heureFin: '13:39'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '13:40',
        heureFin: '16:19'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '16:20',
        heureFin: '18:59'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '19:00',
        heureFin: '21:29'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '21:30',
        heureFin: '00:14'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '00:15',
        heureFin: '02:49'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '02:50',
        heureFin: '05:19'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '05:20',
        heureFin: '07:14'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '07:15',
        heureFin: '08:39'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '08:40',
        heureFin: '09:39'
    }] 
}, {
    mois: 2,
    jourDebut: 1,
    jourFin: 10,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '09:00',
        heureFin: '09:59'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '10:00',
        heureFin: '11:19'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '11:20',
        heureFin: '12:59'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '13:00',
        heureFin: '15:39'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '15:40',
        heureFin: '18:19'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '18:20',
        heureFin: '20:59'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '21:00',
        heureFin: '23:39'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '23:40',
        heureFin: '02:19'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '02:20',
        heureFin: '04:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '05:00',
        heureFin: '06:39'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '06:40',
        heureFin: '07:59'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '08:00',
        heureFin: '08:59'
    }] 
}, {
    mois: 2,
    jourDebut: 11,
    jourFin: 20,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '08:20',
        heureFin: '09:19'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '09:20',
        heureFin: '10:39'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '10:40',
        heureFin: '12:29'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '12:30',
        heureFin: '14:59'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '15:00',
        heureFin: '17:39'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '17:40',
        heureFin: '20:19'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '20:20',
        heureFin: '22:59'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '23:00',
        heureFin: '01:39'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '01:40',
        heureFin: '04:14'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '04:15',
        heureFin: '06:00'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '06:00',
        heureFin: '07:19'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '07:20',
        heureFin: '08:19'
    }] 
}, {
    mois: 2,
    jourDebut: 21,
    jourFin: 29,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '07:45',
        heureFin: '08:44'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '08:45',
        heureFin: '10:09'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '10:10',
        heureFin: '11:59'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '12:00',
        heureFin: '14:29'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '14:30',
        heureFin: '16:59'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '17:00',
        heureFin: '19:44'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '19:45',
        heureFin: '22:29'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '22:30',
        heureFin: '01:09'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '01:10',
        heureFin: '03:39'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '03:40',
        heureFin: '05:29'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '05:30',
        heureFin: '06:44'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '06:45',
        heureFin: '07:44'
    }] 
}, {
    mois: 3,
    jourDebut: 1,
    jourFin: 10,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '07:15',
        heureFin: '07:59'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '08:00',
        heureFin: '09:29'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '09:30',
        heureFin: '11:14'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '11:15',
        heureFin: '13:59'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '14:00',
        heureFin: '16:14'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '16:15',
        heureFin: '19:14'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '19:15',
        heureFin: '21:59'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '22:00',
        heureFin: '00:29'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '00:30',
        heureFin: '02:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '03:00',
        heureFin: '04:44'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '04:45',
        heureFin: '06:14'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '06:15',
        heureFin: '07:14'
    }] 
}, {
    mois: 3,
    jourDebut: 11,
    jourFin: 20,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '06:30',
        heureFin: '07:29'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '07:30',
        heureFin: '08:44'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '08:45',
        heureFin: '10:29'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '10:30',
        heureFin: '13:14'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '13:15',
        heureFin: '15:29'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '15:30',
        heureFin: '18:29'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '18:30',
        heureFin: '21:14'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '21:15',
        heureFin: '23:44'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '23:45',
        heureFin: '02:29'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '02:30',
        heureFin: '04:09'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '04:10',
        heureFin: '05:29'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '05:30',
        heureFin: '06:29'
    }] 
}, {
    mois: 3,
    jourDebut: 21,
    jourFin: 31,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '05:45',
        heureFin: '06:44'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '06:45',
        heureFin: '07:59'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '08:00',
        heureFin: '09:49'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '09:50',
        heureFin: '12:29'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '12:30',
        heureFin: '14:59'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '15:00',
        heureFin: '17:44'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '17:45',
        heureFin: '20:29'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '20:30',
        heureFin: '22:59'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '23:00',
        heureFin: '01:29'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '01:30',
        heureFin: '03:29'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '03:30',
        heureFin: '04:44'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '04:45',
        heureFin: '05:44'
    }] 
}, {
    mois: 4,
    jourDebut: 1,
    jourFin: 10,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '05:00',
        heureFin: '05:59'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '06:00',
        heureFin: '07:19'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '07:20',
        heureFin: '08:59'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '09:00',
        heureFin: '11:44'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '11:45',
        heureFin: '14:14'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '14:15',
        heureFin: '16:59'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '17:00',
        heureFin: '19:39'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '19:40',
        heureFin: '22:14'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '22:15',
        heureFin: '00:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '01:00',
        heureFin: '02:29'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '02:30',
        heureFin: '03:59'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '04:00',
        heureFin: '04:59'
    }] 
}, {
    mois: 4,
    jourDebut: 11,
    jourFin: 20,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '04:20',
        heureFin: '05:19'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '05:20',
        heureFin: '06:39'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '06:40',
        heureFin: '08:29'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '08:30',
        heureFin: '10:59'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '11:00',
        heureFin: '13:39'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '13:40',
        heureFin: '16:19'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '16:20',
        heureFin: '18:59'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '19:00',
        heureFin: '21:29'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '21:30',
        heureFin: '23:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '00:00',
        heureFin: '01:59'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '02:00',
        heureFin: '03:19'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '03:20',
        heureFin: '04:19'
    }] 
}, {
    mois: 4,
    jourDebut: 21,
    jourFin: 30,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '03:40',
        heureFin: '03:39'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '04:40',
        heureFin: '05:59'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '06:00',
        heureFin: '07:39'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '07:40',
        heureFin: '10:29'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '10:30',
        heureFin: '12:59'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '13:00',
        heureFin: '15:39'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '15:40',
        heureFin: '18:19'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '18:20',
        heureFin: '20:59'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '21:00',
        heureFin: '23:29'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '23:30',
        heureFin: '01:29'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '01:30',
        heureFin: '02:39'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '02:40',
        heureFin: '03:39'
    }] 
}, {
    mois: 5,
    jourDebut: 1,
    jourFin: 10,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '03:00',
        heureFin: '03:59'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '04:00',
        heureFin: '05:29'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '05:30',
        heureFin: '06:59'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '07:00',
        heureFin: '09:44'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '09:45',
        heureFin: '12:14'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '12:15',
        heureFin: '15:00'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '15:00',
        heureFin: '17:49'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '17:50',
        heureFin: '20:19'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '20:20',
        heureFin: '22:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '23:00',
        heureFin: '00:44'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '00:45',
        heureFin: '01:59'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '02:00',
        heureFin: '02:59'
    }] 
}, {
    mois: 5,
    jourDebut: 11,
    jourFin: 20,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '02:25',
        heureFin: '03:19'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '03:20',
        heureFin: '04:49'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '04:50',
        heureFin: '06:29'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '06:30',
        heureFin: '09:09'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '09:10',
        heureFin: '11:39'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '11:40',
        heureFin: '14:29'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '14:30',
        heureFin: '17:09'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '17:10',
        heureFin: '19:44'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '19:45',
        heureFin: '22:14'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '22:15',
        heureFin: '23:59'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '00:00',
        heureFin: '01:24'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '01:25',
        heureFin: '02:24'
    }] 
}, {
    mois: 5,
    jourDebut: 21,
    jourFin: 31,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '01:450',
        heureFin: '02:44'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '02:45',
        heureFin: '03:59'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '04:00',
        heureFin: '05:59'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '06:00',
        heureFin: '08:24'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '08:25',
        heureFin: '10:59'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '11:00',
        heureFin: '13:44'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '13:45',
        heureFin: '16:24'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '16:25',
        heureFin: '18:59'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '19:00',
        heureFin: '21:39'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '21:40',
        heureFin: '23:29'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '23:30',
        heureFin: '00:44'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '00:45',
        heureFin: '01:44'
    }] 
}, {
    mois: 6,
    jourDebut: 1,
    jourFin: 10,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '01:00',
        heureFin: '01:59'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '02:00',
        heureFin: '03:24'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '03:25',
        heureFin: '05:14'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '05:15',
        heureFin: '07:44'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '07:45',
        heureFin: '10:19'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '10:20',
        heureFin: '12:59'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '13:00',
        heureFin: '15:44'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '15:45',
        heureFin: '18:24'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '18:25',
        heureFin: '20:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '21:00',
        heureFin: '22:44'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '22:45',
        heureFin: '23:59'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '00:00',
        heureFin: '00:59'
    }] 
}, {
    mois: 6,
    jourDebut: 11,
    jourFin: 20,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '00:25',
        heureFin: '01:24'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '01:25',
        heureFin: '02:44'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '02:45',
        heureFin: '04:29'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '04:30',
        heureFin: '07:09'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '07:10',
        heureFin: '09:44'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '09:45',
        heureFin: '12:29'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '12:30',
        heureFin: '15:09'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '15:10',
        heureFin: '17:44'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '17:45',
        heureFin: '20:09'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '20:10',
        heureFin: '21:59'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '22:00',
        heureFin: '23:24'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '23:25',
        heureFin: '00:24'
    }] 
}, {
    mois: 6,
    jourDebut: 21,
    jourFin: 30,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '23:45',
        heureFin: '00:44'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '00:45',
        heureFin: '01:59'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '02:00',
        heureFin: '03:49'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '03:50',
        heureFin: '06:29'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '06:30',
        heureFin: '08:59'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '09:00',
        heureFin: '11:44'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '11:45',
        heureFin: '14:29'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '14:30',
        heureFin: '16:59'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '17:00',
        heureFin: '19:39'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '19:40',
        heureFin: '21:24'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '21:25',
        heureFin: '22:44'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '22:45',
        heureFin: '23:44'
    }] 
}, {
    mois: 7,
    jourDebut: 1,
    jourFin: 10,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '23:10',
        heureFin: '00:09'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '00:10',
        heureFin: '01:29'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '01:30',
        heureFin: '03:29'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '03:20',
        heureFin: '05:49'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '05:50',
        heureFin: '08:29'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '08:30',
        heureFin: '11:09'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '11:10',
        heureFin: '13:49'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '13:50',
        heureFin: '16:29'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '16:30',
        heureFin: '18:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '19:00',
        heureFin: '20:49'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '20:50',
        heureFin: '22:09'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '22:10',
        heureFin: '23:09'
    }] 
}, {
    mois: 7,
    jourDebut: 11,
    jourFin: 20,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '22:30',
        heureFin: '23:29'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '23:30',
        heureFin: '00:59'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '01:00',
        heureFin: '02:39'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '02:40',
        heureFin: '05:09'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '05:10',
        heureFin: '07:44'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '07:45',
        heureFin: '10:29'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '10:30',
        heureFin: '13:09'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '13:10',
        heureFin: '15:44'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '15:45',
        heureFin: '18:29'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '18:30',
        heureFin: '20:09'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '20:10',
        heureFin: '21:29'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '21:30',
        heureFin: '22:29'
    }] 
}, {
    mois: 7,
    jourDebut: 21,
    jourFin: 31,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '21:40',
        heureFin: '22:39'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '22:40',
        heureFin: '23:59'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '00:00',
        heureFin: '01:49'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '01:50',
        heureFin: '04:19'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '04:20',
        heureFin: '06:59'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '07:00',
        heureFin: '09:39'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '09:40',
        heureFin: '12:19'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '12:20',
        heureFin: '14:59'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '15:00',
        heureFin: '17:29'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '17:30',
        heureFin: '19:19'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '19:20',
        heureFin: '20:39'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '20:40',
        heureFin: '21:39'
    }] 
}, {
    mois: 8,
    jourDebut: 1,
    jourFin: 10,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '21:00',
        heureFin: '21:59'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '22:00',
        heureFin: '23:24'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '23:25',
        heureFin: '01:14'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '01:15',
        heureFin: '03:44'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '03:45',
        heureFin: '06:19'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '06:20',
        heureFin: '08:59'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '09:00',
        heureFin: '11:44'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '11:45',
        heureFin: '14:24'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '14:25',
        heureFin: '16:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '17:00',
        heureFin: '18:44'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '18:45',
        heureFin: '19:59'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '20:00',
        heureFin: '20:59'
    }] 
}, {
    mois: 8,
    jourDebut: 11,
    jourFin: 20,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '20:25',
        heureFin: '21:24'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '21:25',
        heureFin: '22:44'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '22:45',
        heureFin: '00:29'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '00:30',
        heureFin: '02:59'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '03:00',
        heureFin: '05:44'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '05:45',
        heureFin: '08:24'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '08:25',
        heureFin: '10:59'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '11:00',
        heureFin: '13:39'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '13:40',
        heureFin: '16:14'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '16:15',
        heureFin: '17:59'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '18:00',
        heureFin: '19:24'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '19:25',
        heureFin: '20:24'
    }] 
}, {
    mois: 8,
    jourDebut: 21,
    jourFin: 31,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '19:40',
        heureFin: '20:39'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '20:40',
        heureFin: '21:59'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '22:00',
        heureFin: '23:44'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '23:45',
        heureFin: '02:29'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '02:30',
        heureFin: '04:59'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '05:00',
        heureFin: '07:39'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '07:40',
        heureFin: '10:29'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '10:30',
        heureFin: '12:59'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '13:00',
        heureFin: '15:29'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '15:30',
        heureFin: '17:19'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '17:20',
        heureFin: '18:39'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '18:40',
        heureFin: '19:39'
    }] 
}, {
    mois: 9,
    jourDebut: 1,
    jourFin: 10,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '19:00',
        heureFin: '19:59'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '20:00',
        heureFin: '21:29'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '21:30',
        heureFin: '23:14'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '23:15',
        heureFin: '01:59'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '02:00',
        heureFin: '04:19'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '04:20',
        heureFin: '06:59'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '07:00',
        heureFin: '09:49'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '09:50',
        heureFin: '12:19'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '12:20',
        heureFin: '14:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '15:00',
        heureFin: '17:39'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '17:40',
        heureFin: '17:59'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '18:00',
        heureFin: '18:59'
    }] 
}, {
    mois: 9,
    jourDebut: 11,
    jourFin: 20,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '18:30',
        heureFin: '19:24'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '19:25',
        heureFin: '20:44'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '20:45',
        heureFin: '22:29'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '22:30',
        heureFin: '00:59'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '01:00',
        heureFin: '03:39'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '03:40',
        heureFin: '06:19'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '06:20',
        heureFin: '08:59'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '09:00',
        heureFin: '11:29'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '11:30',
        heureFin: '14:14'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '14:15',
        heureFin: '15:59'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '16:00',
        heureFin: '17:29'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '17:30',
        heureFin: '18:29'
    }] 
}, {
    mois: 9,
    jourDebut: 21,
    jourFin: 30,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '17:40',
        heureFin: '18:39'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '18:40',
        heureFin: '19:59'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '20:00',
        heureFin: '21:39'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '21:40',
        heureFin: '00:29'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '00:30',
        heureFin: '02:59'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '03:00',
        heureFin: '05:39'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '05:40',
        heureFin: '08:19'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '08:20',
        heureFin: '10:59'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '11:00',
        heureFin: '13:29'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '13:30',
        heureFin: '15:19'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '15:20',
        heureFin: '16:39'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '16:40',
        heureFin: '17:39'
    }] 
}, {
    mois: 10,
    jourDebut: 1,
    jourFin: 10,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '17:00',
        heureFin: '17:59'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '18:00',
        heureFin: '19:19'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '19:20',
        heureFin: '21:14'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '21:15',
        heureFin: '23:44'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '23:45',
        heureFin: '02:14'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '02:15',
        heureFin: '04:59'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '05:00',
        heureFin: '07:44'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '07:45',
        heureFin: '10:19'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '10:20',
        heureFin: '12:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '13:00',
        heureFin: '14:44'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '14:45',
        heureFin: '15:59'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '16:00',
        heureFin: '16:59'
    }] 
}, {
    mois: 10,
    jourDebut: 11,
    jourFin: 20,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '16:20',
        heureFin: '17:19'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '17:20',
        heureFin: '18:44'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '18:45',
        heureFin: '20:29'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '20:30',
        heureFin: '23:09'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '23:10',
        heureFin: '01:44'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '01:45',
        heureFin: '04:24'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '04:25',
        heureFin: '07:09'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '07:10',
        heureFin: '09:39'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '09:40',
        heureFin: '12:19'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '12:20',
        heureFin: '13:59'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '14:00',
        heureFin: '15:19'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '15:20',
        heureFin: '16:19'
    }] 
}, {
    mois: 10,
    jourDebut: 21,
    jourFin: 31,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '15:40',
        heureFin: '16:39'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '16:40',
        heureFin: '17:59'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '18:00',
        heureFin: '19:59'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '20:00',
        heureFin: '22:29'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '22:30',
        heureFin: '00:59'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '01:00',
        heureFin: '03:39'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '03:40',
        heureFin: '06:29'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '06:30',
        heureFin: '08:59'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '09:00',
        heureFin: '11:39'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '11:40',
        heureFin: '13:19'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '13:20',
        heureFin: '14:39'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '14:40',
        heureFin: '15:39'
    }] 
}, {
    mois: 11,
    jourDebut: 1,
    jourFin: 10,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '15:00',
        heureFin: '15:59'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '16:00',
        heureFin: '17:24'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '17:25',
        heureFin: '18:59'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '19:00',
        heureFin: '21:44'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '21:45',
        heureFin: '00:24'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '00:25',
        heureFin: '02:59'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '03:00',
        heureFin: '05:49'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '05:50',
        heureFin: '08:19'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '08:20',
        heureFin: '10:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '11:00',
        heureFin: '12:44'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '12:45',
        heureFin: '13:59'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '14:00',
        heureFin: '14:59'
    }] 
}, {
    mois: 11,
    jourDebut: 11,
    jourFin: 20,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '14:30',
        heureFin: '15:19'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '15:20',
        heureFin: '16:44'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '16:45',
        heureFin: '18:29'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '18:30',
        heureFin: '21:09'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '21:10',
        heureFin: '23:39'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '23:40',
        heureFin: '02:24'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '02:25',
        heureFin: '04:59'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '05:00',
        heureFin: '07:44'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '07:45',
        heureFin: '10:19'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '10:20',
        heureFin: '11:59'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '12:00',
        heureFin: '13:19'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '13:20',
        heureFin: '14:29'
    }] 
}, {
    mois: 11,
    jourDebut: 21,
    jourFin: 30,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '13:50',
        heureFin: '14:39'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '14:40',
        heureFin: '15:59'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '16:00',
        heureFin: '17:44'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '17:45',
        heureFin: '20:29'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '20:30',
        heureFin: '22:59'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '23:00',
        heureFin: '01:39'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '01:40',
        heureFin: '04:19'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '04:20',
        heureFin: '06:59'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '07:00',
        heureFin: '09:29'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '09:30',
        heureFin: '11:19'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '11:20',
        heureFin: '12:39'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '12:40',
        heureFin: '13:49'
    }] 
}, {
    mois: 12,
    jourDebut: 1,
    jourFin: 10,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '13:10',
        heureFin: '13:59'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '14:00',
        heureFin: '15:29'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '15:30',
        heureFin: '17:09'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '17:10',
        heureFin: '19:49'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '19:50',
        heureFin: '22:19'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '22:20',
        heureFin: '00:59'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '01:00',
        heureFin: '03:49'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '03:50',
        heureFin: '06:24'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '06:25',
        heureFin: '08:59'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '09:00',
        heureFin: '10:44'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '10:45',
        heureFin: '11:59'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '12:00',
        heureFin: '13:09'
    }] 
}, {
    mois: 12,
    jourDebut: 11,
    jourFin: 20,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '12:30',
        heureFin: '13:24'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '13:25',
        heureFin: '14:49'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '14:50',
        heureFin: '16:29'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '16:30',
        heureFin: '19:09'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '19:10',
        heureFin: '21:39'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '21:40',
        heureFin: '00:24'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '00:25',
        heureFin: '03:09'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '03:10',
        heureFin: '05:44'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '05:45',
        heureFin: '08:14'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '08:15',
        heureFin: '09:59'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '10:00',
        heureFin: '11:19'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '11:20',
        heureFin: '12:29'
    }] 
}, {
    mois: 12,
    jourDebut: 21,
    jourFin: 31,
    signe: [{
        signe: TypeAsc.Belier,
        heureDebut: '11:40',
        heureFin: '12:39'
    }, {
        signe: TypeAsc.Taureau,
        heureDebut: '12:40',
        heureFin: '13:59'
    }, {
        signe: TypeAsc.Gemaux,
        heureDebut: '14:00',
        heureFin: '16:44'
    }, {
        signe: TypeAsc.Cancer,
        heureDebut: '16:45',
        heureFin: '18:29'
    }, {
        signe: TypeAsc.Lion,
        heureDebut: '18:30',
        heureFin: '20:59'
    }, {
        signe: TypeAsc.Vierge,
        heureDebut: '21:00',
        heureFin: '23:39'
    }, {
        signe: TypeAsc.Balance,
        heureDebut: '23:40',
        heureFin: '02:19'
    }, {
        signe: TypeAsc.Scorpion,
        heureDebut: '02:20',
        heureFin: '04:59'
    }, {
        signe: TypeAsc.Sagittaire,
        heureDebut: '05:00',
        heureFin: '07:29'
    }, {
        signe: TypeAsc.Capricorne,
        heureDebut: '07:30',
        heureFin: '09:19'
    }, {
        signe: TypeAsc.Verseau,
        heureDebut: '09:20',
        heureFin: '10:39'
    }, {
        signe: TypeAsc.Poisson,
        heureDebut: '10:40',
        heureFin: '11:39'
    }] 
}]

export class Ascendant {
    private data: MoisJoursSigneHeure[] = [];
    private dateATester: string;
    private heureATester: string;
    constructor(plusHeure: number, dateATester: string, heureATester: string) {
        this.data = data.slice();
        this.dateATester = dateATester;
        this.heureATester = heureATester;
        // Ajout heure
        if (plusHeure > 0) {
            let timeDebut: any;
            let timeFin: any;
            let data2 : MoisJoursSigneHeure[] = [];
            let data3 : SigneHeure[] = [];
            data.forEach(element => {
                data3 = [];
                element.signe.forEach(el => {
                    timeDebut = moment(el.heureDebut, 'HH:mm');
                    timeDebut = moment(timeDebut, 'HH:mm').add(plusHeure, 'hours').format('HH:mm')
                    timeFin = moment(el.heureFin, 'HH:mm');
                    timeFin = moment(timeFin, 'HH:mm').add(plusHeure, 'hours').format('HH:mm')
                    data3.push({
                        signe: el.signe,
                        heureDebut: timeDebut,
                        heureFin: timeFin
                    });
                })
                data2.push({
                    mois: element.mois,
                    jourDebut: element.jourDebut,
                    jourFin: element.jourFin,
                    signe: data3.slice()
                });
            });
            this.data = data2.slice()
        }
    }

    /**
    * This is the table with +x hour(s) calculation
    * @returns returns a table MoisJoursSigneHeure[]
    */
    getData() {
        return this.data.slice();
    }

    getAscendant(): AscRetour {
        // console.log(moment('1986-04-03').format('MM'));
        let signeTexte: string = '?';
        let degreDansSigne = 0;
        let elSigne: TypeAsc = TypeAsc.Inconnu;
        let jourMax = 0;
        this.getData().forEach(element => {
            if (element.mois == +moment(this.dateATester).format('MM')) {
                // calcul en fonction du jour
                degreDansSigne = 0
                if (element.jourFin > jourMax) {
                    jourMax = element.jourFin
                }
                if (+moment(this.dateATester).format('DD') >= element.jourDebut && +moment(this.dateATester).format('DD') <= element.jourFin) {
                    element.signe.forEach(el => {
                        // console.log(el.heureDebut + ' ' + el.signe);
                        if ((moment(this.heureATester, 'HH:mm').format('HH:mm') >= moment(el.heureDebut, 'HH:mm').format('HH:mm')) && (moment(this.heureATester, 'HH:mm').format('HH:mm') <= moment(el.heureFin, 'HH:mm').format('HH:mm'))) {
                            switch (el.signe) {
                                case TypeAsc.Belier: {
                                    signeTexte = "Belier";
                                    elSigne = el.signe
                                    break;
                                }
                                case TypeAsc.Taureau: {
                                    signeTexte = "Taureau";
                                    elSigne = el.signe
                                    break;
                                }
                                case TypeAsc.Gemaux: {
                                    signeTexte = "Gemaux";
                                    elSigne = el.signe
                                    break;
                                }  
                                case TypeAsc.Cancer: {
                                    signeTexte = "Cancer";
                                    elSigne = el.signe
                                    break;
                                }   
                                case TypeAsc.Lion: {
                                    signeTexte = "Lion";
                                    elSigne = el.signe
                                    break;
                                } 
                                case TypeAsc.Vierge: {
                                    signeTexte = "Vierge";
                                    elSigne = el.signe
                                    break;
                                }
                                case TypeAsc.Balance: {
                                    signeTexte = "Balance";
                                    elSigne = el.signe
                                    break;
                                }    
                                case TypeAsc.Scorpion: {
                                    signeTexte = "Scorpion";
                                    elSigne = el.signe
                                    break;
                                }  
                                case TypeAsc.Sagittaire: {
                                    signeTexte = "Sagittaire";
                                    elSigne = el.signe
                                    break;
                                } 
                                case TypeAsc.Capricorne: {
                                    signeTexte = "Capricorne";
                                    elSigne = el.signe
                                    break;
                                }
                                case TypeAsc.Verseau: {
                                    signeTexte = "Verseau";
                                    elSigne = el.signe
                                    break;
                                }   
                                case TypeAsc.Poisson: {
                                    signeTexte = "Poisson";
                                    elSigne = el.signe
                                    break;
                                }                                                                                                                                                                                                                                                 
                            }
                            // console.log('ok ' + moment(this.heureATester, 'HH:mm').format('HH:mm') + ' ' + moment(el.heureDebut, 'HH:mm').format('HH:mm') + ' ' + moment(el.heureFin, 'HH:mm').format('HH:mm'));
                        }               
                    });
                }
                // calcul en fonction du jour
                // degreDansSigne = (+moment(this.dateATester).format('DD') / jourMax) * jourMax;
                /*if (jourMax = 30) {
                    console.log(+moment(this.dateATester).format('DD'))
                    console.log('/');
                    console.log(jourMax);
                    console.log('* jourMax');
                    console.log(degreDansSigne);
                }*/
                // FAUX faire calcul des heure/minutes
                // let calcUneHeure = ((1 * jourMax) / jourMax) / 12;
                // let calcUneMinute = (((1 * jourMax) / jourMax) / 12) / 60;
                // calcul en fonction de l'heure
                // degreDansSigne += +moment(this.heureATester, 'HH:mm').format('HH') * calcUneHeure;
                // degreDansSigne += +moment(this.heureATester, 'HH:mm').format('mm') * calcUneMinute;
                degreDansSigne = 0;
                let maxMinutes = 24 * 60;
                let heuresCalc = +moment(this.heureATester, 'HH:mm').format('HH') * 60;
                let minsCalc = +moment(this.heureATester, 'HH:mm').format('mm');
                degreDansSigne = ((heuresCalc + minsCalc) / maxMinutes) * 30;
            }
        })
        return {
            signe: signeTexte,
            signeTypeAsc: elSigne,
            degre: degreDansSigne
        }
    }
}
/*
let test = new Ascendant(1, '1986-04-03', '04:54');
console.log('---');
console.log(test.getData());
console.log('---');
console.log(test.getAscendant());*/

export default Ascendant;