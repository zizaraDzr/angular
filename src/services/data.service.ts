import { Injectable, Optional } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()
//Данный декоратор гарантирует,
//что встроенный механизм внедрения зависимостей сможет
//создать объект этого класса и передать в него в качестве
//зависимости другой объект (другой сервис или компонент).
export class DataService {
  private data: string[] = ["Tom", "Bob", "Sam"];
  constructor(@Optional() private logService: LogService) {}

  getData(): string[] {
    if (this.logService) this.logService.write("операция получения данных");
    return this.data;
  }
  addData(name: string) {
    this.data.push(name);
    if (this.logService) this.logService.write("операция добавления данных");
  }
}
