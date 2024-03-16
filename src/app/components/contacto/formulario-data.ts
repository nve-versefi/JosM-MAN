class FormularioData {
    constructor(
      public name: string = '',
      public email: string = '',
      public phone: string = '',
      public message: string = ''
    ) {}
  }

  interface FormularioData {
    [key: string]: string ;
  }