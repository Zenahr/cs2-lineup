enum Throwable {
    SMOKE = 'smoke',
    FLASH = 'flash',
    MOLLY = 'molly',
    COMBO = 'combo'
}

enum Level {
    MIRAGE = "mirage",
    OVERPASS = "overpass",
    VERTIGO = "vertigo",
    ANCIENT = "ancient",
    INFERNO = "inferno",
    NUKE = "nuke",
    ANUBIS = "anubis",
    DUST2 = "dust2",
    OFFICE = "office"
}

enum Site {
    A = "a",
    B = "b",
    MID = "mid",
    NONE = "none"
}

enum Team {
    T = "t",
    CT = "ct"
}

interface Video {
    src: string;
    location: string;
    level: Level;
    site: Site;
    team: Team;
    variation: number;
    type: Throwable;
    instructions: string;
}

export {
    Throwable,
    Level,
    Site,
    Team,
    Video
}