import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IPost } from "./interface/post";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Post } from "./client.component";

@Injectable()
export class HttpService {
  errorMessage: string = "";
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(
      map((data: any) => {
        return data.map(function (post: any): IPost {
          return new Post(post.userId, post.id, post.title, post.body);
        });
      }),
      catchError((err) => {
        console.log(err);
        this.errorMessage = err.message;
        return [];
      })
    );
  }
  getSum(num1: number, num2: number) {
    const params = new HttpParams()
      .set("num1", num1.toString())
      .set("num2", num2.toString());
    console.log({ params });
    return this.http.get("http://localhost:3000/sum", { params });
  }
  postData(num1: number, num2: number) {
    const body = { name: num1, age: num2 };
    return this.http.post("http://localhost:3000/postuser", body); 
  }
}
