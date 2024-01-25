export enum Matiere {
    BASE_DE_DONNEES = 'Base de données',
    TECHNOLOGIES_WEB = 'Technologies Web',
    GRAILS = 'Grails',
    // Ajoutez d'autres matières ici
}

export enum Prof {
    PROF_1 = 'Prof 1',
    PROF_2 = 'Prof 2',
    PROF_3 = 'Prof 3',
    // Ajoutez d'autres profs ici
}

export const MatiereImages = {
    [Matiere.BASE_DE_DONNEES]: 'assets/UCA-Logo-1niveau-RVB-Blanc.png',
    [Matiere.TECHNOLOGIES_WEB]: 'assets/UCA-Logo-1niveau-RVB-Blanc.png',
    [Matiere.GRAILS]: 'assets/UCA-Logo-1niveau-RVB-Blanc.png',
    // Ajoutez d'autres images de matières ici
}

export const ProfImages = {
    [Prof.PROF_1]: 'assets/UCA-Logo-1niveau-RVB-Blanc.png',
    [Prof.PROF_2]: 'assets/UCA-Logo-1niveau-RVB-Blanc.png',
    [Prof.PROF_3]: 'assets/UCA-Logo-1niveau-RVB-Blanc.png',
    // Ajoutez d'autres images de profs ici
}

export class Assignment {
    _id?: String;
    nom!: String;
    dateDeRendu?: Date;
    rendu?: boolean;
    id?: number;
    auteur!: String; // Nom de l'élève
    matiere!: Matiere; // Matière
    prof!: Prof; // Prof
    note?: number; // Note sur 20
    remarques?: String; // Remarques sur l'assignment
}