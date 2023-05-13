# Csapatbeosztás
- Teamleader: Szanyi Szabolcs
- Backend: Juhász Márton Bendegúz
- Frontend: Schaffer Tamás
- Kozma Hunor


# User manual
## Üzemeltetés
<strong>Backend</strong> elindításához szükségünk van egy Visual Studio-ra, amely segítségével a szerverünk a http://localhost:5009 címen lesz elérhető és a kliensünk ezen cím API-jaira fogja küldeni a  kéréseit.

<strong>Frontend</strong> elindításához szükségünk van egy Angular CLI-re. Amennyiben először húzzuk le a repository-t, akkor szükség van az "npm install" parancsra, majd ezt követően pedig az "ng serve" utasítást kiadva a kliensünk le build-elődik. Ha nem adtunk meg egyéb portot, akkor a klienst alapértelmezetten a http://localhost:4200 címen érjük el.
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
4 db controllert különböztetünk meg, ezek közül az Auth controller foglalja magába az autentikációval kapcsolatos endpointokat, a controller pedig a nevének megfelelő példányokon végez CRUD műveleteket azoknak megfelelő endpointokon keresztül. Bármely CRUD műveletet hívjuk meg (a Read kivételével), eredményként egy IActionResult-ot fogunk kapni, amelyben az adott példány vagy a hibaüzenet lesz becsomagolva. Egyes controllerek kiegészülnek egyéb logikai endpointokkal, amelyek részletes leírással rendelkeznek a felsorolásban. Ezen endpointok meghívásához szükséges a controller neve mellé írni az adott endpoint nevét is pl.: Amennyiben a SearchSoftwareClaims endpoint tartalmát szeretnénk megkapni akkor azt a /SoftwareClaim/SearchSoftwareClaims címen érjük el.
- ##### /Auth
  - CRUD funkciók
    - [HttpPost] Task<IActionResult> Login(LoginViewModel model)
    - [HttpPut] Task<IActionResult> InsertUser(RegisterViewModel model)
    - [Authorize][HttpGet] Task<IActionResult> GetUserInfos()
    - [Authorize][HttpDelete] Task<IActionResult> DeleteMyself()
  - Egyéb endpointok
    - [Route("[action]")][HttpPost] Task<IActionResult> Microsoft(SocialToken token)
      - A Microsoft loginhoz szükséges endpoint
- ##### /Class
  - CRUD funkciók
    - [HttpGet] IEnumerable<ClassRoom> GetAll()
    - [HttpGet] ClassRoom GetOne(string id)
    - [HttpPost] Task<IActionResult> CreateClass(ClassRoom classRoom)
    - [HttpPut] Task<IActionResult> UpdateClass(ClassRoom updatedClassRoom)
    - [Httpdelete] Task<IActionResult> DeleteClass(string id)
  - Egyéb endpointok
    - [HttpGet][Route("[action]")] IEnumerable<ClassRoom> SearchClasses (string search)
      - Egy olyan gyűjteményt ad vissza, amelyben a példányok valamilyen tulajdonsága tartalmazza a paraméterként megadott search értékét.
- ##### /SoftwareClaim
  - CRUD funkciók
    - [HttpGet] IEnumerable<SoftwareClaim> GetAll()
    - [HttpGet] SoftwareClaim GetOne(string id)
    - [HttpPost] Task<IActionResult> CreateSoftwareClaim(SoftwareClassRoomViewModel model)
    - [HttpPut] Task<IActionResult> UpdateSoftwareClaim( SoftwareClaim updatedSoftwareClaim)
    - [HttpDelete] Task<IActionResult> DeleteSoftwareClaim(string id)
  - Egyéb endpointok
    - [HttpGet][Route("[action]")] IEnumerable<SoftwareClaim> SearchSoftwareClaims(string search)
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
    - [HttpGet][Route("[action]")] IEnumerable<Software> SearchSoftwares(string search)
      - Egy olyan gyűjteményt ad vissza, amelyben a példányok valamilyen tulajdonsága tartalmazza a paraméterként megadott search értékét. Ezen tulajdonságok lehetnek a követekezők:
        - Name
        - VersionNumber
        - Size
## UI ismertető!
  ### Welcome
  Minden oldal rendelkezik navigációs panellel és jogosultságtól függően különbőző oldalak/funkciók érhetőek el róla. A kezdő oldalon egy általános ismertetőt, kedvcsinálót találunk a webes alkalmazásunkról, ahol kisebb szekciókban találhatóak információ szeletek az alkalmazás képességeiről. A legalsó szekció egy footer elem, ahol a csapat tagjai és feladatkörük kerül megjelenítésre.
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/6c09e62c-8649-492f-8073-e7fb6a8d60fb)
  
  ### Login/Register
  Bármilyen user, jogosultságtól függetlenül, hozhat létre új fiókot, illetve bejelentkezhet az alkalmazásba, akár meglévő Microsoft fiókot használva is.
  
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/6264f36a-c67a-4f85-8d27-24a8c7bcb525)
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/17523fb7-ef93-4d5d-b386-6fc7934e1be2)
  
  ### Request Softwares
  Három nagyobb szekcióra osztható fel ez az oldal:
  1. Bal oldalon böngészhetjük ki a számunkra szükséges szoftvert. Amennyiben nem talljuk azt amire szükségünk van, akkor nyugodtan hozhatunk létre újat is az "Add new" gomb segítségével.
  2. Jobb felső szekcióban azt a termet kereshetjük ki, amihez a szoftvert szeretnénk rendelni.
  3. Jobb alsó szekcióban pedig drag and drop módszerrel be tudjuk húzni a kikeresett szoftvert.
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/c70358a4-8802-4cc2-b128-d683841c1afe)


  ### Add Software
  Új szoftvert tudunk hozzáadni az igényelhető szoftverek listájához.
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/a322c71f-de9f-49fb-86fb-a4043b0240c4)

  ### Add Class
  Manuálisan bármikor létre tudunk hozni új class-okat Admin jogosultsággal, amennyiben a nyilvántartásban nem találjuk azt a class-t, amelyhez szoftver igényt szeretnénk leadni.
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/eee8d9d4-0e2d-4c80-96c7-1dd657cb0678)

  ### Manage Claims
  <strong>Admin által elérhető!</strong>
  
  Itt tudjuk kezelni a szoftver igényeket. Class-onként látjuk felsorolva, hogy hova, milyen igény érkezett, illetve az igényeknek milyen az állapota. (sent/accepted/rejected)
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/bba865ac-9724-49c2-8307-8cecca7c5f18)



# Probléma jegyzőkönyv
## Backend
  - Controller szinten le akartuk kérni az aktuális user-t az alábbi módon:
    var user = await _userManager.GetUserAsync(this.User);
    Erre hamar rá kellett jönnönk, hogy nem működőképes, mivel bejelentkezett felhasználó esetén is null értéket kaptunk vissza.

    Megoldásképp a userek közt a UserName tulajdonságuk alapján kerestünk, mely végül pontosan visszadta a bejelentkezett felhsaználónkat.
    var user = _userManager.Users.FirstOrDefault (t => t.UserName == this.User.Identity.Name);
  - A seed-elt, tanár jogosultságú felhasználók valamilyen oknál fogva nem tudtak belépni, viszont ha formon keresztül regisztráltunk felhasználót, akkor vele nem volt probléma. Először a kis- és nagybetűs felhasználónevekre gyanakodtunk, de formon keresztüli regisztráció során ez sem okozott problémát.
  - Amikor egy SoftwareClaim státusza accepted-re változott, akkor az őt tároló terem kapciátsa nem változott. Ehhez a SoftwareClaim Update logikáján kellett módosítani, hogy amennyiben a frissített SoftwareClaim státusza accepted, akkor az idegenkulccsal hivatkozott terem kapacitását csökkentsük.
## Frontend
  - Eredetileg a Figma szerint a komponenseknek gardienses szegélye lett volna, viszont ezt nem sikerült abszorválni.
Ezt úgy lehetett volna megcsinálni, hogy ha egy div kerül a komponemsek mögé úgy, hogy a div 2-3px-el nagyobb mint maga a komponens, és a div kapott volna egy gradienses backgroundot, de akkor elvész a komponensek transzparens háttere.
  - Van az a háttérkép, amin különböző színű alakzatok vannak. Eredeti terv az volt, hogy egyben lehet egy SVG file-ként inportálni őket, viszont a kép magassága nagyobb volt mint kellett volna és így a kép hosszaban, max 60%-nyi teret tudott volna lefedni, ami nem mutatott volna szépen, mert 80-85% az idealis. Igy ezeket az alakzatokat külön le kellett menteni egy SVG fajlba. Végül SVG-ben nem egy nagyobb kép van elmentve, hanem csak alakzatok és azokból is egy-egy példány, amelyekből végül a képet a ‘shared-panel-background’ komponensben állítottuk be.
  
  ![image](https://github.com/bprof-spec-codes/softman/assets/91885130/5137824c-ebdb-430e-a6b0-a040010affc4)
  - Az apiknál a fetch() hibakezelést (try-catch, vagy .then-.catch) nem szerettük volna folyton minden egyes fetch hívás esetén megcsinálni, ezért készítettünk egy fő apit ‘ApiBase’ néven, aminek van egy generikus ‘wrap’ metódusa, ami kezeli a hibákat, az authorize részét és a konzolra logolást. A többi api pedig ebből az apiból származik le.
  - A formok amiket használunk a create-, update-, login, register részeken, azok szinte alapjaiban ugyanazok, igy szükség volt egy ‘shared-form’ komponensre, ami bekér egy input és egy button tömböt, és ezekben a tömbökben csak az input vagy a button attribútumait kell megadni, illetve a button esetében egy click eseményt, valamint az input esetében egy change eseményt. A probléma az volt, hogy ezeket az eseménykezelőket a form komponens inputként kapja meg és neki fogalma sem lesz melyik komponenstől származik ez az esemény. Igy ha a ‘this’ -t akartuk használni az eseményeken belül, akkor a ‘this’ undefined tipust kapott. A megoldas az volt, hogy amikor paraméterként hozzácsatoljuk az eseményeket az inputokhoz és a buttonokhoz, akkor az esemény megnevezése utan kellett ez a ‘.bind(this)’ amivel ez orvosolva lett.
