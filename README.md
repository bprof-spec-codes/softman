# Software Manager README


### Csapatbeosztás
- Teamleader: Szanyi Szabolcs
- Backend: Juhász Márton Bendegúz
- Frontend: Schaffer Tamás, Kozma Hunor


### User manual
#### Üzemeltetés
#### User - pass kombinációk
- Admin
  - Kovi
    - Email = kovi91@gmail.com
    - Username = kovi91@gmail.com
    - Password = almafa123
- Teachers (Customers)
  - Kiss Pista
    - Email = KisPista@gmail.com
    - Username = KisPista@gmail.com
    - Password = almafa123
  - Jozsi
    - Email = Jozsi@gmail.com
    - Username = Jozsi@gmail.com
    - Password = almafa123
#### API funkciólista <!-- rövid magyarázattal -->
4 db controllert különböztetünk meg, ezek közül az Auth controller foglalja magába az autentikációval kapcsolatos endpointokat, a controller pedig a nevének megfelelő példányokon végez CRUD műveleteket azoknak megfelelő endpointokon keresztül. Bármely CRUD műveletet hívjuk meg, eredmnyként egy IActionResultot fogunk kapni, amelyben az adott példány vagy a hibaüzenet lesz becsomagolva. Egyes controlelrek kiegészülnek egyéb logikai endpointokkal, részletes leírással rendelkeznek a felsorolásban. Ezen endpointok meghívásához szükséges a controller neve mellé írni az adott endpoint nevét is pl.: Amennyiben a SearchSoftwareClaims endpoint tartalmát szeretnénk megkapni akkor azt a /SoftwareClaim/SearchSoftwareClaims címen érjük el.
- ##### /Auth
- ##### /Class
  - CRUD funkciók
    - [HttpGet] IEnumerable<ClassRoom> GetAll()
    - [HttpGet] ClassRoom GetOne(string id)
    - [HttpPost] Task<IActionResult> CreateClass(ClassRoom classRoom)
    - [HttpPut] Task<IActionResult> UpdateClass(ClassRoom updatedClassRoom)
    - [Httpdelete] Task<IActionResult> DeleteClass(string id)
- ##### /SoftwareClaim
  - CRUD funkciók
    - [HttpGet] IEnumerable<SoftwareClaim> GetAll()
    - [HttpGet] SoftwareClaim GetOne(string id)
    - [HttpPost] Task<IActionResult> CreateSoftwareClaim(SoftwareClassRoomViewModel model)
    - [HttpPut] Task<IActionResult> UpdateSoftwareClaim( SoftwareClaim updatedSoftwareClaim)
    - [HttpDelete] Task<IActionResult> DeleteSoftwareClaim(string id)
  - Egyéb endpointok
    - [HttpGet] IEnumerable<SoftwareClaim> SearchSoftwareClaims(string search)
      - Egy olyan gyűjteményt ad vissza, amelyben a példányok valamilyen tulajdonsága tartalmazza a paraméterként megadott search értékét. Ezen tulajdonságok lehetnek a követekezők:
        - ClaimDate
        - Status
        - Az igénylőhöz tartozó FirstName
        - Az igénylőhöz tartozó LastName
        - A szoftverhez tartozó méret
- ##### /Software
  - CRUD funkciók
    - [HttpGet] IEnumerable<Software> GetAll()
    - [HttpGet] Software GetOne(string id)
    - [HttpPost] Task<IActionResult> CreateSoftware( Software software)
    - [HttpPut] Task<IActionResult> UpdateSoftware(Software updatedSoftware)
    - [HttpDelete] Task<IActionResult> DeleteSoftware(string id)
  - Egyéb endpointok
    - [HttpGet] IEnumerable<Software> SearchSoftwares(string search)
      - Egy olyan gyűjteményt ad vissza, amelyben a példányok valamilyen tulajdonsága tartalmazza a paraméterként megadott search értékét. Ezen tulajdonságok lehetnek a követekezők:
        - Name
        - VersionNumber
        - Size

#### UI felület <!-- hol mit lehet elérni, csinálni, képpel alátámasztva -->


### Probléma jegyzőkönyv
#### Backend
#### Frontend
