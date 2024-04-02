type TpNote = {
    divSeriesCount: HTMLElement;
    btnAddSeries: HTMLInputElement;
    btnRemoveSeries: HTMLInputElement;
    btnValidationSeries: HTMLInputElement;
    btnCancelSeries: HTMLInputElement;
    radioFrancaise: HTMLInputElement;
    radioEuropeenne: HTMLInputElement;
    radioAmericaine: HTMLInputElement;
    radioAutre: HTMLInputElement;
    edtTitleFr: HTMLInputElement;
    edtTitreOr: HTMLInputElement;
    edtSeasons: HTMLInputElement;
    edtEpisodes: HTMLInputElement;
    edtFirstBroadcast: HTMLInputElement;
    divSeriesForm: HTMLElement;
    divSeriesList: HTMLElement;
  };
  
  class VueTpNote {
    private _form: TpNote;
  
    constructor(form: TpNote) {
      this._form = form;
      initVueTpNote()

      this._form.divSeriesForm.hidden = true;
      console.log(this._form.btnAddSeries); 
    }
  
    get form(): TpNote {
      return this._form;
    }
  }
  
  // Supposons que cette fonction soit appelée après que le DOM soit complètement chargé
  function initVueTpNote() {
    // Remplacer 'getElementById' par les sélecteurs appropriés pour vos éléments
    const form: TpNote = {
      divSeriesCount: document.getElementById('series-count') as HTMLElement,
      btnAddSeries: document.getElementById('add-series') as HTMLInputElement,
      btnRemoveSeries: document.getElementById('remove-series') as HTMLInputElement,
      btnValidationSeries: document.getElementById('validate-form') as HTMLInputElement,
      btnCancelSeries: document.getElementById('cancel-form') as HTMLInputElement,
      radioFrancaise: document.querySelector('input[name="nationality"][value="française"]') as HTMLInputElement,
      radioEuropeenne: document.querySelector('input[name="nationality"][value="européenne"]') as HTMLInputElement,
      radioAmericaine: document.querySelector('input[name="nationality"][value="américaine"]') as HTMLInputElement,
      radioAutre: document.querySelector('input[name="nationality"][value="autre"]') as HTMLInputElement,
      edtTitleFr: document.getElementById('title-fr') as HTMLInputElement,
      edtTitreOr: document.getElementById('title-original') as HTMLInputElement,
      edtSeasons: document.getElementById('seasons') as HTMLInputElement,
      edtEpisodes: document.getElementById('episodes') as HTMLInputElement,
      edtFirstBroadcast: document.getElementById('first-broadcast') as HTMLInputElement,
      divSeriesForm: document.querySelector('.series-form') as HTMLElement,
      divSeriesList: document.querySelector('.series-list') as HTMLElement,
    };
  
    const vue = new VueTpNote(form);
    return vue;
  }
  