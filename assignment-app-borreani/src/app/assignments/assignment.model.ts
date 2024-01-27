export enum Matiere {
    GEOMETRIE = 'Geometrie',
    MATH = 'Mathématiques',
    LITTERATURE = 'LITTERATURE',
    // Ajoutez d'autres matières ici
}

export enum Prof {
    PROF_1 = 'Prof 1',
    PROF_2 = 'Prof 2',
    PROF_3 = 'Prof 3',
    // Ajoutez d'autres profs ici
}

export const MatiereImages = {
    [Matiere.GEOMETRIE]: 'assets/geometrie.jpg',
    [Matiere.MATH]: 'assets/math.jpg',
    [Matiere.LITTERATURE]: 'assets/litterature.jpg',
    // Ajoutez d'autres images de matières ici
}

export const ProfImages = {
    [Prof.PROF_1]: 'assets/pigeon2.jpg',
    [Prof.PROF_2]: 'assets/mouette.jpg',
    [Prof.PROF_3]: 'assets/canard.jpg',
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
  static prof: any;
}