export class FormInput {
  divApp: HTMLElement;
  btnPopupAnnuler: HTMLInputElement;
  btnPopupConfirmer: HTMLInputElement;
  divPopup: HTMLElement;
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
  divSeriesList: HTMLSelectElement;
  divSeriesListContainer: HTMLElement;
  count: number = 0;

  constructor() {
    this.divApp = document.getElementById("app") as HTMLElement;
    this.btnPopupConfirmer = document.getElementById(
      "series-popup__button--confirmer"
    ) as HTMLInputElement;
    this.btnPopupAnnuler = document.getElementById(
      "series-popup__button--annuler"
    ) as HTMLInputElement;
    this.divPopup = document.getElementById("div_popup") as HTMLElement;
    this.divSeriesCount = document.getElementById(
      "div_series-count"
    ) as HTMLElement;
    this.btnAddSeries = document.getElementById(
      "btn_add-series"
    ) as HTMLInputElement;
    this.btnRemoveSeries = document.getElementById(
      "btn_remove-series"
    ) as HTMLInputElement;
    this.btnValidationSeries = document.getElementById(
      "btn_validate-form"
    ) as HTMLInputElement;
    this.btnCancelSeries = document.getElementById(
      "btn_cancel-form"
    ) as HTMLInputElement;
    this.radioFrancaise = document.querySelector(
      'input[name="nationality"][value="française"]'
    ) as HTMLInputElement;
    this.radioEuropeenne = document.querySelector(
      'input[name="nationality"][value="européenne"]'
    ) as HTMLInputElement;
    this.radioAmericaine = document.querySelector(
      'input[name="nationality"][value="américaine"]'
    ) as HTMLInputElement;
    this.radioAutre = document.querySelector(
      'input[name="nationality"][value="autre"]'
    ) as HTMLInputElement;
    this.edtTitleFr = document.getElementById(
      "edt_title-fr"
    ) as HTMLInputElement;
    this.edtTitreOr = document.getElementById(
      "edt_title-original"
    ) as HTMLInputElement;
    this.edtSeasons = document.getElementById(
      "edt_seasons"
    ) as HTMLInputElement;
    this.edtEpisodes = document.getElementById(
      "edt_episodes"
    ) as HTMLInputElement;
    this.edtFirstBroadcast = document.getElementById(
      "edt_first-broadcast"
    ) as HTMLInputElement;
    this.divSeriesForm = document.querySelector(
      "[id=series-form]"
    ) as HTMLElement;
    this.divSeriesList = document.querySelector(
      "[id=divSeriesList]"
    ) as HTMLSelectElement;
    this.divSeriesListContainer = document.querySelector(
      "[id=div_series-list]"
    ) as HTMLElement;

    console.log(this.divSeriesList);

    this.divSeriesForm.style.display = "none";
    this.ouvrirFormAjouter();
    this.ajouterSaisie();
    this.annulerSaisie();
    this.supprimer();
  }

  private ouvrirFormAjouter(): void {
    this.btnAddSeries.addEventListener("click", () => {
      this.divSeriesForm.style.display = "flex";
      this.divSeriesListContainer.style.pointerEvents = "none";
    });
  }

  private counterPlus(): void {
    let counter = (this.count += 1);
    this.divSeriesCount.innerHTML = counter.toString();
  }
  private counterMoins(): void {
    let counter = (this.count -= 1);
    this.divSeriesCount.innerHTML = counter.toString();
  }

  private fermerForm(): void {
    const inputFields = this.divSeriesForm.querySelectorAll("input");
    inputFields.forEach((input) => {
      if (
        input.type === "text" ||
        input.type === "number" ||
        input.type === "date"
      ) {
        input.value = "";
      } else if (input.type === "radio") {
        input.checked = false;
      }
    });

    this.divSeriesForm.style.display = "none";
  }
  private annulerSaisie(): void {
    this.btnCancelSeries.addEventListener("click", () => {
      this.fermerForm();
      this.divSeriesListContainer.style.pointerEvents = "auto";
    });
  }

  private ajouterSaisie(): void {
    this.btnValidationSeries.addEventListener("click", (event) => {
      event.preventDefault();
      this.divSeriesListContainer.style.pointerEvents = "auto";

      const titreFr: string = this.edtTitleFr.value.trim();
      const titreOr: string = this.edtTitreOr.value.trim();
      const dtbc: Date = this.edtFirstBroadcast.valueAsDate;
      const nbseasons: string = this.edtSeasons.value;
      const nbepisodes: string = this.edtEpisodes.value;

      const dateValue = new Date(dtbc);

      const month = dateValue.toLocaleString("default", { month: "long" });
      const year = dateValue.getFullYear();
      const monthYear = `${month} ${year}`;

      let erreur = "";

      let nationality = "";
      if (this.radioFrancaise.checked) {
        nationality = this.radioFrancaise.value;
      } else if (this.radioEuropeenne.checked) {
        nationality = this.radioEuropeenne.value;
      } else if (this.radioAmericaine.checked) {
        nationality = this.radioAmericaine.value;
      } else if (this.radioAutre.checked) {
        nationality = this.radioAutre.value;
      } else {
        erreur += "Nationnalitée à renseigner \n";
      }

      if (titreFr.length === 0) {
        erreur += "Titre français à renseigner\n";
      }
      if (dtbc === null) {
        erreur += "Date de première diffusion à renseigner\n";
      }

      if (nbseasons === "" || 0 > Number(nbseasons)) {
        erreur += "Nombre de saisons à renseigner\n";
      }
      if (nbepisodes === "" || 0 > Number(nbepisodes)) {
        erreur += "Nombre d'épisodes à renseigner\n";
      }

      if (erreur.length === 0) {
        this.counterPlus();
        const liste = this.divSeriesList;
        const opt = new Option(
          titreFr +
            " - " +
            nationality +
            " - " +
            "( " +
            titreOr +
            " )" +
            " - " +
            monthYear +
            " - " +
            nbseasons +
            " saisons" +
            " - " +
            nbepisodes +
            " épisodes"
        );
        liste.options.add(opt);
        this.fermerForm();
      } else {
        alert("Erreur dans le formulaire : \n" + erreur);
      }
    });
  }

  private supprimer(): void {
    this.btnRemoveSeries.addEventListener("click", () => {
      const liste = this.divSeriesList;

      if (liste.selectedIndex != -1) {
        this.popup();
      }
    });
  }
  private popup(): void {
    this.btnRemoveSeries.addEventListener("click", () => {});

    this.divSeriesList.style.pointerEvents = "none";
    this.divPopup.style.display = "block";

    this.btnPopupConfirmer.addEventListener("click", () => {
      const liste = this.divSeriesList;
      const noLigne: number = liste.selectedIndex;
      if (noLigne > -1) {
        liste.remove(noLigne);
        this.counterMoins();
      }
      this.divSeriesList.style.pointerEvents = "auto";
      this.divPopup.style.display = "none";
    });
    this.btnPopupAnnuler.addEventListener("click", () => {
      this.divPopup.style.display = "none";
      this.divSeriesList.style.pointerEvents = "auto";
    });
  }
}

new FormInput();
