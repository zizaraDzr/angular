import { Component } from '@angular/core'
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from "./http.service";
import { IPost } from './interface/post'

export class Post implements IPost {
  public userId: number;
  public id: number;
  public title: string;
  public text: string;

  constructor(userId: number, id: number, title: string, text: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.text = text;
  }
}

@Component({
  selector: "client-app",
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  providers: [HttpService],
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.css"],
})
export class ClientComponent {
  posts: Post[] = [];
  num1: number = 0;
  num2: number = 0;
  sum: number | undefined;
  done: boolean = false;

  constructor(public httpService: HttpService) {}
  countplus() {
    this.posts.length = 0;
     this.httpService.getSum(this.num1, this.num2).subscribe({
       next: (data: any) => {
         this.sum = data.result;
         this.done = true;
       },
     });
  }
  getPosts() {
    this.httpService
      .getPosts()
      .subscribe({ next: (data: IPost[]) => (this.posts = data) });
  }
  postData() {
    this.httpService.postData(this.num1, this.num2).subscribe({
      next: (data: any) => {
        console.log(data)
         this.sum = data.age;
        this.done = true;
      },
      error: (error) => console.log(error),
    });
  }
}