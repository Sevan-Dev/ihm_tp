export class FormInput {
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

    constructor() {
        this.divSeriesCount = document.getElementById('series-count') as HTMLElement;
        this.btnAddSeries = document.getElementById('add-series') as HTMLInputElement;
        this.btnRemoveSeries = document.getElementById('remove-series') as HTMLInputElement;
        this.btnValidationSeries = document.getElementById('validate-form') as HTMLInputElement;
        this.btnCancelSeries = document.getElementById('cancel-form') as HTMLInputElement;
        this.radioFrancaise = document.querySelector('input[name="nationality"][value="française"]') as HTMLInputElement;
        this.radioEuropeenne = document.querySelector('input[name="nationality"][value="européenne"]') as HTMLInputElement;
        this.radioAmericaine = document.querySelector('input[name="nationality"][value="américaine"]') as HTMLInputElement;
        this.radioAutre = document.querySelector('input[name="nationality"][value="autre"]') as HTMLInputElement;
        this.edtTitleFr = document.getElementById('title-fr') as HTMLInputElement;
        this.edtTitreOr = document.getElementById('title-original') as HTMLInputElement;
        this.edtSeasons = document.getElementById('seasons') as HTMLInputElement;
        this.edtEpisodes = document.getElementById('episodes') as HTMLInputElement;
        this.edtFirstBroadcast = document.getElementById('first-broadcast') as HTMLInputElement;
        this.divSeriesForm = document.querySelector('.series-form') as HTMLElement;
        this.divSeriesList = document.querySelector('.series-list') as HTMLElement;

        console.log(this.divSeriesForm);
        this.divSeriesForm.style.display = "none";
    }
    
    private test(): void {
    }
  }


new FormInput();
