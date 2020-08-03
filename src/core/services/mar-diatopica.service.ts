import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { InformacionMarcacion } from "../models/informacion-o-marcacion";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MarDiatopicaService {
  private marDiatopicaUrl: string;

  constructor(private http: HttpClient) {
    this.marDiatopicaUrl = "http://localhost:8080/inlexpo/diccionario/";
  }

  public buscarPorDiccionario(
    diccionarioId: number
  ): Observable<InformacionMarcacion[]> {
    return this.http.get<InformacionMarcacion[]>(
      this.marDiatopicaUrl + diccionarioId + "/marDiatopica"
    );
  }

  public crear(
    diccionarioId: number,
    marDiatopica: InformacionMarcacion
  ): Observable<InformacionMarcacion> {
    return this.http.post<InformacionMarcacion>(
      this.marDiatopicaUrl + diccionarioId + "/marDiatopica",
      marDiatopica
    );
  }
}
