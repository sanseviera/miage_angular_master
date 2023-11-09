
export class Meta{
    static assignments= [
        {
          nom:"exemple 1",
          dateDeRendu:"30/08/2023",
          rendu: true,
        },
        {
          nom:"exemple 2",
          dateDeRendu:"",
          rendu: false,
        },
        {
          nom:"exemple 3",
          dateDeRendu:"03/09/2023",
          rendu: true,
        },
      ];

      static add(x:any){
        Meta.assignments.push(x)
      }
}