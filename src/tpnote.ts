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
  divSeriesElements: HTMLElement;
  count: number = 0;
  selectedElement: boolean = false;

  constructor() {
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
      "[id=series-list]"
    ) as HTMLElement;
    this.divSeriesElements = document.querySelector(
      "[id=div_series-list]"
    ) as HTMLElement;

    console.log(this.divSeriesElements);

    this.divSeriesForm.style.display = "none";
    this.ouvrirFormAjouter();
    this.ajouterVideo();
    this.annulerSaisie();
    this.supprimer();
  }

  private ouvrirFormAjouter(): void {
    this.btnAddSeries.addEventListener("click", () => {
      this.divSeriesForm.style.display = "flex";
      this.divSeriesList.style.pointerEvents = 'none';
    });
  }

  private ajouterVideo(): void {
    this.btnValidationSeries.addEventListener("click", (event) => {
      event.preventDefault();
      this.divSeriesList.style.pointerEvents = 'auto';

      let nationality = "";
      if (this.radioFrancaise.checked) {
        nationality = this.radioFrancaise.value;
      } else if (this.radioEuropeenne.checked) {
        nationality = this.radioEuropeenne.value;
      } else if (this.radioAmericaine.checked) {
        nationality = this.radioAmericaine.value;
      } else if (this.radioAutre.checked) {
        nationality = this.radioAutre.value;
      }

      const titreFr: string = this.edtTitleFr.value.trim();
      const titreOr: string = this.edtTitreOr.value.trim();
      const dtbc: Date = this.edtFirstBroadcast.value;
      const nbseasons: number = this.edtSeasons.valueAsNumber;
      const nbepisodes: number = this.edtEpisodes.valueAsNumber;

      const dateValue = new Date(dtbc);

      const month = dateValue.toLocaleString("default", { month: "long" });
      const year = dateValue.getFullYear();
      const monthYear = `${month} ${year}`;

      let erreur = "";
      if (titreFr.length === 0) {
        erreur += "Titre français à renseigner<br>";
      }
      if (dtbc === null) {
        erreur += "Date de première diffusion à renseigner</br>";
      }
      if (nbseasons === null) {
        erreur += "Nombre de saisons à renseigner<br>";
      }
      if (nbepisodes === null) {
        erreur += "Nombre d'épisodes à renseigner<br>";
      }

      if (erreur.length === 0) {
        this.counterPlus();
        const liste = this.divSeriesElements;
        const listItem = document.createElement("li");
        listItem.textContent =
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
          " épisodes";
        liste.appendChild(listItem);
        this.fermerForm();
      } else {
        alert("Erreur dans le formulaire " + erreur);
      }
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
      this.divSeriesList.style.pointerEvents = 'auto';

    });
  }

  private supprimer(): void {
    this.divSeriesElements.addEventListener("click", (event) => {
        const targetElement = event.target;
        if (targetElement instanceof HTMLElement && targetElement.tagName === 'LI') {
            targetElement.style.backgroundColor = "red";
            this.btnRemoveSeries.addEventListener("click", () => {
                targetElement.remove();
                this.counterMoins();
            });
        }
    });
}

}

new FormInput();
