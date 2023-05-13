# Csapatbeosztás
- Teamleader: Szanyi Szabolcs
- Backend: Juhász Márton Bendegúz
- Frontend: Schaffer Tamás
- Kozma Hunor


# User manual
## Üzemeltetés
<strong>Backend</strong> elindításához szükségünk van egy Visual Studio-ra, amely segítségével a szerverünk a [local](http://localhost:5009) címen lesz elérhető és a kliensünk ezen cím API-jaira fogja küldeni a  kéréseit.

<strong>Frontend</strong> elindításához szükségünk van egy Angular CLI-re. Amennyiben először húzzuk le a repository-t, akkor szükség van az "npm install" parancsra, majd ezt követően pedig az "ng serve" utasítást kiadva a kliensünk le build-elődik. Ha nem adtunk meg egyéb portot, akkor a klienst alapértelmezetten a [local](http://localhost:4200) címen érjük el.
## User - pass kombinációk
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
## API funkciólista <!-- rövid magyarázattal -->
4 db controllert különböztetünk meg, ezek közül az Auth controller foglalja magába az autentikációval kapcsolatos endpointokat, a controller pedig a nevének megfelelő példányokon végez CRUD műveleteket azoknak megfelelő endpointokon keresztül. Bármely CRUD műveletet hívjuk meg, eredményként egy IActionResult-ot fogunk kapni, amelyben az adott példány vagy a hibaüzenet lesz becsomagolva. Egyes controllerek kiegészülnek egyéb logikai endpointokkal, amelyek részletes leírással rendelkeznek a felsorolásban. Ezen endpointok meghívásához szükséges a controller neve mellé írni az adott endpoint nevét is pl.: Amennyiben a SearchSoftwareClaims endpoint tartalmát szeretnénk megkapni akkor azt a /SoftwareClaim/SearchSoftwareClaims címen érjük el.
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
## UI ismertető!
  ### Welcome
  Minden oldal rendelkezik navigációs panellel és jogosultságtól függően különbőző oldalak/funkciók érhetőek el róla. A kezdő oldalon egy általános ismertetőt, kedvcsinálót találunk a webes alkalmazásunkról, ahol kisebb szekciókban találhatóak információ szeletek az alkalmazás képességeiről. A legelsó szekció egy footer elem, ahol a csapat tagjai és feladatkörük kerül megjelenítésre.
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/6c09e62c-8649-492f-8073-e7fb6a8d60fb)
  
  ### Login/Register
  Bármilyen user, jogosultságtól függetlenül hozhat létre új fiókot, illetve bejelentkezhet az alkalmazásba, akár meglévő Microsoft fiókot használva is.
  
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/6264f36a-c67a-4f85-8d27-24a8c7bcb525)
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/17523fb7-ef93-4d5d-b386-6fc7934e1be2)
  
  ### Request Softwares
  Három nagyobb szekcióra osztható fel ez az oldal:
  1. Bal oldalon böngészhetjük ki a számunkra szükséges szoftvert. Amennyiben nem talljuk azt amire szükségünk van, akkor nyugodtan hozhatunk létre újat is az "Add new" gomb segítségével.
  2. Jobb felső szekcióban azt a termet kereshetjük ki, amihez a szoftvert szeretnénk rendelni.
  3. Jobb alsó szekcióban pedig drag and drop módszerrel be tudjuk helyezni a kikeresett szoftvert.
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/ea06e0b2-2924-40f7-a6cf-ae626f59808e)

  ### Add Software
  Új szoftvert tudunk hozzáadni az igényelhető szoftverek listájához.
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/a322c71f-de9f-49fb-86fb-a4043b0240c4)

  ### Add Class
  Manuálisan bármikor tudunk létrehozni új class-okat, amennyiben a nyilvántartásban nem találjuk azt, amelyhez szoftver igényt szeretnénk leadni.
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/eee8d9d4-0e2d-4c80-96c7-1dd657cb0678)

  ### Manage Claims
  <strong>Admin által elérhető!</strong>
  
  Itt tudjuk kezelni a szoftver igényeket. Class-onként látjuk felsorolva, hogy hova, milyen igény érkezett, illetve az igényeknek milyen az állapota. (sent/accepted/rejected)
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/e54de550-f817-44d9-99ea-9cfe353ba081)


# Probléma jegyzőkönyv
## Backend
  - Controller szinten le akartuk kérni az aktuális user-t az alábbi módon:
    var user = await _userManager.GetUserAsync(this.User);
    Erre hamar rá kellett jönnönk, hogy nem működőképes, mivel bejelentkezett felhasználó esetén is null értéket kaptunk vissza.

    Megoldásképp a userek közt a UserName tulajdonságuk alapján kerestünk, mely végül pontosan visszadta a bejelentkezett felhsaználónkat.
    var user = _userManager.Users.FirstOrDefault (t => t.UserName == this.User.Identity.Name);
## Frontend
  - Eredetileg a Figma szerint a komponenseknek gardienses szegélye lett volna, viszont ezt nem sikerült abszorválni.
Ezt úgy lehetett volna megcsinálni, hogy ha egy div kerül a komponemsek mögé úgy, hogy a div 2-3px-el nagyobb mint maga a komponens, és a div kapott volna egy gradienses backgroundot, de akkor elvész a komponensek transzparens háttere.
  - Van az a háttérkép, amin különböző színű alakzatok vannak. Eredeti terv az volt, hogy egyben lehet egy SVG file-ként inportálni, viszont a kep magassaga nagyobb volt mint kellett volna es igy a kep hosszaban max 60%-nyi teret tudott volna befedni, ami nem mutatott volna szepen mert 80-85% az idealis. Igy ezeket az alakzatokat külön le kellett menteni egy SVG fajlba. Végül SVG-ben nem egy nagyobb kép van elmentve, hanem csak alakzatok és azokból is egy-egy példány, amelyekből végül a képet a ‘shared-panel-background’ komponensben állítottuk be.
  
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/5137824c-ebdb-430e-a6b0-a040010affc4)
  - Az apiknál a fetch() hibakezelést (try-catch, vagy .then-.catch) nem szerettük volna folyton minden egyes fetch hívás esetén megcsinálni, ezért készítettünk egy fő apit ‘ApiBase’, aminek van egy generikus ‘wrap’ metódusa, ami kezeli a hibákat, az authorize részét és a konzolra logolást. A többi api pedig ebből az apibol származik le.
  - A formok amiket használunk a create-, update-, login, register részeken, azok szinte alapjaiban ugyanazok, igy szükség volt egy ‘shared-form’ komponensre, ami bekér egy input és egy button tömböt, és ezekben a tömbökben csak az input vagy a button attribútumait kell megadni, illetve a button esetében egy click eseményt, valamint az input esetében egy change eseményt. A probléma az volt, hogy ezeket az eseménykezelőket a form komponens inputként kapja meg és neki fogalma sem lesz melyik komponenstől származik ez az esemény. Igy ha a ‘this’ -t akartuk használni az eseményeken belül, akkor a ‘this’ undefined tipust kapott. A megoldas az volt, hogy amikor paraméterként hozzácastoljuk az eseményeket az inputokhoz és a buttonokhoz, akkor az esemény megnevezése utan kellett ez a ‘.bind(this)’ amivel ez orvosolva lett.
